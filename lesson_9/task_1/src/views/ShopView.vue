<template>
  <div class="data-page-content">
    <div class="data-page-content__wrapper">
      <div class="data-page-content__block">
        <h3 class="data-page-content__title">Product List:</h3>
      </div>
      <div class="data-page-content__block">
        <p v-for="item in getCategoriesList" :key="item.id" @click="sendCategory(item.title)" class="data-page-content__text">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "ShopView",
  computed: {
    ...mapGetters(['getCategoriesList'])

  },
  methods: {
    sendCategory(title) {
      this.$router.push({
        name: 'products',
        params: {
          title
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.data-page-content {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  &__title {
    font-size: 25px;
  }

  &__text {
    cursor: pointer;
    font-size: 20px;
  }
}
</style>