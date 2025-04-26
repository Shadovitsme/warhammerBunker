import { createRouter, createWebHistory } from "vue-router";
import bunkerView from "../views/bunkerView.vue";
import MainView from "../views/mainView.vue";
import PiuView from "@/views/PiuView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/bunker",
    name: "bunker",
    component: bunkerView,
  },
  {
    path: "/piu",
    name: "piu",
    component: PiuView,
  },
];

const router = createRouter({
  history: createWebHistory("/warhammerBunker/"),
  routes,
});

export default router;
