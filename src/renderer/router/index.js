import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'select-sprites',
      component: require('@/components/SelectSprites/SelectSprites').default
    },
    {
      path: '/config',
      name: 'config-options',
      component: require('@/components/Configuration/ConfigOptions').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
