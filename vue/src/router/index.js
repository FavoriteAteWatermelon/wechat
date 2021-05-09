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
          component: () => import('@/pages/login/login'),
          children: [
            {
              path: 'code',
              name: 'Cod',
              component: () => import('@/pages/login/components/loginTelCode')
            }
          ]
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
    },
    {
      path: '/tabbar',
      name: 'Tabbar',
      redirect: '/tabbar/home',
      component: () => import('@/pages/tabbar'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/pages/home')
        },
        {
          path: 'contacts',
          name: 'Contacts',
          component: () => import('@/pages/contacts')
        },
        {
          path: 'discover',
          name: 'Discover',
          component: () => import('@/pages/discover')
        },
        {
          path: 'me',
          name: 'Me',
          component: () => import('@/pages/me'),
          children: [
            {
              path: 'pay',
              name: 'Pay',
              component: () => import('@/pages/me/pages/pay')
            },
            {
              path: 'collection',
              name: 'Collection',
              component: () => import('@/pages/me/pages/collection')
            },
            {
              path: 'friends',
              name: 'Friends',
              component: () => import('@/pages/me/pages/friends')
            },
            {
              path: 'cards',
              name: 'Cards',
              component: () => import('@/pages/me/pages/cards')
            },
            {
              path: 'expression',
              name: 'Expression',
              component: () => import('@/pages/me/pages/expression')
            },
            {
              path: 'setting',
              name: 'Setting',
              component: () => import('@/pages/me/pages/Setting')
            }
          ]
        }
      ]
    }
  ]
})
