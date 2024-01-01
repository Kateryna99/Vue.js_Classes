<script setup>

import MainMasterPage from "../MasterPages/MainMasterPage.vue";
</script>

<template>
  <main-master-page>
    <div class="home">
      <div class="home__wrapper">
        <div class="home__block">
          <p class="home__text">Welcome to Santa Claus residency!</p>
          <p class="home__text">Here you can choose gifts for your friends</p>
        </div>
      </div>
    </div>
  </main-master-page>
</template>


<style lang="scss" scoped>
.home {
  &__wrapper {
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__text {
    font-size: 20px;
    line-height: 1.5;
  }
}
</style>
