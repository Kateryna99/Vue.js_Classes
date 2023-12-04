<template>
  <main-masterpage>
    <template #shop-main>
      <div class="shop shop__main">
        <div class="shop__block">
          <div class="shop__item">
            <h2 class="shop__title">Welcome!</h2>
          </div>
          <div class="shop__item">
            <p class="shop__text">We hope you will be very nice and buy something !!!!</p>
          </div>
        </div>
      </div>
    </template>
    <template #shop-footer>
      <div class="shop__footer">
        <div class="shop__block shop__block--row">
          <div class="shop__item">
            <p class="shop__text">Our Rating: {{ getRating }}</p>
          </div>
          <div class="shop__item">
            <p class="shop__text">Owner: Baba Galya</p>
            <div class="shop__img shop__img--small">
              <img :src="imgSrc">
            </div>
          </div>
        </div>
      </div>
    </template>
  </main-masterpage>
</template>

<script>
// @ is an alias to /src

import MainMasterpage from "@/Masterpages/MainMasterpage";
import { mapGetters } from "vuex";
export default {
  name: "HomeView",
  components: {MainMasterpage},
  data () {
    return {
      imgSrc: require('@/assets/img/cool_woman.jpg')
    }
  },
  computed: {
    ...mapGetters(['getRating'])

  }
};
</script>



<style lang="scss" scoped>

</style>
