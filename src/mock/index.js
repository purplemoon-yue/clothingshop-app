/**
 * Create by CC on 2020/6/7
 */
'use strict'

import Mock from 'mockjs'

// import lowdb from 'lowdb'
// import LocalStorage from 'lowdb/adapters/LocalStorage'
// const adapter = new LocalStorage('config')
// const db = lowdb(adapter)
// db.set('rere', {
//   d: 'sdsds'
// }).write()

import mocksApi from './mocks-api'

// const responseFake = (url, type, respond) => {
//   return {
//     url: new RegExp(`${url}`),
//     type: type || 'get',
//     response(req, res) {
//       res.send(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
//     }
//   }
// }

mocksApi.map(route => {
  Mock.mock(new RegExp(`${route.url}`), route.type, route.response)
  // return responseFake(route.url, route.type, route.response)
})

export default Mock
