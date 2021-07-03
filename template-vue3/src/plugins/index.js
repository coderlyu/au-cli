import '@/router/permision' // permision
import router from '@/router/index'
import { store, key } from '@/store'

export default {
  install(vue) {
    vue.use(router)
    vue.use(store, key)
  }
}