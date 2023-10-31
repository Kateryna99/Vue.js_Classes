<template>
<div class="shop">
  <div class="shop__wrapper">
    <filter-block :product-brands="productBrands" :suppliers="suppliers" v-model:brand="brandValue" v-model:supplier="supplierValue" />
    <product-container :products="getProductList" />
  </div>
  <div>{{supplierValue}}</div>
  <div>{{brandValue}}</div>
</div>
</template>

<script>
import FilterBlock from "@/components/filterBlock";
import {suppliers,productBrands,products} from "@/constants/data";
import ProductContainer from "@/components/productContainer";
export default {
  name: "shopContainer",
  components: {ProductContainer, FilterBlock},
  data(){
    return {
      suppliers,
      productBrands,
      products,
      brandValue: [],
      supplierValue: [],
    }
  },
  //ДО КІНЦЯ , НАЖАЛЬ, НЕ ЗРОЗУМІЛА ЯК ТУТ ПРАВИЛЬНО ПРОФІЛЬТРУВАТИ. ДОПОМОЖІТЬ, БУДЬ ЛАСКА
  computed:{
    getProductList(){
      if(this.brandValue.length && this.supplierValue.length ){
        return (this.products.filter(item=> this.supplierValue.includes(item.supplier)) && this.products.filter(item=> this.brandValue.includes(item.brandTitle)))
      }
      if(this.supplierValue.length)
        return this.products.filter(item=> this.supplierValue.includes(item.supplier))

      if(this.brandValue.length)
        return this.products.filter(item=> this.brandValue.includes(item.brandTitle))

      return this.products
    }
  }
}
</script>

<style lang="scss" scoped>
.shop {
  &__wrapper {
    padding: 20px;
    display: grid;
    grid-template-columns: 250px 1fr;
  }
}
</style>