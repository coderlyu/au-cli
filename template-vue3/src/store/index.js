
import { createStore, Store, useStore } from 'vuex'

export const key = Symbol()

export const store = createStore({
  state() {
    return {
      message: 'This is About Page'
    }
  },
  getters: {
    message: (state) => state.message
  },
  actions: {},
  mutations: {}
})

export function getStore() {
  return {
    store: useStore(key)
  }
}