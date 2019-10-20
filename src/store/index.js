import vuex from 'vuex'
import vue from 'vue'
vue.use(vuex)

const store = new vuex.Store({
  state: {
    token: 0,
    account: ''
  },
  getters: {
    getToken (state) {
      if (state.token === 0) {
        state.token = sessionStorage.getItem('token')
      }
      return state.token
    },
    getAccount (state) {
      if (state.account === '') {
        state.account = sessionStorage.getItem('account')
      }
      return state.account
    }
  },
  computed: {
    // it will be called when the page is refreshing
  },
  mutations: {
    changeToken (state, token) {
      sessionStorage.setItem('token',token)
      state.token = token
    },
    changeAccount (state, account) {
      sessionStorage.setItem('account', account)
      state.account = account
    },
    flush_data (state) {
      // get data from localstorge
    }
  },
  actions: {
    changeTokenFun (context, token) {
      context.commit('changeToken', token)
    }
  }

})

export default store
