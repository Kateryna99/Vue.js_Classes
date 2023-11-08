import { createStore } from "vuex";
import{productsList} from "@/constants/data.js";

export default createStore({
  state: {
    categoryValue: 'Laptops',
    productsList
  },
  getters: {
    getCategoryValue(state){
      return state.categoryValue
    },
    getProductsList(state){
      const category = state.categoryValue.toLowerCase()
      return state.productsList.filter(item=>item.category.toLowerCase()===category)
    }
  },
  mutations: {
    setCategoryValue(state, value){
      state.categoryValue = value.title
    }
  },
  actions: {
    setCategoryValue({commit}, value) {
      commit('setCategoryValue', value)
    }
  },
  modules: {},
});
