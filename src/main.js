import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

// Import Components
import Home from './components/home.vue'
import Laughly from './components/laughly.vue'
import Newsbyte from './components/newsbyte.vue'
import Praiseworthy from './components/praiseworthy.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/laughly', component: Laughly },
  { path: '/newsbyte', component: Newsbyte },
  { path: '/praiseworthy', component: Praiseworthy },
  { path: '*', redirect: '/'},
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
