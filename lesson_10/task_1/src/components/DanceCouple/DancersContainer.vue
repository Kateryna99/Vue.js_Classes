<template>
  <div class="dancers">
    <div class="dancers__wrapper">
      <div class="dancers__block">
        <div class="dancers__item">
          <h3 class="dancers__title">Boys</h3>
        </div>
        <div class="dancers__item dancers__item--border">
          <ul class="dancers__list">
            <li  v-for="item in getBoysList" :key="item.id" :class="{'dancers__list-item--selected': getSelectedBoy(item.id)}" class="dancers__list-item" @click="selectBoy(item.id)">{{ item.name }}</li>
          </ul>
        </div>
      </div>
      <div class="dancers__block dancers__block--button">
        <button :class="{'dancers__button--disabled': isLackOfDancer}" :disabled="isLackOfDancer" class="dancers__button" @click="addCouple" >Add</button>
      </div>
      <div class="dancers__block">
        <div class="dancers__item">
          <h3 class="dancers__title">Girls</h3>
        </div>
        <div class="dancers__item dancers__item--border">
          <ul class="dancers__list">
            <li  v-for="item in getGirlsList" :key="item.id" :class="{'dancers__list-item--selected': getSelectedGirl(item.id)}" class="dancers__list-item" @click="selectGirl(item.id)">{{ item.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "DancersContainer",
  computed: {
    ...mapGetters(['getBoysList', 'getGirlsList','getSelectedBoy', 'getSelectedGirl','isLackOfDancer']),
  },
  methods: {
    ...mapActions(['selectBoy', 'selectGirl','addCouple']),
  }
}
</script>

<style lang="scss" scoped>
.dancers {
  &__wrapper {

    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
justify-items: center;
  }

  &__block {
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    &--button{

      justify-content: center;
      align-items: center;
    }
  }

  &__item {
    &--border {
      border: 2px solid black;
      min-height: 323px;
      padding: 20px;
    }
  }

  &__title {
    font-size: 30px;
    letter-spacing: 2px;
    font-weight: 700;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  &__list-item {
    font-size: 24px;
    cursor: pointer;
    border: 2px solid transparent;
    padding: 3px 9px;
    &--selected{
      border-color: aqua;
    }
  }

  &__button {
    padding: 7px 20px;
    border: 2px solid green;

    font-size: 27px;
    letter-spacing: 1.5px;

    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>