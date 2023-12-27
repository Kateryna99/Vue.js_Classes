<template>
  <div class="filters">
    <div class="filters__wrapper">
      <div class="filters__content">
        <div class="filters__block">
          <h3 class="filters__title">{{$t('titles.trader')}}</h3>
        </div>
        <div class="filters__block">
          <div v-for="item in getTradersList" :key="item.id" class="filters__element">
            <div class="filters__item">
              <input v-model="traders" :value="item.title" :id="item.title" type="checkbox" name="traders" class="filters__input">
            </div>
            <div class="filters__item">
              <label  :for="item.title" class="filters__label">{{item.title}}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="filters__content">
        <div class="filters__block">
          <h3 class="filters__title">{{$t('titles.brand')}}</h3>
        </div>
        <div class="filters__block">
          <div v-for="item in getBrandsList" :key="item.id" class="filters__element">
            <div class="filters__item">
              <input v-model="brands" :value="item.title" :id="item.title" type="checkbox" name="brands" class="filters__input">
            </div>
            <div class="filters__item">
              <label :for="item.title" class="filters__label">{{item.title}}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
export default {
  name: "FiltersContainer",
  data() {
    return {
      traders: [],
      brands: []
    }
  },
  computed: {
    ...mapGetters(['getTradersList', 'getBrandsList']),

    getLanguage() {
      return this.$i18n.locale
    }
  },
  methods: {
    ...mapActions('products',['setBrandsArray','setTradersArray'])
  },
  watch: {
    traders(newValue) {
      this.setTradersArray(newValue)
    },
    brands(newValue) {
      this.setBrandsArray(newValue)
    }
  },
}
</script>

<style lang="scss" scoped>
.filters {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-size: 30px;
    font-weight: bold;
  }

  &__element {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__item {
  }

  &__input {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }

  &__label {
    cursor: pointer;
    font-size: 20px;
  }
}
</style>