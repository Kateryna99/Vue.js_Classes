<template>
  <div class="product-list">
    <div class="product-list__wrapper">
      <div class="product-list__header">
        <h2 class="product-list__title">Product Cart</h2>
      </div>
      <div class="product-list__main">
        <div class="product-list__block">
          <product-item v-for="item in productList" :key="item.id" :product="item" button-title="Cancel" @product-action="cancelSelectedProduct(item)" />
        </div>
       <div class="product-list__block">
         <div class="product-card">
           <div class="product-card__wrapper">
             <div class="product-card__block">
               <p class="product-card__title">Checkout</p>
               <p class="product-card__price">{{getTotalPrice}} <span v-if="getTotalPrice>0">{{updateCurrency}}</span></p>
             </div>
             <div class="product-card__block">
               <button @click="payAllProducts" class="product-card__button">Pay All</button>
             </div>
           </div>
         </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductList/productItem";
import {mapActions,mapGetters} from "vuex";
export default {
  name: "shoppingCart",
  components: {ProductItem},
  props: {
    productList: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    ...mapGetters(['getTotalPrice','updateCurrency']),

      },
  methods: {
    ...mapActions(['cancelSelectedProduct','payAllProducts']),
  }
}
</script>

<style lang="scss" scoped>

</style>e>