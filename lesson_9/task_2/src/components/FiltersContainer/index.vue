<template>
<div class="data">
  <div class="data__wrapper">
    <div class="data__block">
      <h2 class="data__title">Filters</h2>
    </div>
    <div class="data__block">
      <div class="data__item">
        <label  class="data__label" >Title</label>
          <input v-model="companyTitleValue" type="text" class="data__input">

      </div>
      <div class="data__item">
        <label  class="data__label">Rate</label>
          <input v-model="companyRateValue" type="number" class="data__input">

      </div>
      <div class="data__item">
        <label  class="data__label">Year</label>
          <input v-model="companyYearValue" type="number" class="data__input">

      </div>
      <div class="data__item">
        <label  class="data__label">Owner</label>
          <input v-model="companyOwnerValue" type="text" class="data__input">

      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: "FiltersContainer",
  computed: {
    ...mapGetters(['getCompanyTitleValue', 'getCompanyRateValue', 'getCompanyYearValue', 'getCompanyOwnerValue']),

    companyTitleValue: {
      get() {
        return this.getCompanyTitleValue
      },
      set(value) {
        this.setCompanyTitleValue(value)
      }
    },
    companyRateValue: {
      get() {
        return this.getCompanyRateValue
      },
      set(value) {
        this.setCompanyRateValue(value)
      }
    },
    companyYearValue: {
      get() {
        return this.getCompanyYearValue
      },
      set(value) {
        this.setCompanyYearValue(value)
      }
    },
    companyOwnerValue: {
      get() {
        return this.getCompanyOwnerValue
      },
      set(value) {
        this.setCompanyOwnerValue(value)
      }
    }
  },
  methods: {
    ...mapActions(['setCompanyTitleValue', 'setCompanyRateValue', 'setCompanyYearValue', 'setCompanyOwnerValue'])
  }
}
</script>

<style scoped>

</style>