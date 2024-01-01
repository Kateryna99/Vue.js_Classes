import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/friends",
    name: "friends",
    component: () => import("../views/FriendsPage.vue"),
  },
  {
      path: "/gifts",
      name: "gifts",
      component: () => import("../views/GiftsPage.vue"),
  },
  {
      path: "/gifts-assignments",
      name: "giftsAssignments",
      component: () => import("../views/GiftsAssignments.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
