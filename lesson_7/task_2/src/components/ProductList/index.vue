<template>
<div class="product-list">
  <div class="product-list__wrapper">
    <div class="product-list__header">
      <h2 class="product-list__title">Product List</h2>
    </div>
    <div class="product-list__main">
      <product-item v-for="item in productList" :key="item.id" :product="item" button-title="Buy" @product-action="setSelectedProduct(item)" />
    </div>
  </div>
</div>
</template>

<script>
import ProductItem from "@/components/ProductList/productItem";
import {mapActions} from "vuex";
export default {
  name: "productList",
  components: {ProductItem},
  props: {
    productList: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    ...mapActions(['setSelectedProduct']),
  }
}
</script>

<style lang="scss" scoped>

</style>