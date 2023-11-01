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

  computed:{
    getProductList(){
      /*if(this.brandValue.length && this.supplierValue.length ){
        return (this.products.filter(item=> this.supplierValue.includes(item.supplier)) && this.products.filter(item=> this.brandValue.includes(item.brandTitle)))
      }
      if(this.supplierValue.length)
        return this.products.filter(item=> this.supplierValue.includes(item.supplier))

      if(this.brandValue.length)
        return this.products.filter(item=> this.brandValue.includes(item.brandTitle))*/
      if(this.brandValue.length && this.supplierValue.length){
        let data = this.brandValue.concat(this.supplierValue)
        return this.products.filter(item=> data.includes(item.supplier) && data.includes(item.brandTitle))
      }

      if(this.brandValue.length)
        return this.filteredByOneOption(this.products,this.brandValue,'brandTitle')

      if(this.supplierValue.length)
        return this.filteredByOneOption(this.products,this.supplierValue,'supplier')



      return this.products
    }
  },
  methods:{
    filteredByOneOption(productArr,dataArr,property){
      return productArr.filter(item=>dataArr.includes(item[property]))
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