/**
 * Create by CC on 2020/6/7
 */
'use strict'

import Mock from 'mockjs'
// import mocksApi from './mocks-api'

// const MOCK_API_BASE = '/mock'

// const responseFake = (url, type, respond) => {
//   return {
//     url: new RegExp(`${MOCK_API_BASE}${url}`),
//     type: type || 'get',
//     response(req, res) {
//       res.send(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
//     }
//   }
// }
//
// mocksApi.map(route => {
//   console.log(route)
//   return responseFake(route.url, route.type, route.response)
// })

Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

Mock.mock('/mock/api/user/login'
    , 'post', config => {
      console.log(config.body)
      return {
        code: 1000,
        credential: '123434467676'
      }
    })

export default Mock
