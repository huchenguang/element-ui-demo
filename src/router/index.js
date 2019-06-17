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
    }
  ]
})
