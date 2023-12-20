import DbOperations from '../helpers/DbOperations'

const collectionDB = new DbOperations('drivers')
import {getFilteredList} from "@/store/helpers/data";

export default {
    namespaced: true,
    state: () => ({
        driversList: [],
        loading: false,
        error: null,
        filterObj: {}
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,
        //getItemsList: (state) => state.driversList,
        getDriverById: (state) => (itemId) => state.driversList.find((item) => item.id == itemId),

        getFilteredDriversList: (state) => {
            return state.driversList.filter(item => getFilteredList(item, state.filterObj))
        }
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.driversList = itemsList
        },
        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
        setFilterObj(state, value) {
            state.filterObj = value
        }
    },
    actions: {
        loadList({commit}) {
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
        addItem({commit, dispatch}, item) {
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
        deleteItem({commit, dispatch}, itemId) {
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
        updateItem({commit, dispatch}, {itemId, data}) {
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
        setFilterObj({commit}, value) {
    commit('setFilterObj', value)
},

    },
}
