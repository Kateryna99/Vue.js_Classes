<template>
<div class="page-not-found">
  <div class="page-not-found__wrapper">
    <div class="page-not-found__block">
      <p class="page-not-found__text">Page Not Found!</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style lang="scss" scoped>
.page-not-found {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__block {
    text-align: center;
  }

  &__text {
    font-size: 50px;
    font-weight: 700;
  }
}
</style>