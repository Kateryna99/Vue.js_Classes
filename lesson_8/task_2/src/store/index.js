import { createStore } from 'vuex'
import { productList } from '@/constants/data'

export default createStore({
    state: {
        productList,
        vehicleTypeValue: null,
        vehicleBodyTypeValue: [],
        vehicleModelType: null,
        vehicleBrandTypeValue: null,
        yearFrom: null,
        yearTo: null
    },
    getters: {
        getProductList(state) {
            let filteredList = state.productList

            if (state.vehicleTypeValue) {
                filteredList = filteredList.filter(car => car.type === state.vehicleTypeValue)}

            if (state.vehicleBodyTypeValue.length > 0) {
                filteredList = filteredList.filter(car => state.vehicleBodyTypeValue.includes(car.bodyType))}

            if (state.vehicleModelType) {
                filteredList = filteredList.filter(car => car.model === state.vehicleModelType)}

            if (state.vehicleBrandTypeValue) {
                filteredList = filteredList.filter(car => car.brand === state.vehicleBrandTypeValue)}

            if (state.yearFrom && state.yearTo) {
                filteredList = filteredList.filter(car => car.year >= state.yearFrom && car.year <= state.yearTo)}

            return filteredList
        },
        getVehicleTypeValue(state) {
            return state.vehicleTypeValue
        },
        getVehicleBodyType(state) {
            return state.vehicleBodyTypeValue
        },
        getVehicleModelType(state) {
            return state.vehicleModelType
        },
        getVehicleBrandType(state) {
            return state.vehicleBrandTypeValue
        },
        getYearFrom(state) {
            return state.yearFrom
        },
        getYearTo(state) {
            return state.yearTo
        }
    },
    mutations: {
        setVehicleTypeValue(state, value) {
            state.vehicleTypeValue = value
        },
        setVehicleBodyTypeValue(state, value) {
            state.vehicleBodyTypeValue = value
        },
        setVehicleModelType(state, value) {
            state.vehicleModelType = value
        },
        setVehicleBrandTypeValue(state, value) {
            state.vehicleBrandTypeValue = value
        },
        setYearFrom(state, value) {
            state.yearFrom = value
        },
        setYearTo(state, value) {
            state.yearTo = value
        }
    },
    actions: {
        setVehicleTypeValue({ commit }, value) {
            commit('setVehicleTypeValue', value)
        },
        setVehicleBodyTypeValue({ commit }, value) {
            commit('setVehicleBodyTypeValue', value)
        },
        setVehicleModelType({ commit }, value) {
            commit('setVehicleModelType', value)
        },
        setVehicleBrandTypeValue({ commit }, value) {
            commit('setVehicleBrandTypeValue', value)
        },
        setYearFrom({ commit }, value) {
            commit('setYearFrom', value)
        },
        setYearTo({ commit }, value) {
            commit('setYearTo', value)
        }
    },
    modules: {}
})
