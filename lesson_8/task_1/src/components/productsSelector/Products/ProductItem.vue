<template>
 <div class="product-card">
   <div class="product-card__wrapper">
     <div class="product-card__block">
       <div class="product-card__img">
         <img :src="product.imgSrc" alt="">
       </div>
     </div>
     <div class="product-card__block product-card__block--padding">
       <div class="product-card__item">
         <h3 class="product-card__title">{{product.title}}</h3>
       </div>
       <div class="product-card__item">
         <p class="product-card__current-price">{{ product.currentPrice }} $</p>
       </div>
       <div v-if="product.oldPrice" class="product-card__item">
         <p class="product-card__old-price">{{ product.oldPrice }} $</p>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "productItem",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  &__wrapper {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    gap: 5px;
    background-color: azure;
    border-radius: 15px;
    overflow: hidden;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 5px;

    &--padding{
      padding: 5px;
    }
  }

  &__img {
    max-width: 100%;
    width: 100%;
    height: 100px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &__item {
  }

  &__title {
    font-size: 14px;
  }

  &__current-price {
    color: red;
  }

  &__old-price {
    font-size: 12px;
    text-decoration: line-through;
    color: blanchedalmond;
  }
}
</style>