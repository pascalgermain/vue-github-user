import Vue from 'vue'
import Vuex from 'vuex'
import userService from '../services/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    userRepos: [],
    userReposLastIssues: [],
    loading: false
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setUserRepos (state, userRepos) {
      state.userRepos = userRepos
    },
    addUserRepoLastIssue (state, userRepoLastIssue) {
      state.userReposLastIssues.push(userRepoLastIssue)
    },
    setLoading (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    getUser ({commit, state}, {query}) {
      if (query === '' || (state.user && query === state.user.login)) return
      commit('setLoading', true)
      commit('setUser', null)
      commit('setUserRepos', [])
      commit('addUserRepoLastIssue', [])
      userService.getUser(query, user => {
        commit('setLoading', false)
        commit('setUser', user)
      }, error => {
        commit('setLoading', false)
        console.log('error', error)
      })
    },
    getUserRepos ({commit, state}) {
      if (!state.user) return
      userService.getUserRepos(state.user.login, userRepos => {
        commit('setUserRepos', userRepos)
      }, error => {
        console.log('error', error)
      })
    },
    getUserRepoLastIssue ({commit, state}, userRepoId) {
      const userRepo = state.userRepos.find(userRepo => userRepo.id === userRepoId)
      userService.getUserRepoLastIssue(userRepo.full_name, userRepoLastIssue => {
        commit('addUserRepoLastIssue', userRepoLastIssue)
      }, error => {
        console.log('error', error)
      })
    }
  }
})
