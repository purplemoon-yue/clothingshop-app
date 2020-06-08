/**
 * Create by CC on 2020/6/8
 */
'use strict'

import lowdb from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const userAdapter = new LocalStorage('_users')
const userDB = lowdb(userAdapter)
import { users } from './data/user.json'

users.forEach(user => {
  userDB.get('users').push(user).write()
})
