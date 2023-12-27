import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('productsList')
import {getFilteredList} from '../helpers/data'
export default {
    namespaced: true,
    state: () => ({
        productsList: [],
        loading: false,
        error: null,
        filterBrandsArr:[],
        filterTradersArr:[],
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,


        getItemsList: (state) => state.productsList,
        getItemById: (state) => (itemId) => state.productsList.find((item) => item.id == itemId),
        getFilteredItemsList: (state) =>{
            return state.productsList.filter(item => getFilteredList(item, state.filterTradersArr, state.filterBrandsArr))}

    },
    mutations: {
        setItemsList(state, itemsList) {
            state.productsList = itemsList
        },


        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
        setBrandsArray(state, brandsArray) {
            state.filterBrandsArr = brandsArray
        },
        setTradersArray(state, tradersArray) {
            state.filterTradersArr = tradersArray
        }
    },
    actions: {
        loadList({ commit }) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .loadItemsList()
                .then((list) => {
                    commit('setItemsList', list)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        addItem({ commit, dispatch }, item) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .addItem(item)
                .then(() => {
                    dispatch('loadList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        deleteItem({ commit, dispatch }, itemId) {
            commit('setError', null)
            commit('setLoading', true)


            collectionDB
                .deleteItem(itemId)
                .then(() => {
                    dispatch('loadList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        updateItem({ commit, dispatch }, { itemId, data }) {
            commit('setError', null)
            commit('setLoading', true)


            collectionDB
                .updateItem(itemId, data)
                .then(() => {
                    dispatch('loadList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        loadFilteredData({ commit }, { fieldTitle, compareOperator, valueToCompare }) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .loadFilteredData(fieldTitle, compareOperator, valueToCompare)
                .then((list) => {
                    commit('setItemsList', list)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        setBrandsArray({commit}, brandsArr){
            commit('setBrandsArray', brandsArr)
        },
        setTradersArray({commit}, tradersArr){
            commit('setTradersArray', tradersArr)
        }
    },
}


