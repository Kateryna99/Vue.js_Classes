<template>
<div class="filter">
  <div class="filter__wrapper">
    <div class="filter__block">
      <h2 class="filter__title">Filters:</h2>
    </div>
    <div class="filter__block">
      <div class="filter__item">
        <label class="filter__label">Name:</label>
        <input v-model="filter.name" type="text" class="filter__input">
      </div>
      <div class="filter__item">
        <label class="filter__label">Position:</label>
        <input v-model="filter.position" type="text" class="filter__input">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  name: "FilterContainer",
  data() {
    return {
      filter: {}
    }
  },
  computed: {
    ...mapGetters('workers',['getFilterData'])
  },
  methods: {
    ...mapActions('workers',['updateFilter']),
        ...mapActions('candidates',['updateCandidatesFilter'])
  },
  watch: {
    filter: {
      handler(newValue) {
        if(this.$route.name === 'workers') {
          this.updateFilter(newValue)
        }else this.updateCandidatesFilter(newValue)
      },
      deep: true
    }
  },
}
</script>

<style lang="scss" scoped>
.filter {
  &__wrapper {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  &__block {
    display: flex;
    gap: 20px;
  }

  &__title {
    font-size: 30px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__label {

  }

  &__input {
    border: 2px solid black;
    max-width: 110px;
  }
}
</style>