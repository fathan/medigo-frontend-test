import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './../views/Home/Index.vue')
    },
    {
      path: '/hospital',
      redirect: '/hospital',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '/',
          name: 'hospital',
          component: () => import(/* webpackChunkName: "about" */ './../views/Hospital/Index.vue')
        },
        {
          path: '/hospital/search',
          name: 'hospital search',
          component: () => import(/* webpackChunkName: "about" */ './../views/HospitalSearch/Index.vue')
        },
        {
          path: '/hospital/:id',
          name: 'hospital detail',
          component: () => import(/* webpackChunkName: "about" */ './../views/HospitalDetail/Index.vue')
        }
      ]
    }
  ]
})
