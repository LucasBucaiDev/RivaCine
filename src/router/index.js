import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TiendaView from "../views/TiendaView.vue";
import LoginView from "../views/LoginView.vue";
import ConocenosView from "../views/ConocenosView.vue";
import RegistroView from "../views/RegistroView.vue";
import candySystemView from "../views/System/candySystemView.vue";
import usuariosSystemView from "../views/System/usuariosSystemView.vue";
import addUserView from "../views/System/addUserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/tienda",
      name: "tienda",
      component: TiendaView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/conocenos",
      name: "conocenos",
      component: ConocenosView,
    },
    {
      path: "/registro",
      name: "registro",
      component: RegistroView,
    },
    {
      path: "/candySystem",
      name: "candySystem",
      meta: { RequireAuth: true },
      component: candySystemView,
    },
    {
      path: "/usersSystem",
      name: "usersSystem",
      meta: { RequireAuth: true },
      component: usuariosSystemView,
    },
    {
      path: "/addUser",
      name: "addUser",
      meta: { RequireAuth: true },
      component: addUserView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const usuarioLog = JSON.parse(localStorage.getItem("usuario"));
  if (
    to.matched.some((r) => r.meta.RequireAuth) &&
    (!usuarioLog || usuarioLog.email !== "admin@gmail.com")
  ) {
    next("/");
  }
  next();
});

export default router;
