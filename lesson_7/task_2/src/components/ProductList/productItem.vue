<template>
<div class="product-card">
  <div class="product-card__wrapper">
    <div class="product-card__block">
      <p class="product-card__title">{{product.title}}</p>
      <p class="product-card__price">{{getCurrentPrice(product.price)}} {{updateCurrency}} </p>
    </div>
    <div class="product-card__block">
      <button @click="productAction" class="product-card__button">{{buttonTitle}}</button>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "productItem",
  props: {
    product: {
      type: Object,
      default: () => ({})
    },
    buttonTitle: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters(['updateCurrency','getCurrentPrice'])


  },
  methods: {
    productAction() {
      this.$emit('productAction', this.product)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>