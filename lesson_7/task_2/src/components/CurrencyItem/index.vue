<template>
<div class="currency-option">
  <div class="currency-option__wrapper">
    <div class="currency-option__block">
      <label  class="currency-option__label">
        <select v-model="currencyValue" class="currency-option__select">
          <option value="1">Hryvnia</option>
          <option  value="38">Dollar</option>
        </select>
      </label>
      <div>{{getCurrencyValue}}</div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
  name: "CurrencyOption",
  computed: {
    ...mapGetters(['getCurrencyValue']),
    currencyValue: {
      get() {
        return this.getCurrencyValue
      },
      set(value) {
        this.setCurrencyValue(value)
      }
    }
  },
  methods: {
    ...mapActions(['setCurrencyValue'])
  }
}
</script>

<style lang="scss" scoped>
.currency-option {
  &__wrapper {
  }

  &__block {
  }

  &__label {
  }

  &__select {
  }
}
</style>