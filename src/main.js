import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {rutas} from './router/rutas.js'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

const enrutador = new VueRouter({
  routes: rutas,
  mode: 'history'
  
})

new Vue({
  router:enrutador,
  render: h => h(App)
  
}).$mount('#app')
