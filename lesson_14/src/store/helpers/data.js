export const productsList = [
    {
        id: 1,
        imgSrc: require('@/assets/img/product1.jpg'),
        title: 'Apple',
        price: 15, // Ціна в SEK за кг
    },
    {
        id: 2,
        imgSrc: require('@/assets/img/product2.jpg'),
        title: 'Banana',
        price: 20, // Ціна в SEK за кг
    },
    {
        id: 3,
        imgSrc: require('@/assets/img/products3.jpg'),
        title: 'Carrot',
        price: 12, // Ціна в SEK за кг
    },
    {
        id: 4,
        imgSrc: require('@/assets/img/product4.jpg'),
        title: 'Grape',
        price: 30, // Ціна в SEK за кг
    },
    {
        id: 5,
        imgSrc: require('@/assets/img/product5.jpg'),
        title: 'Orange',
        price: 25, // Ціна в SEK за кг
    },
    {
        id: 6,
        imgSrc: require('@/assets/img/product6.jpg'),
        title: 'Strawberry',
        price: 40, // Ціна в SEK за кг
    },
    {
        id: 7,
        imgSrc: require('@/assets/img/product7.jpg'),
        title: 'Tomato',
        price: 18, // Ціна в SEK за кг
    },
    {
        id: 8,
        imgSrc: require('@/assets/img/product8.jpg'),
        title: 'Cucumber',
        price: 15, // Ціна в SEK за кг
    },
    {
        id: 9,
        imgSrc: require('@/assets/img/product9.jpg'),
        title: 'Lemon',
        price: 22, // Ціна в SEK за кг
    },
    {
        id: 10,
        imgSrc: require('@/assets/img/product10.jpg'),
        title: 'Bell Pepper',
        price: 20, // Ціна в SEK за кг
    },
]

export const suppliersList = [
    {
        id: 1,
        imgSrc: require('@/assets/img/supplier1.jpg'),
        title: 'Fly',
        firstIcon: 'icon-location-marina',
        secondIcon: 'icon-travel-car',
    },
    {
        id: 2,
        imgSrc: require('@/assets/img/supplier2.jpg'),
        title: 'Reliability',
        firstIcon: 'icon-travel-car',
        secondIcon: false,
    },
    {
        id: 3,
        imgSrc: require('@/assets/img/supplier3.jpg'),
        title: 'Fast',
        firstIcon: 'icon-location-marina',
        secondIcon: 'icon-travel-car',
    },
    {
        id: 4,
        imgSrc: require('@/assets/img/supplier4.jpg'),
        title: 'Econom',
        firstIcon: 'icon-travel-car',
        secondIcon: 'icon-shopping-cart',
    },

]

export function getSortedList(dataArrItem,filterObj) {
    let {title,price} = filterObj
    if(title && !dataArrItem.title.toLowerCase().includes(title.toLowerCase())) return false
    if(price && !dataArrItem.price.toString().includes(price.toString())) return false

    return dataArrItem
}