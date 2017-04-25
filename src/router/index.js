import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/List'
import Cart from '@/components/Cart'

Vue.use(Router)

var router =  new Router({
  routes: [
    {
      path: '/home',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ],
  linkActiveClass: 'active'
})

router.push('/home')
// router.push('/list/11')
// router.push({name:'List',params:{id:111,name:'llllll'}})

export default router
