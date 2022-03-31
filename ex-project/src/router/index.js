import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    alert("이미 로그인을 한 유저입니다.")
    next("/")
  }
  else {
    next()
  }
}

const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    alert("로그인이 필요한 기능입니다.")
    next("/")
  }
  else {
    next()
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    beforeEnter: rejectAuthUser,
    component: () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/mypage",
    name: "mypage",
    beforeEnter: onlyAuthUser,
    component: () => import(/* webpackChunkName: "login" */ "../views/MypageView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
