<template>
<div class="persons">
  <div class="persons__wrapper">
    <div class="persons__block persons__block--row">
      <h3 class="persons__title">Name</h3>
      <h3 class="persons__title">Position</h3>
    </div>
    <div class="persons__block">
      <div v-for="item in dataArr" :key="item.id" class="persons__item">
        <p class="persons__text">{{item.name}}</p>
        <p class="persons__text">{{getPositionByID(item.positionId)}}</p>
        <button @click="this.$emit('deleteItem',item.id)" class="persons__button">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  name: "PersonsContainer",
  props: {
    dataArr: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters('workers',['getPositionByID']),
  },

}
</script>

<style lang="scss" scoped>
.persons {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 2px solid black;
    padding: 10px;
    &--row {
      flex-direction: row;
      gap: 120px;
      border: none;
      padding: 0;
    }
  }

  &__title {
    font-size: 23px;
  }

  &__item {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    align-items: center;

    &:not(:last-child) {
      border-bottom: 2px solid black;
    }
  }

  &__text {
    font-size: 18px;
  }
  &__button {
    border: 2px solid red;
    padding: 6px 10px;
    border-bottom: none;
  }
}
</style>