<template>
<div class="product-list">
  <div class="product-list__wrapper">
    <product-item v-for="item in products" :key="item.id" :product="item" />
  </div>
</div>
</template>

<script>
import ProductItem from "@/components/productItem";
export default {
  name: "productContainer",
  components: {ProductItem},
  props: {
    products: {
      type: Array,
      default: ()=>[]
    }
  }
}

</script>

<style lang="scss" scoped>
.product-list {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
</style>
