/**
 * Create by CC on 2020/6/7
 */
'use strict'

import Mock from 'mockjs'
import apiMap from './api'

apiMap.map(route => {
  Mock.mock(new RegExp(`${route.url}`), route.type, route.response)
})

export default Mock
