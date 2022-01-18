import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { state } from "@/store/user";
import Layout from "@/layout/index.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "/caserne",
        name: "Caserne",
        component: () =>
          import(/* webpackChunkName: "caserne" */ "../views/Caserne.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function (to, from, next) {
  console.log("beforeEach", to.path + " - Auth: " + state.value.authenticated);
  if (
    to.path !== "/login" &&
    to.path !== "login" &&
    !state.value.authenticated
  ) {
    next({ path: "/login" });
  } else if (
    (to.path === "/login" || to.path === "login") &&
    state.value.authenticated
  ) {
    next({ path: "/" });
  } else {
    next();
  }
});

export default router;
