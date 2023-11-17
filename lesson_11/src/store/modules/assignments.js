

export default ({
    namespaced: true,
    state: {
        assignmentsList: [{
            driver:'Oleg',
            bus:'AA345OH',
        },


        ],
        assignmentObj: {}
    },
    getters: {
        getBussesList(state,getters,rootState,rootGetters) {
           return rootGetters['busses/getBussesList']
        },
        getDriversList(state,getters,rootState,rootGetters) {
            return rootGetters['drivers/getFilteredDriversList']
        },
        getAssignmentsList(state){
            return state.assignmentsList
        },

    },
    mutations: {
        deleteAssignment(state, id){
            state.assignmentsList = state.assignmentsList.filter(item => item.id !== id)
        },
        addAssignment(state, assignment){
            state.assignmentsList.push({
                id: new Date().getTime(),
                ...assignment
            })
        }
        /*setAssignmentsObj(state, data){
            state.assignmentObj = data
        }*/
    },
    actions: {
        deleteAssignment({commit}, id){
            commit('deleteAssignment', id)
        },
        /*setAssignmentsObj({commit}, data){
            commit('setAssignmentsObj', data)
        },*/
        addAssignment({commit}, assignment){
            commit('addAssignment', assignment)
        }
    },

});
