import router from "@/router";
import { AUTH_KEY } from "@/utils/apolloClient";
import { ElMessage } from "element-plus";
import { Ref, ref } from "vue";
import jwt from "jsonwebtoken";

const token = window.localStorage.getItem(AUTH_KEY);

if (token) {
  const decodedToken = jwt.decode(token, { json: true });
  if (!decodedToken || (decodedToken.exp ?? 0) * 1000 < new Date().getTime()) {
    window.localStorage.removeItem(AUTH_KEY);
  }
}

export interface User {
  authenticated: boolean;
  authenticationError?: string;
}
export const state: Ref<User> = ref({
  authenticated: token !== undefined && token !== null,
});

export const checkLogin = (body: {
  username: string;
  password: string;
}): void => {
  console.log(process.env.VUE_APP_URL_BACKEND);

  fetch(process.env.VUE_APP_URL_BACKEND + "/authentication_token", {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then(async (value) => {
      if (value.status == 200) {
        const token = await value.json().then((value) => value.token);
        window.localStorage.setItem(AUTH_KEY, token);
        state.value.authenticated = true;

        router.push("/");
      } else if (value.status == 401) {
        ElMessage({
          message: "Identifiant ou mot de passe incorrect",
          type: "error",
        });
      } else {
        ElMessage({
          message: "Erreur de communication avec le serveur",
          type: "error",
        });
      }
    })
    .catch((reason) => {
      ElMessage({
        message: reason,
        type: "error",
      });
    });
};
