import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModalsView from '../views/ModalsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/Posts.vue')
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('../views/Post.vue')
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('../views/Cards.vue')
    },
    {
      path: '/counter-store',
      name: 'counter-store',
      component: () => import('../views/CounterStore.vue')
    }

    
  ]
})

export default router
