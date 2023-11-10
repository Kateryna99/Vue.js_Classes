<template>
  <div class="company">
    <div class="company__wrapper">
      <div class="company__item">
        <label for="" class="company__label">Title:</label>
          <input v-model="company.title" type="text" class="company__input">

      </div>
      <div class="company__item">
        <label for="" class="company__label">Rate:</label>
          <input v-model="company.rate" type="number" class="company__input">

      </div>
      <div class="company__item">
        <label for="" class="company__label">Year:</label>
          <input v-model="company.year" type="number" class="company__input">

      </div>
      <div class="company__item">
        <label for="" class="company__label">Owner:</label>
          <input v-model="company.owner" type="text" class="company__input">

      </div>
      <div class="company__item">
        <button v-if="getCompany" @click="editCompany(company)" class="company__button">Edit</button>
        <button v-else @click="createCompany(company)" class="company__button">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CompanyActions",
  data() {
    return {
      company: {}
    }
  },
  computed: {
    ...mapGetters(['getCompanyByID']),

    getCompany() {
      return this.$route.params.companyID
    },
  },
  methods: {
    ...mapActions(['getEditCompany','createNewCompany']),

    editCompany(company){
      this.$router.push({
        name: 'home',
      })
      this.getEditCompany(company)
    },
    createCompany(company){
      this.$router.push({
        name: 'home',
      })
      this.createNewCompany(company)
    }

  },
  created() {
    if (this.getCompany){
      this.company = this.getCompanyByID(this.getCompany)
    }
  }
}
</script>

<style lang="scss" scoped>
.company {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__label {
    max-width: 50px;
    width: 100%;
  }

  &__input {
    padding: 5px 10px;
    max-width: 150px;
    width: 100%;
  }

  &__button {
    border: 2px solid black;
    padding: 7px 15px;
  }
}
</style>