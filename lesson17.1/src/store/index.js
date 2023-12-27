import { createStore } from "vuex";
import products from "./modules/products";
import auth from "./modules/auth";
import users from "@/store/modules/users";
import {tradersList,brandsList} from "@/store/helpers/data";

export default createStore({
  state: {
    tradersList,
    brandsList
  },
  getters: {
    getTradersList: (state) => state.tradersList,
    getBrandsList: (state) => state.brandsList,
  },
  mutations: {},
  actions: {},
  modules: {
    products,
    auth,
    users
  },
});
