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
    meta: {
      title: "Les Francs",
    },
    children: [
      {
        path: "",
        component: Home,
        meta: {
          title: "Les Francs - Personnage",
        },
      },
      {
        path: "/caserne",
        name: "Caserne",
        meta: {
          title: "Les Francs - Caserne",
        },
        component: () =>
          import(/* webpackChunkName: "caserne" */ "../views/Caserne.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Les Francs - Login",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function (to, from, next) {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title as string;
  }

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
