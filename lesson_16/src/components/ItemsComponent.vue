<template>
<div class="product">
  <div class="product__wrapper">
    <div class="product__header">
      <div class="product__block">
        <slot name="header"></slot>
      </div>
    </div>
    <div class="product__main">
      <slot name="main"></slot>
    </div>
    <div class="product__footer">
      <button class="product__button" @click="buttonAction">{{getButtonText}}</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ItemsComponent",
  computed: {
    getRouterName() {
      return this.$route.name
    },
    getButtonText() {
      return this.getRouterName === 'drivers' ? 'Add driver' : 'Add bus'
    }
  },
  methods: {
    buttonAction() {
      this.$router.push({
        name: 'product-action',
        params: {
          category: this.getRouterName
        }
      })
    }
  }

}
</script>

<style scoped>

</style>