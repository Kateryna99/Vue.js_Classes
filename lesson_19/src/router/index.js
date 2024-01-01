import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import('../views/FriendsView.vue')
    },
    {
      path: '/gifts',
      name: 'gifts',
      component: () => import('../views/GiftsView.vue')
    },
    {
      path: '/assignments',
      name: 'assignments',
      component: () => import('../views/AssignmentsView.vue')
    }
  ]
})

export default router
