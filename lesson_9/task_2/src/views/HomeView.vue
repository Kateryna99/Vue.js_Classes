<template>
  <div class="home-page">
    <div class="home-page__wrapper">
      <div class="home-page__block">
        <filters-container/>
      </div>
      <div class="home-page__block">
        <companies-list/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


import FiltersContainer from "@/components/FiltersContainer";
import {mapGetters} from "vuex";
import CompaniesList from "@/components/CompaniesList";
export default {
  name: "HomeView",
  components: {CompaniesList, FiltersContainer},
  computed: {
    ...mapGetters(['getCompanyTitleValue','getCompanyRateValue'])
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 50px;

    padding: 20px;
  }

  &__block {
  }
}
</style>
