import {createStore} from "vuex";
import students from '../constants/data.json';
import {getScoreIn5System} from "./helpers";

export default createStore({
    state: {
        studentsList: [],
        studentCategoryValue : undefined,
    },
    getters: {
        getStudentCategory(state){
            return state.studentCategoryValue
        },
        getStudentsListByScoreCategory(state,getters) {
            return (scoreCategory)=>{
                if(scoreCategory===12) return getters.getStudentsListByCategory
                else {
                    const studentsListCopy = JSON.parse(JSON.stringify(getters.getStudentsListByCategory))
                    studentsListCopy.forEach((student) => {
                        student.averageScore = getScoreIn5System(student.averageScore)
                    })
                    return studentsListCopy
                }
            }
        },
        getStudentsListByCategory({studentsList,studentCategoryValue}) {
            if(!studentCategoryValue) return studentsList
            else
                return studentsList.filter(item=>
                    item.averageScore >= studentCategoryValue.minScore && item.averageScore <= studentCategoryValue.maxScore
                )

        }
    },
    mutations: {
        setStudentList(state, students) {
            state.studentsList = students
        },
        setStudentCategory(state, category){
            state.studentCategoryValue = category
        }
    },
    actions: {
        setStudentList({commit}) {
            commit('setStudentList', students)
        },
        setStudentCategory({commit},category){
            commit('setStudentCategory', category)
        }
    },
    modules: {},
});
