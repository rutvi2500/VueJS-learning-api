import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Router1 from './components/Router1'
import Router2 from './components/Router2'
import User from './components/User'

Vue.use(VueRouter);
const routes=[
  {path:"/",component:Router1},
  {path:"/about",component:Router2},
  {path:"/user/:id",component:User},

]
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
