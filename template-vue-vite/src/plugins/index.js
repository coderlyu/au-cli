import { router } from './router'
import { store, key } from './store'

export default {
  install(vue) {
    vue.use(router)
    vue.use(store, key)
  }
}