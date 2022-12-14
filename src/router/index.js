import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Weather from "../views/Weather.vue";
import { authGuard } from "@auth0/auth0-vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: authGuard,
  },
  {
    path: "/weather/:city?",
    name: "weather",
    component: Weather,
    beforeEnter: authGuard,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
