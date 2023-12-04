import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  /*{
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/!* webpackChunkName: "about" *!/ "../views/AboutView.vue"),
  },*/
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
    children: [
        {
          path: "",
          name: "products-container",
          component: () => import("../views/ProductContainer.vue")
        }
      ,{
          path: "/selector",
          name: "selector",
          components: {
              filter: () => import("../views/FilterView.vue"),
              default: () => import("../views/ProductContainer.vue")
          }
      },
      {
        path: "/editor",
        name: "editor",
        components: {
            default: () => import("../views/ProductContainer.vue"),
          editor: () => import("../views/FilterView")
        }
      }
    ]
  },
  {
    path: "/suppliers",
    name: "suppliers",
    component: () => import("../views/SuppliersView.vue")
  },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/ContactsView.vue")
    },
    {
      path: "/rules",
      name: "rules",
      component: () => import("../views/RulesView.vue")
    }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
