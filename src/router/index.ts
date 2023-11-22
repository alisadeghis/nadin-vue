import { createRouter, createWebHistory } from 'vue-router'
import { LayoutsDto } from '../models/LayoutsDto';
import { useUser } from '@/stores/user';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("../views/index.vue"),
      meta: {
        layout: LayoutsDto.Default,
        authRequire: true,
      }
    },
    {
      name: "login",
      path: "/auth/login",
      component: () => import("../views/auth/Login.vue"),
      meta: {
        layout: LayoutsDto.Auth,
        authRequire: true,
      }
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import("../views/NotFound.vue"),
      meta: {
        layout: '',
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUser()
  userStore.setUser()
  if (!to.meta.authRequire) return next();
  if (userStore.isLogin && to.name === "login") return next('/');
  else if (!userStore.isLogin && to.name !== "login") return next('/auth/login');
  else return next();  
})

export default router
