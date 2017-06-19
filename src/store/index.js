import Vue from 'vue'
import Vuex from 'vuex'
import userService from '../services/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    loading: false
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setLoading (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    getUser ({commit, state}, {query}) {
      if (query === '' || (state.user && query === state.user.login)) return
      commit('setLoading', true)
      userService.getUser(query, user => {
        commit('setLoading', false)
        commit('setUser', user)
      }, error => {
        commit('setLoading', false)
        console.log('error', error)
      })
    }
  }
})
