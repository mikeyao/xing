import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

// Import Components
import Home from './components/home.vue'
import Laughly from './components/laughly.vue'
import Newsbite from './components/newsbite.vue'
import Praiseworthy from './components/praiseworthy.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/laughly', component: Laughly },
  { path: '/newsbite', component: Newsbite },
  { path: '/praiseworthy', component: Praiseworthy },
  { path: '*', redirect: '/'},
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      // When switch to other route, scroll to the top
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
