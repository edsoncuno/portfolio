import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/curriculum-vitae',
      name: 'cv',
      component: () => import('../views/CurriculumVitaeView.vue')
    },
  ]
})

export default router
