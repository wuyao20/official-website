import Vue from 'vue'
import Router from 'vue-router'

import Item from '../view/item.vue'
import PageView from '../view/PageView.vue'
import HomePage from '../view/HomePage.vue'
import Software from '../view/Software.vue'
Vue.use(Router)
export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return {x:0, y:0 }
  },
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'PageView',
      component: PageView,
      // component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: HomePage,
          meta: {
            title: '徐州市关心下一代委员会'
          }
        },
        // {
        //   path: '/software',
        //   name: 'software',
        //   component: Software,
        //   meta: {
        //     title: '软件产品'
        //   },
        //   children: [
        //     {
        //       path: '/software',
        //       redirect: '/software/smartTown'
        //     },
        //     {
        //       path: '/software/smartTown',
        //       name: 'software',
        //       component: resolve => require(['@/view/Software_smartTown'], resolve),
        //       meta: {
        //         title: '软件产品丨智能小镇管理系统'
        //       }
        //     },
        //     {
        //       path: '/software/bigData',
        //       name: 'software',
        //       component: resolve => require(['@/view/Software_bigData'], resolve),
        //       meta: {
        //         title: '软件产品丨大数据管理系统'
        //       }
        //     }
        //   ]
        // },
        // {
        //   path: '/service',
        //   name: 'service',
        //   component: resolve => require(['@/view/Service'], resolve),
        //   meta: {
        //     title: '相关服务'
        //   }
        // },
        // {
        //   path: '/newsinformation',
        //   name: 'newsinformation',
        //   component: resolve => require(['@/view/NewsInformation'], resolve),
        //   meta: {
        //     title: '新闻动态'
        //   }
        // },
        // {
        //   path: '/companyintroduction',
        //   name: 'companyintroduction',
        //   component: resolve => require(['@/view/CompanyIntroduction'], resolve),
        //   meta: {
        //     title: '公司介绍'
        //   }
        // },
        // {
        //   path: '/jobchance',
        //   name: 'jobchance',
        //   component: resolve => require(['@/view/JobChance'], resolve),
        //   meta: {
        //     title: '工作机会'
        //   }
        // },
        // {
        //   path: '/contactus',
        //   name: 'contactus',
        //   component: resolve => require(['@/view/ContactUs'], resolve),
        //   meta: {
        //     title: '联系我们'
        //   }
        // },
        // {
        //   path: '/servicedetail',
        //   name: 'servicedetail',
        //   component: resolve => require(['@/view/ServiceDetail'],resolve),
        //   meta: {
        //     title: '相关服务'
        //   }
        // },
        {
          path: '/item',
          name: '具体明细',
          component: Item,
          meta: {
            title: '具体明细'
          }
        }
      ]
    }
  ]
})

