<template>
  <div class="shop">
    <div class="shop__wrapper">
      <div class="shop__block">
        <product-list :product-list="getProductList"/>
      </div>
      <div class="shop__block">
        <currency-option/>
      </div>
      <div class="shop__block">
        <shopping-cart :product-list="getSelectedProduct"/>
      </div>
    </div>
  </div>
</template>

<script>
import CurrencyOption from "@/components/CurrencyItem";
import ProductList from "@/components/ProductList";
import {mapGetters, mapActions} from "vuex";
import ShoppingCart from "@/components/ShoppingCart";

export default {
  name: "ShopContainer",
  components: {ShoppingCart, ProductList, CurrencyOption},
  computed: {
    ...mapGetters(['getProductList','getSelectedProduct',])

  },
  methods: {
    ...mapActions(['uploadProductList'])
  },
  created() {
    this.uploadProductList()
  }
}
</script>

<style lang="scss" scoped>
.shop {
  &__wrapper {
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  &__block {
  }

  &__item {
  }
}
</style>