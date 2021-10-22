import { createWebHashHistory, createRouter } from 'vue-router'
import HelloWorld from '@components/HelloWorld.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/helloworld'
    }, {
      path: '/helloworld',
      component: HelloWorld
    }, {
      path: '/test/:msg',
      component: HelloWorld
    }
  ]
})