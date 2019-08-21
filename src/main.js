// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import LoginHeader from './components/LoginHeader/LoginHeader'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.component('LoginHeader', LoginHeader)
new Vue({
  render: h => h(App),
  router, 
}).$mount('#app')
