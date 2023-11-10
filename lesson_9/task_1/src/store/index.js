import {createStore} from "vuex";
import {productList} from "@/constants/data";

export default createStore({
    state: {
        categoriesList: [
            {
                id: 1,
                title: 'TVs'
            },
            {
                id: 2,
                title: 'Laptops'
            },
            {
                id: 3,
                title: 'Smartphones'
            },
            {
                id: 4,
                title: 'Monitors'
            }
        ],
        productList,
    },
    getters: {
        getCategoriesList: (state) => {
            return state.categoriesList
        },
        getProductList: (state) => (categoryTitle) => {
            const data = categoryTitle.toLowerCase()
            return state.productList.filter(item => item.category === data)
        },
    },
    mutations: {},
    actions: {},
    modules: {},
});
