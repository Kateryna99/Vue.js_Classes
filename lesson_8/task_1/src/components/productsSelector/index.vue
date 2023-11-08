<template>
<div class="products-selector">
  <div class="products-selector__wrapper">
    <div class="products-selector__block">
      <categories-container/>
    </div>
    <div class="products-selector__block">
      <products-container/>
    </div>
  </div>
</div>
</template>

<script>
import CategoriesContainer from "@/components/productsSelector/Categories";
import {mapGetters} from "vuex";
import ProductsContainer from "@/components/productsSelector/Products";
export default {
  name: "productsSelector",
  components: {ProductsContainer, CategoriesContainer},
  computed: {
    ...mapGetters(['getCategoryValue','getProductsList'])
  }
}
</script>

<style lang="scss" scoped>
.products-selector {
&__wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 100px;
 }

&__block {
 }
}
</style>