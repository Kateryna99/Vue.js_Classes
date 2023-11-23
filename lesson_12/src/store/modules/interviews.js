import {weekDays, workers, candidates, getElementById, getFilteredListByPosition} from "@/store/data";

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//ДОБРИЙ ДЕНЬ! ПІДКАЖІТЬ, БУДЬ ЛАСКА, ЯК ПО.ІНШОМУ МОЖНА БУЛО ВИРІШИТИ ЦЕ ЗАВДАННЯ, БО МЕНІ ЗДАЄТЬСЯ, Я ТРІШКИ НАКРУТИЛА ЗАЙВОГО :))))) АЛЕ, ХОЧА Б, ВСЕ ФІЛЬТРУЄТЬСЯ ТА ВИДАЛЯЄТЬСЯ.
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export default ({
    namespaced: true,
    state: {
        chosenCouples: [{
            id: 1,
            worker: 1,
            candidate: 2,
            day: 1,
        }],
        weekDays,
        interviewObj: {},
        workers,
        candidates
    },
    getters: {
        getWorkerByID: (state, getters, rootState, rootGetters) => (id) => {
            return getElementById(rootGetters['workers/getFilteredWorkersList'], id).name
        },
        getCandidateByID: (state, getters, rootState, rootGetters) => (id) => {
            return getElementById(rootGetters['candidates/getFilteredList'], id).name
        },
        getDayByID: (state, getters, rootState, rootGetters) => (id) => {
            return getElementById(rootGetters['interviews/getWeekDays'], id).name
        },

        getChosenCouples: (state) => state.chosenCouples,
        getWeekDays: (state) => state.weekDays,
        getInterviewData: (state) => state.interviewObj,


        getCandidateByPosition: (state, getters, rootState, rootGetters) => (id) => {
            if (id)
                return getElementById(rootGetters['candidates/getFilteredList'], id).positionId
        },
        getWorkerByPosition: (state, getters, rootState, rootGetters) => (id) => {
            if (id)
                return getElementById(rootGetters['workers/getFilteredWorkersList'], id).positionId
        },
        getFilteredWorkersListByPosition: (state, getters) => (id) => {
            return getFilteredListByPosition(state.workers, getters.getCandidateByPosition(id))
        },
        getFilteredCandidatesListByPosition: (state, getters) => (id) => {
            return getFilteredListByPosition(state.candidates, getters.getWorkerByPosition(id))
        }
    },
    mutations: {
        setInterviewData(state, data) {
            state.interviewObj = data
        },
        deleteAnInterview(state, id) {
            state.chosenCouples = state.chosenCouples.filter(item => item.id !== id)
        },
        addInterview(state, couple) {
            state.chosenCouples.push({
                id: new Date().getTime(),
                ...couple
            })
            state.workers = state.workers.filter(item => item.id !== couple.worker)
            state.candidates = state.candidates.filter(item => item.id !== couple.candidate)
        },
        deleteInterviewByWorkerId(state, id) {
            state.chosenCouples = state.chosenCouples.filter(item => item.worker !== id)
        },
        deleteInterviewByCandidateId(state, id) {
            state.chosenCouples = state.chosenCouples.filter(item => item.candidate !== id)
        },
        deleteWorkerFromOptionListById(state, id) {
            state.workers = state.workers.filter(item => item.id !== id)
        },
        deleteCandidateFromOptionListById(state, id) {
            state.candidates = state.candidates.filter(item => item.id !== id)
        }
    },
    actions: {
        updateInterviewData({commit}, data) {
            commit('setInterviewData', data)
        },
        deleteInterview({commit}, id) {
            commit('deleteAnInterview', id)
        },
        deleteInterviewByWorkerId({commit}, id) {
            commit('deleteInterviewByWorkerId', id)
        },
        addNewInterview({commit}, couple) {
            commit('addInterview', couple)
        },
        deleteInterviewByCandidateId({commit}, id) {
            commit('deleteInterviewByCandidateId', id)
        },
        deleteWorkerFromOptionListById({commit}, id) {
            commit('deleteWorkerFromOptionListById', id)
        },
        deleteCandidateFromOptionListById({commit}, id) {
            commit('deleteCandidateFromOptionListById', id)
        }
    },
    modules: {},
});
