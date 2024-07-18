// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from 'src/View/EditProduct.vue'
import Login from 'src/View/Login.vue'
import ProductDetailView from './View/ProductDetailView.vue'
import CategoryView from './View/CategoryView.vue'
import SearchView from './View/SearchView.vue'
import AddProduct from './View/AddProduct.vue'
import EditProduct from './View/EditProduct.vue'
import { isAuthenticated } from '../Services/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetailView
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: CategoryView
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: EditProduct,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router