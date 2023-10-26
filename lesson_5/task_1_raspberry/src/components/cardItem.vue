<template>
<div class="card">
  <div class="card__wrapper">
    <div class="card__header">
      <img :src="card.imgSrc" alt="" class="card__img">
    </div>
    <div class="card__main">
      <img class="card__logo" :src="card.logo" alt="">
      <h4 class="card__title">{{card.companyTitle}}</h4>
      <p v-if="card.inStock" class="card__stocked">Available</p>
    </div>
    <div class="card__footer">
      <p class="card__text">{{card.description}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "cardItem",
  props: {
    card:{
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="css" scoped>
.card {
}

.card__wrapper {
  padding: 5px;
  display: flex;
  flex-direction: column;

}

.card__header {
  max-width: 200px;
  width: 100%;
  height: 170px;
  border-radius: 10px;
  overflow: hidden;
}

.card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.card__main {
  display: flex;
  align-items: center;
  gap: 5px;
}

.card__title {
  font-size: 14px;
}
.card__logo{
  width: 10px;
  height: 10px;
}
.card__stocked {
  color: #74b274;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.card__stocked::before{
  content: '';
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: #cce1cc;
}

.card__footer {
  display: flex;
  justify-content: flex-start;
}

.card__text {
  font-size: 16px;
}
</style>