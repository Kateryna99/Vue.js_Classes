<template>
  <div class="card">
    <div class="card__wrapper">
      <div class="card__header">
          <img class="card__img" :src="card.imgSrc" alt="">
      </div>
      <div class="card__main card-description">
        <div class="card-description__block">
          <div class="card-description__item">
            <a :href="card.link" class="card-description__title">{{card.title}}</a>
          </div>
          <div class="card-description__item">
            <p class="card-description__text">Your discount: <span class="card-description__discount">{{card.discount}} $</span></p>
          </div>
        </div>
        <div class="card-description__block">
           <div class="card-description__item">
             <p class="card-description__price-old">{{card.oldPrice}} $</p>
           </div>
          <div class="card-description__item">
            <p class="card-description__price-new">{{card.price}} $</p>
          </div>
        </div>
      </div>
      <div class="card__footer">
        <button class="card-description__button">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "laptopCard",
  props: {
    card:{
      type: Object,
      default: () => ({}),
    }
  }
}
</script>

<style lang="css" scoped>
.card {
}

.card__wrapper {
  display: flex;
  gap: 20px;
  padding: 10px;
  border-bottom: 1px solid rgba(44, 62, 80, 0.37);
}

.card__header {
  max-width: 200px;
  width: 100%;
  height: 200px;
}

.card__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.card-description {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 5px;
}

.card-description__block {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.card-description__item {
  text-align: start;
}

.card-description__title {
  width: 100px;
  font-size: 20px;
}

.card-description__text {
  font-size: 14px;
}

.card-description__discount {
  color: red;
}

.card-description__price-old {
  text-decoration: line-through;
  color: antiquewhite;
}

.card-description__price-new {
  font-size: 25px;
  color: red;
}

.card__footer {
  align-self: flex-end;
}

.card-description__button {
  color: #cce1cc;
  background-color: #74b274;
  padding: 7px 20px;
  border-radius: 5px;
}
</style>