/**
 * Create by CC on 2020/6/7
 */
'use strict'

const userPageRouter = {
  path: '/user',
  component: () => import('@/views/userPage'),
  redirect: {
    path: '/user/'
  },
  children: [
    {
      path: '/',
      component: () => import('@/views/userPage/userLogin')
    },
    {
      path: 'info',
      component: () => import('@/views/userPage/userInfo')
    },
    {
      path: 'cart',
      component: () => import('@/views/userPage/shoppingCart')
    },
    {
      path: 'chat',
      component: () => import('@/views/userPage/userChat')
    }
  ]
}

export default userPageRouter
