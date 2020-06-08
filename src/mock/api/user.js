/**
 * Create by CC on 2020/6/7
 */
'use strict'

import lowdb from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage('_users')
const db = lowdb(adapter)

export default [
  {
    url: '/api/user/login',
    type: 'post',
    response: config => {
      const { username, password } = JSON.parse(config.body)
      console.log(username)
      console.log(password)
      console.log(db.find(username).value())
      return {
        code: 1000,
        credential: '123434467676'
      }
    }
  }
]
