<template>
 <div class="product-card" @click='chosenProperty(category)'>
   <div class="product-card__wrapper">
     <div class="product-card__block">
       <div class="product-card__img" :class="{'product-card__img--chosen':category.isChosen}" >
         <img :src="category.imgSrc" alt="">
       </div>
     </div>
     <div class="product-card__block">
       <h3 class="product-card__title">{{category.title}}</h3>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    category: {
      type: Object,
      required: true,
    }
  },
  methods: {
    chosenProperty(product) {
      this.$emit('chosenProperty', product)
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;

    cursor: pointer;
  }

  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__img {
    max-width: 150px;
    width: 100%;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;

    background-color: azure;
    border: 3px solid black;

    &--chosen {
      border-color: red;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &__title {
    font-size: 20px;
    letter-spacing: 1px;
  }
}
</style>