<template>
<div class="filter">
  <filter-item v-model:brand-value.check="brandValue" v-model:supplier-value.check="supplierValue" :brands-array="productBrands" :suppliers-array="suppliers" />
</div>
</template>

<script>
import FilterItem from "@/components/filterItem";


export default {
  name: "filterContainer",
  components: {FilterItem},
  props: {
    productBrands: {
      type: Array,
      default: () => [],
    },
  suppliers: {
    type: Array,
    default: () => [],
  },
    brand: {
      type: Array,
    },
    supplier: {
      type: Array,
    }
},
  /*data(){
    return{
      brandValue: [],
      supplierValue: [],
    }
  },*/
  computed: {
    brandValue: {
      get(){
        return this.brand
      },
      set(value){
        this.$emit('update:brand', value)
      }
    },
    supplierValue: {
      get(){
        return this.supplier
      },
      set(value){
        this.$emit('update:supplier', value)
      }
    }
  }
}
</script>

<style scoped>

</style>
