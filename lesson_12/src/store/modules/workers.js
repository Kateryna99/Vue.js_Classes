import {
    workers,
    gerFilteredList,
    workPositions,
    deleteItemFromArray,
    getPositionByTitle,
    addDataToArray
} from "@/store/data"

export default ({
    namespaced: true,
    state: {
        filterObj: {},
        workPositions,
        workers,
    },
    getters: {
        getFilterData: (state) => state.filterObj,

        getPositionByID: (state) => (id) => state.workPositions.find(position => position.id === id).position,
        getFilteredWorkersList: (state, getters) =>
            state.workers.filter(worker => gerFilteredList(worker, state.filterObj, getters.getPositionByID(worker.positionId)))
    },
    mutations: {
        setFilterData(state, data) {
            state.filterObj = data
        },
        deleteWorker(state, id) {
            state.workers = deleteItemFromArray(state.workers, id)
        },
        addWorker(state, worker) {
            addDataToArray(state.workers, worker.name, getPositionByTitle(state.workPositions, worker.positionId))
        }
    },
    actions: {
        updateFilter({commit}, data) {
            commit('setFilterData', data)
        },
        deleteWorker({commit, dispatch}, id) {
            commit('deleteWorker', id)
            dispatch('interviews/deleteInterviewByWorkerId', id, {root: true})
            dispatch('interviews/deleteWorkerFromOptionListById', id, {root: true})
            dispatch('interviews/deleteCandidateFromOptionListById', id, {root: true})
        },
        addWorker({commit}, worker) {
            commit('addWorker', worker)
        }
    },
    modules: {},
});
