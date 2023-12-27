export const tradersList = [
    {
        id:1,
        title: 'Rozetka',
    },
    {
        id:2,
        title:'Amazon',

    }
]

export const brandsList = [
    {
        id:1,
        title: 'Apple',

    },
    {
        id:2,
        title: 'Acer',

    },
    {
        id:3,
        title:'ASUS',
    },
    {
        id:4,
        title: 'Lenovo',
    },
    {
        id:5,
        title: 'HP',
    }
]

export function getFilteredList(data, filterTraderArray, filterBrandsArr) {
    console.log(filterTraderArray)
    if (filterTraderArray && filterTraderArray.length > 0) {
        console.log('data.trader')
        if (!filterTraderArray.some((item) => item.toLowerCase() === data.trader.toLowerCase())) {
            return false;
        }
    }

    if (filterBrandsArr && filterBrandsArr.length > 0) {
        if (!filterBrandsArr.some((item) => item.toLowerCase() === data.brand.toLowerCase())) {
            return false;
        }
    }

    return data;
}