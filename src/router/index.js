import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import HomeworkAll from '@/components/HomeworkAll'
import HomeworkUndone from '@/components/HomeworkUndone'
import HomeworkDone from '@/components/HomeworkDone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
        path: '/homework/all',
        name: 'HomeworkAll',
        component: HomeworkAll
    },
    {
        path: '/homework/undone',
        name: 'HomeworkUndone',
        component: HomeworkUndone
    },
    {
        path: '/homework/done',
        name: 'HomeworkDone',
        component: HomeworkDone
    }
  ]
})
