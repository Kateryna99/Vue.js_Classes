<template>
  <div class="laptops">
    <div class="laptops__wrapper">
 <laptop-card v-for="item in laptopData" :key="item.id" :card="item"/>
    </div>
  </div>
</template>

<script>
import LaptopCard from "@/components/laptopCard";
export default {
  name: "laptopContainer",
  components: {LaptopCard},
  props: {
    laptopData:{
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="css" scoped>
.laptops {
}

.laptops__wrapper {
  display: flex;
  flex-direction: column;
}
</style>