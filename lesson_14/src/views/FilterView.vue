<template>
<div class="filter">
  <div class="filter__wrapper">
    <div class="filter__block">
      <h3 v-if="getRoutePath==='/selector'" class="filter__title">Filters</h3>
      <h3 v-else class="filter__title">Add a new product(adding image is in progress...)</h3>
    </div>
    <div class="filter__block">
      <div class="filter__selectors">
        <div class="filter__item">
          <label class="filter__label">Title:</label>
        </div>
        <div class="filter__item">
          <input v-model="product.title" type="text" class="filter__input">
        </div>
      </div>
      <div class="filter__selectors">
        <div class="filter__item">
          <label  class="filter__label">Price:</label>
        </div>
        <div class="filter__item">
          <input v-model="product.price" type="number" class="filter__input">
        </div>
      </div>
    </div>
    <div v-if="getRoutePath==='/editor'" class="editor__block">
      <button class="filter__button" @click="addProduct(product)">Add</button>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions} from 'vuex'
export default {
  name: "FilterView",
  data() {
    return {
      product: {}
    }
  },
  computed: {
    getRoutePath() {
      return this.$route.path
    }
  },
  methods: {
    ...mapActions(['setFilter','addProduct'])
  },
  watch: {
    product: {
      handler(newValue) {
        if (this.getRoutePath==='/selector')
          this.setFilter(newValue)
      },
      deep: true,
    }

  },
}
</script>

<style lang="scss" scoped>
.filter {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
  }

  &__selectors {
    display: grid;
    grid-template-columns: 60px 220px;
    align-items: center;
    gap: 15px;
  }

  &__item {
  }

  &__label {
  }

  &__input {
    border: 2px solid black;
    padding: 5px 10px;
  }
  &__button {
    border: 2px solid green;
    border-radius: 10px;
    padding: 5px 25px;
  }
}
</style>