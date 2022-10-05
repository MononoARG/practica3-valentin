import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/clientes',
    name: 'Cliente',
    component: () => import('../views/Cliente.vue')
  },
  {
  path:'/usuarios',
  name:'Usuario',
  component: () => import('../views/Usuario.vue')
  },
  {
    path:'/productos',
    name:'Producto',
    component: () => import('../views/Producto.vue')
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
