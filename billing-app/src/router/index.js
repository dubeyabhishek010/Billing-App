import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'DashboardContent',
    component: () => import('@/components/Dashboard/DashboardContent.vue')
  },
  {
    path: '/previewpage',
    name: 'PreviewPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/components/BillingReceipt/PreviewPage.vue')
  },
  {

    path:'/orders',
    name:'Orders',
    component: () => import('@/components/Orders/Orders.vue')
  }
  ,
  {
    path: '/invoice',
    name: 'Invoice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/components/BillingReceipt/Invoice.vue')
  },
  {
    path: '/allinvoices',
    name: 'AllInvoices',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/components/BillingReceipt/AllInvoices.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
