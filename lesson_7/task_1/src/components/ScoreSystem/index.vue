<template>
<div class="score-system">
  <div class="score-system__wrapper">
    <div class="score-system__block">
      <label  class="data-system__label">Score system
        <select v-model="scoreSystemValue">
          <option :value="12" >12</option>
          <option :value="5">5</option>
        </select>
      </label>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "ScoreSystemContainer",
  props: {
    modelValue: {
      type: Number,
      default: null,
    }
  },
  emits: ['update:modelValue'],
  computed: {
      scoreSystemValue: {
          get() {
              return this.modelValue
          },
          set(value) {
              this.$emit('update:modelValue', value)
          }
      }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>