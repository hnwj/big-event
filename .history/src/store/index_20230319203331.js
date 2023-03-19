import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem('user') || ''
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
      localStorage.setItem('user', state.token)
    }
  },
  actions: {
  },
  modules: {
  }
})
