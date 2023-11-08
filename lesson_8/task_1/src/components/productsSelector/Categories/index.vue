<template>
<div class="product-categories">
  <div class="product-categories__wrapper">
    <category-item v-for="item in categoriesList" :key ='item.id' :category="item" @chosenProperty="sendPropertyData" />
  </div>
</div>
</template>

<script>
import CategoryItem from "@/components/productsSelector/Categories/CategoryItem";
import {categoriesList} from "@/constants/data";
import {mapActions} from "vuex";
export default {
  name: "CategoriesContainer",
  components: {CategoryItem},
  data() {
    return {
      categoriesList
    }
  },
  methods: {
    ...mapActions(['setCategoryValue']),

    chosenProperty(category) {
      let data = this.categoriesList.find(item => item.title === category.title)
      for (let item in this.categoriesList){
        this.categoriesList[item].isChosen = false
      }
      data.isChosen = true
    },
    sendPropertyData(category) {
      this.chosenProperty(category)

      this.setCategoryValue(category)
    }
  }
}
</script>

<style lang="scss" scoped>
.product-categories {
  &__wrapper {
    display: flex;
    gap: 50px;
  }
}
</style>