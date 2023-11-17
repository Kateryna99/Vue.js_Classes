import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DriversView from "../views/drivers/DriversView.vue";
import DriversActions from '@/views/drivers/DriversActions';
import BussesView from '@/views/busses/BussesView';
import BussesAction from '@/views/busses/BussesAction';
import AssignmentsView from '@/views/assigments/AssigmentsView';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/drivers",
    name: "drivers",
    component: DriversView,
  },
  {
    path: "/driver/:driverId?",
    name: "driver",
    component: DriversActions,
  },
  {
    path: "/busses",
    name: "busses",
    component: BussesView,
  },
  {
    path: "/bus/:busId?",
    name: "bus",
    component: BussesAction,
  },
  {
    path: "/assignments",
    name: "assignments",
    component: AssignmentsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
