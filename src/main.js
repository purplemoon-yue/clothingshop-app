import Vant from 'vant'
import 'vant/lib/index.css'
import '@vant/touch-emulator' // 兼容pc端和手机端触摸事件

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './repair' // 写入静态数据
import './mock' // 模拟请求数据

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
