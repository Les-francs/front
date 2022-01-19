import router from "@/router";
import { Ref, ref } from "vue";

export interface User {
  authenticated: boolean;
}
export const state: Ref<User> = ref({
  authenticated: true,
});

export const checkLogin = (login: {
  username: string;
  password: string;
}): void => {
  if (login.username === "vilsafur" && login.password === "vilsafur") {
    state.value.authenticated = true;
  }

  router.push("/");
};
