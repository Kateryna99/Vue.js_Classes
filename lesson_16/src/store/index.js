import { createStore } from "vuex";
import drivers  from "@/store/modules/drivers";
import busses from "@/store/modules/busses";
import assignments from "@/store/modules/assignments";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    drivers,
    busses,
    assignments
  },
});
