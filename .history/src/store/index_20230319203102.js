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
      this.commit('saveStorage')
    },
    // 持久化存储数据
    saveStorage (state) {
      localStorage.setItem('user', JSON.stringify(state.token))
    }
  },
  actions: {
  },
  modules: {
  }
})
