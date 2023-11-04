import {createStore} from "vuex";
import productList from "../constants/productList.json";


export default createStore({
    state: {
        productList: [],
        selectedProducts: [],
        totalPrice: 0,
        currencyValue: 1,
    },
    getters: {
        getCurrencyValue(state) {
            return state.currencyValue
        },
        getProductList(state) {
            return state.productList
        },
        getSelectedProduct(state) {
            return state.selectedProducts
        },
        getTotalPrice(state) {
            return state.totalPrice
        },
        updateCurrency(state) {
            if (!state.currencyValue || state.currencyValue == 1)
                return 'hrn'
            else return 'usd'
        },
        getCurrentPrice: (state) => (price) => (price / state.currencyValue).toFixed(2)

    },
    mutations: {
        uploadProductList(state, productList) {
            state.productList = productList
        },
        getSelectedProduct(state, product) {
            state.productList = state.productList.filter(item => item.id !== product.id)
            state.selectedProducts.push(product)
            state.totalPrice += product.price
        },
        cancelSelectedProduct(state, product) {
            state.selectedProducts = state.selectedProducts.filter(item => item.id !== product.id)
            state.productList.unshift(product)
            state.totalPrice -= product.price
        },
        payAllProducts(state) {
            state.productList.push(...state.selectedProducts)
            state.selectedProducts = []
            state.totalPrice = 0
        },

        setCurrencyValue(state, value) {
            state.currencyValue = value
        }
    },
    actions: {
        uploadProductList({commit}) {
            commit('uploadProductList', productList)
        },
        setSelectedProduct({commit}, product) {
            commit('getSelectedProduct', product)
        },
        cancelSelectedProduct({commit}, product) {
            commit('cancelSelectedProduct', product)
        },
        payAllProducts({commit}) {
            commit('payAllProducts')
        },
        setCurrencyValue({commit}, value) {
            commit('setCurrencyValue', value)
        }
    },
    modules: {},
});
