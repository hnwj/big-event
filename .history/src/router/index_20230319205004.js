import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    name: 'register',
    path: '/reg',
    component: () => import('@/views/register')
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
