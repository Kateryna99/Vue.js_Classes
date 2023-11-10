import { createStore } from "vuex";

export default createStore({
  state: {
    companyTitleValue: null,
    companyRateValue: null,
    companyYearValue: null,
    companyOwnerValue: null,
    companiesList: [
      {
        title: "Apple",
        rate: 1,
        year: 2000,
        owner: "Owner 1",
        id:1
      },
      {
        title: "Company2",
        rate: 2,
        year: 2022,
        owner: "Katya",
        id:2
      }
    ]
  },
  getters: {
    getCompanyTitleValue(state) {
      return state.companyTitleValue;
    },
    getCompanyRateValue(state) {
      return state.companyRateValue;
    },
    getCompanyYearValue(state) {
      return state.companyYearValue;
    },
    getCompanyOwnerValue(state) {
      return state.companyOwnerValue;
    },

    getCompaniesList(state) {
      if(state.companyTitleValue)
        return state.companiesList.filter(company => company.title.toLowerCase().includes(state.companyTitleValue.toLowerCase()))

      if(state.companyRateValue)
        return state.companiesList.filter(company => company.rate.toString().includes(state.companyRateValue.toString()))

      if(state.companyYearValue)
        return state.companiesList.filter(company => company.year.toString().includes(state.companyYearValue.toString()))

      if(state.companyOwnerValue)
        return state.companiesList.filter(company => company.owner.toLowerCase().includes(state.companyOwnerValue.toLowerCase()))

      return state.companiesList
    },
    getCompanyByID:(state)=> (id)=>{
      return {...state.companiesList.find(company => company.id == id)}
    }
  },
  mutations: {
    setCompanyTitleValue(state, value) {
      state.companyTitleValue = value;
    },
    setCompanyRateValue(state, value) {
      state.companyRateValue = value;
    },
    setCompanyYearValue(state, value) {
      state.companyYearValue = value;
    },
    setCompanyOwnerValue(state, value) {
      state.companyOwnerValue = value;
    },
    deleteCompany(state,id) {
      state.companiesList= state.companiesList.filter(company => company.id !== id);
    },
    editCompany(state,companyData) {
        const dataIndex = state.companiesList.findIndex(company => company.id === companyData.id);
        state.companiesList[dataIndex] = {...companyData}
    },
    createNewCompany(state,companyData) {
        state.companiesList.push({...companyData})
    }

  },
  actions: {
    setCompanyTitleValue({commit}, value) {
        commit('setCompanyTitleValue', value);
    },
    setCompanyRateValue({commit}, value) {
        commit('setCompanyRateValue', value);
    },
    setCompanyYearValue({commit}, value) {
        commit('setCompanyYearValue', value);
    },
    setCompanyOwnerValue({commit}, value) {
        commit('setCompanyOwnerValue', value);
    },
    deleteCompany({commit},id) {
      commit('deleteCompany',id);
    },
    getEditCompany({commit},companyData) {
        commit('editCompany',companyData);
    },
    createNewCompany({commit},companyData) {
      commit('createNewCompany',companyData);
    }
  },
  modules: {},
});
