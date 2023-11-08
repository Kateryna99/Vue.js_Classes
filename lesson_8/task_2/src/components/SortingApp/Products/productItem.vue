<template>
    <div class='product-card'>
        <div class='product-card__wrapper'>
            <div class='product-card__block'>
                <div class='product-card__img'>
                    <img :src='product.imageSrc'></div>
            </div>
            <div class='product-card__block'>
                <div class='product-card__header'>
                    <a class='product-card__title'>{{ product.carTitle }}</a>
                    <h3 class='product-card__subtitle'>{{ product.carSubtitle }}</h3>
                </div>
                <div class='product-card__main'>
                    <p class='product-card__price'>{{ product.price }}$ - <span>{{ product.price * 10 }} SEK</span></p>
                </div>
                <div class='product-card__footer product-card--footer'>
                    <div class='product-card--footer__item'>
                        <p class='product-card__subtitle'>+ {{ product.mileage }}</p>
                    </div>
                    <div class='product-card--footer__item'>
                        <p class='product-card__subtitle'>/ {{ product.location }}</p>
                    </div>
                    <div class='product-card--footer__item'>
                        <p class='product-card__subtitle'>= {{ product.engineType }}, {{ product.engineVolume }}</p>
                    </div>
                    <div class='product-card--footer__item'>
                        <p class='product-card__subtitle'>- {{ product.transmission }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productItem',
    props: {
        product: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style lang='scss' scoped>
.product-card {
    &--footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }

    &__wrapper {
        max-width: 700px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }

    &__block {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    &__img {
        max-width: 100%;
        width: 100%;
    }

    &__header {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__title {
        color: aquamarine;
        font-size: 20px;

    }

    &__subtitle {
    }

    &__main {
    }

    &__price {
        font-size: 22px;
        color: chartreuse;

        span{
            font-size: 18px;
            color: blanchedalmond;
        }
    }

    &__footer {
    }
}

.product-card--footer {
    &__item {
    }
}
</style>