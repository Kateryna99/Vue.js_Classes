<template>
<main-masterpage>
  <template #shop-header>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
  </template>
  <template #shop-main>
    <div class="extra">
      <div class="extra__wrapper">
        <div class="extra__block">
          <div class="extra__item">
            <h3 class="extra__title">Our contacts:</h3>
          </div>
          <div class="extra__item">
            <p class="extra__text">Shop address: near Baba Galya's house</p>
          </div>
          <div class="extra__item">
            <p class="extra__text">Manager: Did Petro</p>
          </div>
          <div class="extra__item">
            <p class="extra__text">Assistant: granddaughter Sofiyka</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template #shop-footer>
    <div class="extra__block">
      <div class="extra__item">
        <h3 class="extra__title">Gallery:</h3>
      </div>
      <div class="extra__gallery">
        <div class="extra__gallery-item">
          <img :src="imgSrc.first" alt="" class="extra__img">
        </div>
        <div class="extra__gallery-item">
          <img :src="imgSrc.second" alt="" class="extra__img">
        </div>
        <div class="extra__gallery-item">
          <img :src="imgSrc.third" alt="" class="extra__img">
        </div>
        <div class="extra__gallery-item">
          <img :src="imgSrc.fourth" alt="" class="extra__img">
        </div>
      </div>
    </div>
  </template>
</main-masterpage>
</template>

<script>
import MainMasterpage from "@/Masterpages/MainMasterpage";
export default {
  name: "ContactsView",
  components: {MainMasterpage},
  data () {
    return {
      imgSrc:{
        first: require('@/assets/img/cool_woman.jpg'),
        second: require('@/assets/img/food.jpg'),
        third: require('@/assets/img/product7.jpg'),
        fourth: require('@/assets/img/supplier2.jpg'),
      },

    }
  }
}
</script>

<style scoped>

</style>