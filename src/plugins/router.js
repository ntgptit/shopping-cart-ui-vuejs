import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/common/layout/layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        name: 'Dashboard',
        path: '/views/dashboard',
        component: () => import('../components/views/dashboard/dashboard.vue')
      },
      // Supliers
      {
        name: 'Supliers Management',
        path: '/views/supliers',
        component: () => import('../components/views/supliers/suplier.vue')
      },
      // Products
      {
        name: 'Products Management',
        path: '/views/products',
        component: () => import('../components/views/products/product.vue')
      },
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router