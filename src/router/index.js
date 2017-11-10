import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import StudentSearch from '@/components/StudentSearch'
import StudentProfile from '@/components/StudentProfile'
import AddStudent from '@/components/AddStudent'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import moment from 'moment'
import VueMomentJS from 'vue-momentjs'
import VueCookie from 'vue-cookie'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueMomentJS, moment)
Vue.use(VueCookie)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/student/search',
      name: 'Stutent Search',
      component: StudentSearch
    },
    {
      path: '/student/profile',
      name: 'Student Profile',
      component: StudentProfile
    },
    {
      path: '/addstudent',
      name: 'Add Student',
      component: AddStudent
    }
  ]
})
