<template>
<div class="shop">
  <div class="shop__wrapper">
    <div class="shop__filters">
      <filters-container/>
    </div>
    <div class="shop__block">
      <product-item v-for="product in getFilteredItemsList" :key="product.id" :product="product"/>
    </div>
  </div>
</div>
</template>

<script>
import FiltersContainer from "@/components/filters/FiltersContainer";
import ProductItem from "@/components/products/ProductItem";

import {mapGetters,mapActions} from "vuex";
export default {
  name: "ShopVue",
  components: { FiltersContainer,ProductItem},
  computed: {
    ...mapGetters('products',['getFilteredItemsList'])
  },
  methods: {
    ...mapActions('products',['loadList'])
  },
  created() {
    this.loadList()
  }
}
</script>

<style lang="scss" scoped>
.shop {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 100px;
  }

  &__block {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 30px;
    row-gap: 20px;
  }
}
</style>