import {bussesList} from '@/store/helpers/data'

export default ({
    namespaced: true,
    state: {
        bussesList:bussesList,
    },
    getters: {
        getBussesList(state) {
            return state.bussesList
        },
        getBusByID: (state) => (id) => {
            return { ...state.bussesList.find(item => item.id == id) }
        },
    },
    mutations: {
        /*setBussesList(state, data){
            state.bussesList = data
        },*/
        deleteBus(state, id){
            state.bussesList = state.bussesList.filter(item => item.id !== id)
        },
        editBus(state, busData){
            const data = state.bussesList.findIndex(item => item.id == busData.id)
            state.bussesList[data] = {...busData}
        },
        addBus(state, busData){
            state.bussesList.push({
                id: new Date().getTime(),
                ...busData})
        }
    },
    actions: {
        /*setBussesList({commit}){
            commit('setBussesList', bussesList)
        },*/
        deleteBus({commit}, id){
            commit('deleteBus', id)
        },
        editBus({commit}, busData){
            commit('editBus', busData)
        },
        addBus({commit}, busData){
            commit('addBus', busData)
        }
    },
    modules: {

    },
});
