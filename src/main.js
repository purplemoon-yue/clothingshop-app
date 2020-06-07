import Vant from 'vant'
import 'vant/lib/index.css'
import '@vant/touch-emulator'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../mock'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
