import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('assignments')
export default {
    namespaced: true,
    state: () => ({
        assignmentsList: [],
        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,


        getAssignmentList: (state) => state.assignmentsList,
        getItemById: (state) => (itemId) => state.assignmentsList.find((item) => item.id == itemId),
        getAssignmentByDriverId: (state) => (driverId) => state.assignmentsList.find((item) => item.driver == driverId),
        getAssignmentByBusId: (state) => (busId) => state.assignmentsList.find((item) => item.bus == busId),
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.assignmentsList = itemsList
        },


        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        loadAssignmentsList({ commit }) {
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
                    dispatch('loadAssignmentsList')
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
                    dispatch('loadAssignmentsList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        deleteAssignmentByDriverId({ dispatch,getters }, driverId) {
            const data = getters.getAssignmentByDriverId(driverId)

            if(data){
                dispatch('deleteItem', data.id)
            }
        },
        deleteAssignmentByBusId({ dispatch,getters }, busId) {
            const data = getters.getAssignmentByBusId(busId)

            if(data){
                dispatch('deleteItem', data.id)
            }
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
    },
}




