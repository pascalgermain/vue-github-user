import Vue from 'vue'
import Vuex from 'vuex'
import userService from '../services/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {},
  actions: {
    getUser ({commit}, {query}) {
      if (query === '') return
      userService.getUser(query, response => console.log(response))
    }
  }
})
