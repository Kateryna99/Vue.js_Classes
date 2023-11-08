<template>
<div class='product-list'>
    <div class='product-list__wrapper'>
        <p v-if='!getProductList.length' class='product-list__wrong'>There is no car available</p>
        <product-item v-else v-for='item in getProductList' :key='item.id' :product='item' />
    </div>
</div>
</template>

<script>
import ProductItem from '@/components/SortingApp/Products/productItem'
import { mapGetters } from 'vuex'
export default {
    name: 'ProductList',
    components: { ProductItem },
    computed: {
        ...mapGetters(['getProductList'])

    }
}
</script>

<style lang='scss' scoped>
.product-list {
    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>