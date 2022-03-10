import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      { id:1, name:"hoza", email:"hoza@gmail.com", password:"123456" },
      { id:1, name:"lego", email:"lego@gmail.com", password:"234567" },
    ],
    isLogin: false,
    isLoginError: false
  },
  getters: {},
  mutations: {
    // 로그인이 성공했을 때,
    loginSuccess(state) {
      state.isLogin = true
      state.isLoginError = false
    },
    // 로그인이 실패했을 때,
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    }
  },
  actions: {
    // 로그인 시도
    login({state, commit }, loginObj){// eslint-disable-line no-unused-vars
      // 전체 유저에서 이메일로 유저 찾기
      let selectedUser = null
      state.allUsers.forEach(user => {
          if (user.email == loginObj.email) selectedUser = user
      })

      selectedUser === null
      ? commit('loginError')
      : selectedUser.password !== loginObj.password
          ? commit('loginError')
          : commit('loginSuccess')
      // 유저의 비밀번호와 입력한 비밀번호를 비교
            
    }
  },
  modules: {},
});
