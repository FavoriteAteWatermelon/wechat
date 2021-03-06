import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/post'
    },
    {
      path: '/post',
      name: 'Post',
      component: () => import('@/pages/login'),
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/pages/login/login')
        },
        {
          path: 'language',
          name: 'Language',
          component: () => import('@/pages/login/language')
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('@/pages/login/register')
        }
      ]
    }
  ]
})
