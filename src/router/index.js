import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/table',
      name:'table',
      component:()=> import('@/pages/table')
    },
    {
      path:'/test',
      name:'test',
      component:()=> import('@/pages/test')
    },
    {
      path:'/form',
      name:'form',
      component:()=> import('@/pages/form')
    },
    {
      path:'/tableList',
      name:'tableList',
      component:()=> import('@/pages/tableList')
    },
    {
      path:'/tabs',
      name:'tabs',
      component:()=> import('@/pages/tabs')
    },
    {
      path:'/breadcrumb',
      name:'breadcrumb',
      component:()=> import('@/pages/breadcrumb')
    }
  ]
})
