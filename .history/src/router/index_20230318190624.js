import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login'

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
