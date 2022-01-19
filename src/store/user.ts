import router from "@/router";
import { ElMessage } from "element-plus";
import { Ref, ref } from "vue";

export interface User {
  authenticated: boolean;
  authenticationError?: string;
}
export const state: Ref<User> = ref({
  authenticated: false,
});

export const checkLogin = (login: {
  username: string;
  password: string;
}): void => {
  if (login.username === "vilsafur" && login.password === "vilsafur") {
    state.value.authenticated = true;
  } else {
    ElMessage({
      message: "Identifiant ou mot de passe incorrect",
      type: "error",
    });
  }

  router.push("/");
};
