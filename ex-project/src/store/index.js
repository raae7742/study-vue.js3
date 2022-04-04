import Vue from "vue";
import Vuex from "vuex";
import router from '../router'
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
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
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    // 로그인이 실패했을 때,
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logout(state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  actions: {
    // 로그인 시도
    login({ dispatch },loginObj){
      // 로그인 -> 토큰 반환
      axios
        .post("https://reqres.in/api/login", loginObj)
        .then(res => {
          let token = res.data.token
          localStorage.setItem("access_token", token)
          dispatch("getMemberInfo")
        })
        .catch(() => {
          alert('이메일과 비밀번호를 확인하세요.')
        })
    },
    logout({ commit }) {
      commit("logout")
      router.push({ name: "home" })
    },
    getMemberInfo({ commit }) {
      let token = localStorage.getItem("access_token")
      let config = {
        headers: {
          "access-token": token
        }
      }

      // 토큰 -> 멤버 정보를 반환
      axios
        .get("https://reqres.in/api/users/2", config)
        .then(response => {
          let userInfo = {
            id: response.data.data.id,
            first_name: response.data.data.first_name,
            last_name: response.data.data.last_name,
            avatar: response.data.data.avatar,
          }
          commit('loginSuccess', userInfo)
        })
        .catch(() => {
          alert('이메일과 비밀번호를 확인하세요.')
        })
      }
  },
  modules: {},
});
