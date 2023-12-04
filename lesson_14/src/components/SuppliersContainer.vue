<template>
<div class="suppliers">
  <div class="suppliers__wrapper">
    <product-card v-for="item in getSuppliersList" :key="item.id" :product="item">
      <template #first-icon>
        <span :class="item.firstIcon" class="icon"></span>
      </template>
      <template #second-icon>
        <span :class="item.secondIcon" class="icon"></span>
      </template>
    </product-card>
  </div>
</div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import {mapGetters} from "vuex";
export default {
  name: "SuppliersContainer",
  components: {ProductCard},
  computed:{
    ...mapGetters(['getSuppliersList'])
  }

}
</script>

<style lang="scss" scoped>
.suppliers {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 10px;
    justify-items: center;
  }
}

.icon {
}
</style>