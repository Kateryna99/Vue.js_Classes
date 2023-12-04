<template>
<div class="product-card">
  <div class="product-card__wrapper">
    <div class="product-card__header">
      <div class="product-card__img">
        <img :src="product.imgSrc" alt="">
      </div>
    </div>
    <div class="product-card__main">
      <div class="product-card__item">
        <p class="product-card__text">{{product.title}}</p>
      </div>
      <div class="product-card__item">
        <slot name="first-icon">{{product.price}} SEK</slot>
        <slot name="second-icon"></slot>
      </div>
    </div>
    <div class="product-card__footer">
      <button class="product-card__button">Buy</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ProductCard",
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
    padding: 10px;
    border: 2px #42b983 solid;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    cursor: pointer;
  }

  &__header {
  }

  &__img {
    max-width: 200px;
    width: 100%;
    height: 200px;

    border-radius: 10px;
    overflow: hidden;

    img{
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;


    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__item {
    text-align: center;
    font-size: 20px;
    font-weight: 700;

    display: flex;
    gap: 10px;
  }

  &__text {
    font-size: 20px;
    font-weight: 700;
  }

  &__footer {
  }

  &__button {
    padding: 5px 25px;
    border: 2px green solid;
    border-radius: 10px;

    font-size: 24px;
  }
}
</style>