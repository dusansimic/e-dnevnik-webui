import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import StudentSearch from '@/components/StudentSearch'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search/students',
      name: 'Stutent Search',
      component: StudentSearch
    }
  ]
})
