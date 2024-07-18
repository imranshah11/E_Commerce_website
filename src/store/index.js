// store/index.js
import { createStore } from 'vue'
import { login, logout, isAuthenticated } from '../Services/auth'

export default createStore({
  state: {
    isAuthenticated: isAuthenticated()
  },
  mutations: {
    setAuthenticated(state, value) {
      state.isAuthenticated = value
    }
  },
  actions: {
    login({ commit }, { username, password }) {
      login(username, password)
      commit('setAuthenticated', true)
    },
    logout({ commit }) {
      logout()
      commit('setAuthenticated', false)
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated
  }
})