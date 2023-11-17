import { driversList } from '@/store/helpers/data'
import { filterList } from '@/store/helpers/data'

export default {
    namespaced: true,
    state: {
        driversList: driversList,
        filterObj: {},
    },
    getters: {
        getFilteredDriversList(state) {
            return state.driversList.filter(item => filterList(item, state.filterObj))
        },
        getFilterObj(state) {
            return state.filterObj
        },
        getDriverByID:(state) => (id) => {
            return {...state.driversList.find(item => item.id == id) }
        }


    },
    mutations: {
        /*setData(state, data) {
            state.driversList = data
        },*/
        updateFilter(state, filterData) {
            state.filterObj = filterData
        },
        deleteDriver(state, id) {
            state.driversList = state.driversList.filter(item => item.id !== id)
        },
        editDriver(state, driverData) {
            const data = state.driversList.findIndex(item => item.id == driverData.id)

            state.driversList[data] = {...driverData}
        },
        addDriver(state, driverData) {
            state.driversList.push({
                id: new Date().getTime(),
                ...driverData})
        }
    },
    actions: {
        /*setData({ commit }) {
            commit('setData', driversList)
        },*/
        updateFilter({ commit }, filterData) {
            commit('updateFilter', filterData)
        },
        deleteDriver({ commit }, id) {
            commit('deleteDriver', id)
        },
        editDriver({ commit }, driverData) {
            commit('editDriver', driverData)
        },
        addDriver({ commit }, driverData) {
            commit('addDriver', driverData)
        }
    },
    modules: {}
}
