import Vue from 'vue'
import App from './App.vue'
import router from './router'
//新增sass全局設定
import './assets/stylesheets/scss/all.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
