import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/SobreNosPage.vue')
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: () => import('../views/categories/CategoriasPage.vue')
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: () => import('../views/products/ProdutosPage.vue')
  },
  {
    path: '/produtosadd',
    name: 'produtosadd',
    component: () => import('../views/products/ProdutosAdd.vue')
  },
  {
    path: '/produtoedit',
    name: 'produtoedit',
    component: () => import('../views/products/ProdutosEdit.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
