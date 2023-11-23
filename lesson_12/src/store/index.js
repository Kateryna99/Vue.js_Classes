import { createStore } from "vuex";
import workers from "./modules/workers";
import candidates from "./modules/candidates";
import interviews from "@/store/modules/interviews";


export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    workers,
    candidates,
    interviews
  },
});
