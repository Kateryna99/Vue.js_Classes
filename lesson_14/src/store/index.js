import {createStore} from "vuex";
import {productsList,getSortedList,suppliersList} from "@/store/helpers/data.js";

export default createStore({
    state: {
        productsList,
        filterObj: {},
        status:true,
        suppliersList,
    },
    getters: {
        getProductsList(state) {
            return state.productsList.filter(item=>getSortedList(item,state.filterObj))
        },
        getRating() {
            return 23 * 5 + (2 + 65)
        },
        getStatus(state){
            return state.status ? 'open' : 'closed'
        },
        getSuppliersList(state) {
            return state.suppliersList
        }
    },
    mutations: {
        setFilter(state, filter) {
            state.filterObj = filter
        },
        addProduct(state, product) {
            state.productsList.push({
                id:new Date().getTime(),
                imgSrc: require('@/assets/img/food.jpg'),
                ...product
            })
        }
    },
    actions: {
        setFilter({commit}, filter) {
            commit('setFilter', filter)
        },
        addProduct({commit}, product) {
            commit('addProduct', product)
        }
    },
    modules: {},
});
