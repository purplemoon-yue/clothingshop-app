/**
 * Create by CC on 2020/6/7
 */
'use strict'

export default [
  {
    url: '/api/user/login',
    type: 'post',
    response: config => {
      // const { username } = config.body
      console.log(config.body)

      return {
        code: 1000,
        credential: '123434467676'
      }
    }
  }
]
