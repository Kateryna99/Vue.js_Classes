import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import teachersView from "@/views/TeachersView";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            requiresAuth: false,
        }
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
        path: "/login/:message?",
        name: "login-page",
        component: () =>
            import( "../views/LoginView.vue"),
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/lessons",
        name: "lessons",
        component: () =>
            import( "../views/LessonsView.vue"),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/teachers/:lessonsIDList*",
        name: "teachers",
        component: teachersView,
        meta: {
            requiresAuth: true,
        },
        beforeEnter: (to, from, next) => {
            const data = to.params.lessonsIDList
            if(!data.length){
                next({
                    name: 'lessons',
                })
            }else next()
        }
    },
    {
       path: "/education/:educationSetUp*",
        name: "education",
        component: () =>
            import( "../views/EducationView.vue"),
        meta: {
            requiresAuth: true,
        },
        beforeEnter: (to, from, next) => {

            if(!to.params.educationSetUp.length){
                next({
                    name: 'page-not-found',
                })
            }else next()
        },
    },


    {
        path: "/:pathMatch(.*)*",
        name: "page-not-found",
        component: () =>
            import( "../views/PageNotFound.vue"),
        meta: {
            requiresAuth: false,
        }
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(to => {
    const isAuthorized = window.userName

    if (to.meta.requiresAuth && !isAuthorized) {
        return {
            name: 'login-page',
            query: {
                redirect: to.fullPath
            },
            params: {
                message: 'You are not authorized!'
            }
        }
    }
})

export default router;
