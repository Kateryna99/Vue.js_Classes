<template>
<div class="product-list">
  <div class="product-list__wrapper">
    <product-card v-for="item in getProductsList" :key="item.id" :product="item"/>
  </div>
</div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import {mapGetters} from "vuex";

export default {
  name: "ProductContainer",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(['getProductsList'])
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    justify-items: center;
  }
}
</style>