import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "@/views/ShopView";
import ProductsContainer  from "@/views/ProductsContainer";
import PaymentRules from "@/views/PaymentRules";
import ContactsContainer from "@/views/ContactsContainer";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
  },
  {
    path: "/products/:title",
    name: "products",
    component: ProductsContainer,
  },
  {
    path: "/payment-rules",
    name: "payment-rules",
    component: PaymentRules,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsContainer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
