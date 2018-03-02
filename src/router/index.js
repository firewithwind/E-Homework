import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import HomeworkAll from '@/components/HomeworkAll'
import HomeworkUndone from '@/components/HomeworkUndone'
import HomeworkDone from '@/components/HomeworkDone'
import Remark from '@/components/Remark'
import NewHomework from '@/components/NewHomework'
import CheckHomework from '@/components/CheckHomework'

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
    },
    {
        path: '/remark',
        name: 'Remark',
        component: Remark
    },
    {
        path: '/homework/new',
        name: 'NewHomework',
        component: NewHomework
    },
    {
        path: '/homework/check',
        name: 'CheckHomework',
        component: CheckHomework
    }
  ]
})
