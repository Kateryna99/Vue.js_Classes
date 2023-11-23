import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorkersView from "@/views/WorkersView";
import CandidatesView from "@/views/CandidatesView";
import InterviewsView from "@/views/InterviewsView";
import personActionView from "@/views/PersonActionView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/workers",
    name: "workers",
    component: WorkersView,
  },
  {
    path: "/candidates",
    name: "candidates",
    component: CandidatesView,
  },
  {
    path: "/interviews",
    name: "interviews",
    component: InterviewsView,
  },
  {
    path: "/edit-page/:category/:id?",
    name: "edit-page",
    component: personActionView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
