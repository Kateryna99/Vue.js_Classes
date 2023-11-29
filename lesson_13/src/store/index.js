import { createStore } from "vuex";
import {lessonsList,teachersList} from "@/store/data";

export default createStore({
  state: {
    userName: null,
    lessonsList,
    teachersList,
  },
  getters: {
    getUserName(state) {
      return state.userName
    },
    getLessonsList(state) {
      return state.lessonsList
    },
    getTeachersList(state) {
      return state.teachersList
    },
    getLessonByID: state => id=>{
      return state.lessonsList.find(item=>item.id==id).title
    },
    getTeacherByID: state => id=>{
      return state.teachersList.find(item=>item.id==id).name
    },

  },
  mutations: {
    setUserName(state, value) {
      state.userName = value
    },
    logoutUser(state) {
      state.userName = null
    },
  },
  actions: {
    setUserName({ commit }, value) {
      commit('setUserName', value)
    },
    logoutUser({ commit }) {
      commit('logoutUser')
    },
  },
  modules: {
  },
});
