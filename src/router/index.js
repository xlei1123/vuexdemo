import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import world from '@/components/world'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/world',
      name: 'world',
      component: world
    }
  ]
})
