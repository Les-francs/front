import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { AUTH_KEY, getToken, state } from "@/store/app";
import Layout from "@/layout/index.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import { AUTH_TYPE } from "@/store/app";

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
      {
        path: "/evenements",
        name: "Evenements",
        meta: {
          title: "Les Francs - Evenements",
        },
        component: () =>
          import(
            /* webpackChunkName: "evenements" */ "../views/Evenements.vue"
          ),
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

router.beforeEach(async function (to, from, next) {
  const token = await getToken(to);

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

  if (token !== "") {
    const tokenType = window.localStorage.getItem(AUTH_TYPE);

    await fetch("https://discord.com/api/users/@me", {
      headers: {
        authorization: `${tokenType} ${token}`,
      },
    })
      .then((result) => result.json())
      .then((response) => {
        if (!(response.message && response.message === "401: Unauthorized")) {
          const { username, email, id } = response;
          state.value.authenticated = true;
          state.value.username = username;
          state.value.discord = id;
          state.value.email = email;
        }
      })
      .catch((reason) => {
        console.error(reason);
        state.value.authenticated = false;

        window.localStorage.removeItem(AUTH_KEY);
        window.localStorage.removeItem(AUTH_TYPE);
      });
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
