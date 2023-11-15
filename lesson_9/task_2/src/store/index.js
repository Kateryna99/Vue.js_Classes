import {createStore} from "vuex";

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
                id: 1
            },
            {
                title: "Company2",
                rate: 2,
                year: 2022,
                owner: "Katya",
                id: 2
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
            if (state.companyTitleValue || state.companyRateValue || state.companyYearValue || state.companyOwnerValue) {
                const data = [...state.companiesList];
                return data.filter(company => {
                    const nameData = !state.companyTitleValue || company.title.toLowerCase().includes(state.companyTitleValue.toLowerCase());
                    const rateData = !state.companyRateValue || company.rate.toString().includes(state.companyRateValue.toString());
                    const yearData = !state.companyYearValue || company.year.toString().includes(state.companyYearValue.toString());
                    const ownerData = !state.companyOwnerValue || company.owner.toLowerCase().includes(state.companyOwnerValue.toLowerCase());
                    return nameData && rateData && yearData && ownerData;
                })
            }
            return state.companiesList
        },
        getCompanyByID: (state) => (id) => {
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
        deleteCompany(state, id) {
            state.companiesList = state.companiesList.filter(company => company.id !== id);
        },
        editCompany(state, companyData) {
            const dataIndex = state.companiesList.findIndex(company => company.id === companyData.id);
            state.companiesList[dataIndex] = {...companyData}
        },
        createNewCompany(state, companyData) {
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
        deleteCompany({commit}, id) {
            commit('deleteCompany', id);
        },
        getEditCompany({commit}, companyData) {
            commit('editCompany', companyData);
        },
        createNewCompany({commit}, companyData) {
            commit('createNewCompany', companyData);
        }
    },
    modules: {},
});
