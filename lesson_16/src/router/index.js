import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/drivers",
    name: "drivers",
    component: () => import("../views/DriversView.vue"),
  },
  {
    path: "/busses",
    name: "busses",
    component: () => import("../views/BussesView.vue"),
  },
  {
    path: "/product-action/:category(\\w*)/:itemID?",
    name: "product-action",
    component: () => import("../views/ProductAction.vue"),
  },
  {
    path: "/assignments",
    name: "assignments",
    component: () => import("../views/AssignmetsView.vue"),
  }
  /*{
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/!* webpackChunkName: "about" *!/ "../views/AboutView.vue"),
  },*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
