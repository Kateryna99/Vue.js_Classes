<template>
<div class="products">
  <div class="products__wrapper">
    <div class="products__block">
      <product-item v-for="item in productList" :key="item.id" :product="item" />
    </div>
    <div class="product__block">
      <button @click="goBack" class="products__button">Get Back</button>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex"
import ProductItem from "@/components/ProductItem";
export default {
  name: "ProductsContainer",
  components: {ProductItem},
  data() {
    return {
      productList: []
    }
  },
  computed: {
    ...mapGetters(['getProductList']),

    getProductTitle() {
      return this.$route.params.title
    }
  },
  methods: {
    goBack() {
      this.$router.push({name: 'home'})
    }
  },
  created() {
    this.productList = this.getProductList(this.getProductTitle)
  }
}
</script>

<style lang="scss" scoped>
.products {
  &__wrapper {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__block{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
</style>