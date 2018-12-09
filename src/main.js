import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as uiv from 'uiv'
Vue.use(uiv)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
