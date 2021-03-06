import Vue from 'vue'
import Router from 'vue-router'
import enter from '@/components/enter'
import findPsw from '@/components/findPsw'
import signIn from '@/components/signIn'
import mainPage from '@/components/mainPage'
import personIfm from '@/components/personIfm'
import article from "@/components/article"
import changeIfm from "@/components/changeIfm"



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'enter',
      component: enter
    },{
      path: '/findPsw',
      name: 'findPsw',
      component: findPsw
    },{
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },{
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage
    },{
      path: '/personIfm',
      name: 'personIfm',
      component: personIfm,
      children:[
        {
          path: '/changeIfm',
          name: 'chengeIfm',
          component: changeIfm

        }
      ]
    },{
      path: '/article',
      name: "article",
      component: article
    }
  ]
})
