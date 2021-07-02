
import { InjectionKey } from 'vue'
import { createStore, Store, useStore } from 'vuex'

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      message: 'This is Home Page'
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