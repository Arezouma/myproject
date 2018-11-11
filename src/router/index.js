import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Users from '@/components/Users'
import Articles from '@/components/Articles'
import News from '@/components/News'
import Sports from '@/components/Sports'
import vueResource from 'vue-resource'


Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/sports',
      name: 'sports',
      component: Sports
    }
  ]
})
