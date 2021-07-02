import { store } from '../store'
import NProgress from 'nprogress'
import router from './index'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
  
  document!.title = to?.meta?.title as string + '-模板' || '模板'
})