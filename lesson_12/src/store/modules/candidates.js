import {
    workPositions,
    candidates,
    gerFilteredList,
    deleteItemFromArray,
    addDataToArray,
    getPositionByTitle
} from "@/store/data";

export default ({
    namespaced: true,
    state: {
        candidates,
        workPositions,
        filterObj: {}
    },
    getters: {
        getPositionByID: (state) => (id) => state.workPositions.find(position => position.id === id).position,

        getFilteredList: (state, getters) => state.candidates.filter(item => gerFilteredList(item, state.filterObj, getters.getPositionByID(item.positionId)))
    },
    mutations: {
        setCandidatesList(state, data) {
            state.candidates = data
        },
        deleteCandidate(state, id) {
            state.candidates = deleteItemFromArray(state.candidates, id)
        },
        addCandidate(state, candidate) {

            const positionData=getPositionByTitle(state.workPositions,candidate.positionId)
            addDataToArray(state.candidates, candidate.name, positionData)
        }
    },
    actions: {
        updateCandidatesFilter({commit}, data) {
            commit('setFilterData', data)
        },
        deleteCandidateFromList({commit,dispatch}, id) {
            commit('deleteCandidate', id)
            dispatch('interviews/deleteInterviewByCandidateId', id, {root: true})
        },
        addCandidate({commit}, candidate) {
            commit('addCandidate', candidate)
        }
    },
    modules: {},
});
