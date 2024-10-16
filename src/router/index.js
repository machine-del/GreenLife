import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import TheHealth from '../views/TheHealth.vue'
import TheLifestyle from '../views/TheLifestyle.vue'
import TheNotFound from '../views/TheNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView
    },
    {
      path: '/health',
      name: 'health',
      component: TheHealth
    },
    {
      path: '/lifestyle',
      name: 'life',
      component: TheLifestyle
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: TheNotFound
    }
  ]
})

export default router
