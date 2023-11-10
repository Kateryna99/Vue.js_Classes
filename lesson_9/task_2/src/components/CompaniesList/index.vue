<template>
  <div class="data">
    <div class="data__wrapper">
      <div class="data__block">
        <h2 class="data__title">Companies List</h2>
      </div>
      <div class="data__block">
        <company-item v-for="item in getCompaniesList" :key="item.id" :company="item" />
      </div>
      <div class="data__block">
        <button @click="createCompany" class="data__button">Create Company</button>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyItem from "@/components/CompaniesList/companyItem";
import {mapGetters} from "vuex";
export default {
  name: "CompaniesList",
  components: {CompanyItem},
  data() {
    return {
      companiesList: []
    }
  },
  computed: {
    ...mapGetters(['getCompaniesList'])
  },
  methods: {
    createCompany() {
      this.$router.push(
        {
          name: 'company',
        }
      )
    }
  }
}
</script>

<style scoped>

</style>