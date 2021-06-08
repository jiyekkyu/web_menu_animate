import { createRouter, createWebHistory } from "vue-router";
import Animate from "../views/Animate.vue";

const routes = [
  {
    path: "/",
    name: "Animate",
    component: Animate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
