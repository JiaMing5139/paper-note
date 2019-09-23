import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import user_center from './views/user_center'
import admin from './views/admin'
import Sign_in from './views/Sign_in'
import Sign_up from './views/Sign_up'
import search_pagee from './views/search_pagee'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }, {
      path: '/search_pagee',
      name: 'search_pagee',
      component: search_pagee
    },
    {
      path: '/user_center',
      name: 'user_center',
      component: user_center
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/Sign_in',
      name: 'Sign_in',
      component: Sign_in
    },
    {
      path: '/Sign_up',
      name: 'Sign_up',
      component: Sign_up
    }

  ]
})
