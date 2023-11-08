<template>
    <div class='selectors'>
        <div class='selectors__wrapper'>
            <div class='selectors__block'>
                <categories-container />
            </div>
            <div class='selectors__block'>
                <product-list />
            </div>
        </div>
    </div>
</template>

<script>
import CategoriesContainer from '@/components/SortingApp/Categories'
import { mapGetters } from 'vuex'
import ProductList from '@/components/SortingApp/Products'

export default {
    name: 'SortingApp',
    components: { ProductList, CategoriesContainer },
    computed: {
        ...mapGetters(['getProductList'])
    }
}
</script>

<style lang='scss' scoped>

.selectors {
    &__wrapper {
        padding: 20px;
        display: grid;
        grid-template-columns: 200px 1fr;
        gap: 70px;
    }

    &__block {
    }
}
</style>