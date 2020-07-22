import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#MyApp')


/* NOTES By Iftikhar

1. Entry point for the vue application.

*/