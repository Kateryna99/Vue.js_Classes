import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from '@/store'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
        requiredAuth: true,
    }
  },
  {
    path: "/login-page",
    name: "login-page",
    component: () => import("../views/LoginPage.vue"),

  },
  {
      path: "/product-action/:category(\\w+)/:productID?",
    name: "product-action",
    component: () => import("../views/ProductAction.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  if (to.meta?.requiredAuth) {
    let isAuthenticated = store.state.auth.user

    if (!isAuthenticated) isAuthenticated = await store.dispatch('auth/loginWithCredential')

    if (!isAuthenticated)
      return {
        name: 'login-page',
      }
  }
})


export default router;
