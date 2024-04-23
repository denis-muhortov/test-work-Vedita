import { createRouter, createWebHistory } from 'vue-router/auto'
import { authStore } from "../modules/auth/stores/auth";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../pages/index.vue"),
  },
  {
    path: "/authorization",
    name: "authorization",
    component: () => import("../pages/authorization.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../pages/product.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VITE_VUE_APP_API_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const loginQuery = { name: "/authorization" };
  if (to.name !== loginQuery.name && authStore().user.token === '') next({ name: '/authorization' })
  else next()
})

export default router
