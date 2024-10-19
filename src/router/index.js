import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RegForm from '../views/RegForm.vue'
import DiagnoseScan from '../views/DiagnoseScan.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/register',
    name: 'registration',
    component: RegForm
  },
  {
    path: '/diagnose',
    name: 'diagnose',
    component: DiagnoseScan
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
