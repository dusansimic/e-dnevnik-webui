import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import StudentSearch from '@/components/StudentSearch'
import AddStudent from '@/components/AddStudent'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import moment from 'moment';
import VueMomentJS from 'vue-momentjs';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueMomentJS, moment);

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
    },
    {
      path: '/addstudent',
      name: 'Add Student',
      component: AddStudent
    }
  ]
})
