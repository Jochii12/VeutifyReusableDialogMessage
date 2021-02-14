/* eslint-disable no-undef */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { beforeEnter } from '../service/auth.service'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( async (to, from, next) => {
  Vue.nextTick(async () => {
    await beforeEnter(to, from, next, router.app)
  })
})

export default router
