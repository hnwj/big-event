import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login'
import Register from '@/views/register'

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'register',
    path: '/reg',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
