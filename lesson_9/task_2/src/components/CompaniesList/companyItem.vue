<template>
  <div class="company">
    <div class="company__wrapper">
      <div class="company__main">
        <div class="company__item">
          <p class="company__text">{{ company.title }}</p>
        </div>
        <div class="company__item">
          <p class="company__text">{{ company.rate }}</p>
        </div>
        <div class="company__item">
          <p class="company__text">{{ company.year }}</p>
        </div>
        <div class="company__item">
          <p class="company__text">{{ company.owner }}</p>
        </div>
      </div>
      <div class="company__item">
        <button @click="deleteCompanyByID(company.id)" class="company__button">Delete</button>
      </div>
      <div class="company__item">
        <button @click="editCompany(company.id)" class="company__button">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "companyItem",
  props: {
    company: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapActions(['deleteCompany']),

    deleteCompanyByID(id) {
      this.deleteCompany(id)
    },
    editCompany(id) {
      this.$router.push({
        name: 'company',
        params: {
          companyID: id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.company {
  &__wrapper {
    display: flex;
    align-items: center;
    gap: 20px;

    max-width: 400px;
  }
&__main{
  display: flex;
  gap: 20px;
  flex-grow: 1;
}
  &__item {
  }

  &__text {
  }

  &__button {
    padding: 7px 15px;
    border: 2px solid black;
  }
}
</style>