import axios from 'axios'
import staticVal from './globalVariable'

// 创建axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 30000, // 请求超时设置
  headers: { // 自定义请求头
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    config.headers['credential'] = sessionStorage.getItem('credential') || ''
    // config.headers['language'] = store.getters.language
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    const code = response.data.code
    if (code === staticVal.Code.Success) {
      return response.data
    } else {
      if (code === staticVal.Code.Invalid) {
        // session失效了,退回登录页面
        // 先删除session
        // sessionStorage.removeItem('credential')
        // 这样调用removeSession时不会再去调用退出接口了
        // methods.removeUserSession()
        // store.dispatch('userLogout')// 这里跳回登录页面
      } else {
        // snackbar.error(response.data.msg)
      }
      return Promise.reject(response.data)
    }
  },
  error => {
    // snackbar.error(error)
    return Promise.reject(error)
  }
)

export default service
