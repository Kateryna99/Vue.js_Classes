import {createStore} from "vuex";
import {pupilsList} from "@/store/data";

export default createStore({
    state: {
        boysList: null,
        girlsList: null,
        selectedCouples: [],
        selectedCouple: {
            boy: null,
            girl: null,
        },
        buttonStatus: false,
    },
    getters: {
        getBoysList(state) {
            return state.boysList;
        },
        getGirlsList(state) {
            return state.girlsList;
        },
        getSelectedCouples(state) {
            return state.selectedCouples
        },
        getSelectedBoy:(state)=>(id)=>{
            return state.selectedCouple.boy=== id
        },
        getSelectedGirl:(state)=>(id)=>{
            return state.selectedCouple.girl === id
        },
        isLackOfDancer(state){
            return !state.boysList.length || !state.girlsList.length
        }
    },
    mutations: {
        setData(state, pupilsList) {
            state.boysList = pupilsList.filter((item) => item.gender === "male");
            state.girlsList = pupilsList.filter((item) => item.gender === "female");
        },
        selectBoy(state, id) {
            state.selectedCouple.boy===id ? state.selectedCouple.boy = null : state.selectedCouple.boy = id;
        },
        selectGirl(state, id) {
            state.selectedCouple.girl===id ? state.selectedCouple.girl = null : state.selectedCouple.girl = id;
        },
        addCouple(state) {
            state.selectedCouples.push({
                id: Date.now(),
                boy: state.boysList.find(item=>item.id===state.selectedCouple.boy),
                girl: state.girlsList.find(item=>item.id===state.selectedCouple.girl)
            });
            state.boysList = state.boysList.filter(item=>item.id!==state.selectedCouple.boy);
            state.girlsList = state.girlsList.filter(item=>item.id!==state.selectedCouple.girl);
        }
    },
    actions: {
        setData({commit},) {
            commit("setData", pupilsList);
        },
        selectBoy({commit}, id) {
            commit("selectBoy", id);
        },
        selectGirl({commit}, id) {
            commit("selectGirl", id);
        },
        addCouple({commit}) {
            commit("addCouple");
        }
    },
    modules: {},
});
