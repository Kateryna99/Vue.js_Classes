<template>
  <div class="products">
    <div class="products__wrapper">
      <div class="products header">
          <h2 class="products__title">{{getCategoryValue}} in Sweden</h2>
      </div>
      <div class="products__main">
        <product-item v-for="item in getProductsList" :key="item.id" :product="item"/>
      </div>

    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/productsSelector/Products/ProductItem";
import {mapGetters} from "vuex";

export default {
  name: "ProductsContainer",
  components: {ProductItem},
  computed: {
    ...mapGetters(['getProductsList','getCategoryValue'])
  }
}
</script>

<style lang="scss" scoped>
.products {
  &__wrapper {
    max-width: 1000px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__main {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
  }
  &__title{
    font-size: 25px;
  }
}
</style>