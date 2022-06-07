import { createStore } from 'vuex'

const store = createStore({
  state: {
      cart: []
  },
  getters: {
    CART(state){
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


export default store