/**
 * Create by CC on 2020/6/7
 */
'use strict'

import api from '@/utils/request'

export function login(params) {
  return api.post('/api/user/login', params)
}
