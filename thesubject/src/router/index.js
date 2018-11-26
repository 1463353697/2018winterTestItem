import Vue from 'vue'
import Router from 'vue-router'
import enter from '@/components/enter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'enter',
      component: enter
    }
  ]
})
