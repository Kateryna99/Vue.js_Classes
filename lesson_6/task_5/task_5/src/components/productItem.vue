<template>
<div class="product-card">
  <div class="product-card__wrapper">
    <div class="product-card__header">
      <img :src="product.imgSrc" class="product-card__img">
    </div>
    <div class="product-card__main">
      <h3 class="product-card__title">{{product.name}}</h3>
    </div>
    <div class="product-card__footer">
      <p class="product-card__price">{{product.price}} SEK</p>
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
      default: ()=>({})
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  &__wrapper {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    border: 1px solid black;
  }

  &__header {
    max-width: 200px;
    width: 100%;
    height: 200px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-position: center center;
    object-fit: contain;
  }

  &__main {
  }

  &__title {
    font-size: 18px;
  }

  &__footer {
  }

  &__price {
    font-size: 22px;
    color: red;
  }
}
</style>