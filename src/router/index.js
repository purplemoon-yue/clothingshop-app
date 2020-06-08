'use strict'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from 'components/homePage'
import Home from './home'
import UserPage from './userPage'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    component: HomePage,
    redirect: '/home',
    children: [
      Home, UserPage
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/NotFound')
  },
  {
    path: '*',
    component: () => import('@/views/NotFound'),
    hidden: true
  }
]

const createRouter = () => new VueRouter({
  base: process.env.VUE_APP_BASE_ROUTER,
  routes: constantRoutes
})

const router = createRouter()

router.beforeEach(async(to, from, next) => {
  next()
})

router.afterEach(to => {
})

// 这里处理多次点击当前路由报错,其实就是屏蔽错误,vue那边的坑
// 解决重复点击导航路由报错 vue-router 3.1.3版本还有问题,等升级后再说吧,暂时屏蔽错误，不影响功能
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push() {
  return originalPush.apply(this, Array.prototype.slice.apply(arguments)).catch(err => err)
}

export default router
