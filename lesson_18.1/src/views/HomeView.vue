<template>
  <main-master-page>
    <div class="home">
      <div class="home__wrapper">
        <div class="home__block">
          <p class="home__text">Welcome to Santa Claus !</p>
          <p class="home__text">Here you can choose gifts for your friends</p>
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script>
// @ is an alias to /src


import MainMasterPage from "../MasterPages/MainMasterPages.vue";
export default {
  name: "HomeView",
  components: {
    MainMasterPage

  },
};
</script>
