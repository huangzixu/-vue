import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shi from '@/components/shi'
import mine from '@/components/mine'
import friend from '@/components/friend'
import zhang from '@/components/zhang'
import two from '@/components/homerouter/two';
import content from '@/components/common/content';
import trends from '@/components/friendrouter/trends';
import append from '@/components/friendrouter/append';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[{
        path:"/",
        name:"content",
        component:content
      },{
        path:"/home/two",
        name:"two",
        component:two
      }]
    },{
      path: '/shi',
      name: 'shi',
      component: shi
    },{
      path: '/mine',
      name: 'mine',
      component: mine
    },{
      path: '/friend',
      name: 'friend',
      component: friend,
      children:[{
        path:"/friend",
        redirect:"/friend/trends"
      },{
        path:"/friend/trends",
        name:"trends",
        component:trends,
      },{
        path:"/friend/append",
        name:"append",
        component:append
      }]
    },{
      path: '/zhang',
      name: 'zhang',
      component: zhang
    }
  ]
})
