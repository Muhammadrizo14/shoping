import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  getters: {
    CART(state) {
      return state.cart
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
