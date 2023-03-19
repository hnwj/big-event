import { createStore } from 'vuex'

export default createStore({
  state: {
    token: ''
  },
  getters: {
  },
  mutations: {
    // 更新token
    updateToken (state, newToken) {
      state.token = newToken
    }
  },
  actions: {
  },
  modules: {
  }
})
