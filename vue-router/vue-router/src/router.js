import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => import(/* webpackChunkName: "about" */ './views/About.vue')
const Users = () => import('./views/Users.vue')
const UsersDetail = () => import('./views/UsersDetail.vue')
const UsersEdit = () => import('./views/UsersEdit.vue')

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
      component: About
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      children:[
        {
          path: ':id',
          name: 'users-detail',
          component: UsersDetail,
        },
        {
          path: ':id/edit',
          name: 'users-edit',
          component: UsersEdit,
        }
      ]
    },
  ]
})
