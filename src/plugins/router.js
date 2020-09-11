import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/common/layout/layout.vue'
import Supliers from '../components/views/supliers/suplier.vue'
import Products from '../components/views/products/product.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // component: () => import('@/views/dashboard/Index'),
      component: Layout,
      children: [
        // Supliers
        {
          name: 'Supliers Management',
          path: '',
        component: Supliers,
        },
        // Products
        {
          name: 'Products Management',
          path: '',
          component: Products,
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
        //   component: () => import('@/views/dashboard/component/Notifications'), 
        },
        {
          name: 'Icons',
          path: 'components/icons',
        //   component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
        //   component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
        //   component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
        //   component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
        //   component: () => import('@/views/dashboard/Upgrade'),
        },
        {
          name: 'Suppliers Management',
          path: 'components/supplier-management',
        //   component: () => import('@/views/dashboard/component/supplier/SuppliersManagement'),
        },
        {
          name: 'Product Management',
          path: 'components/product-management',
        //   component: () => import('@/views/dashboard/component/product/ProductManagement'),
        },
      ],
    },
  ],
})
