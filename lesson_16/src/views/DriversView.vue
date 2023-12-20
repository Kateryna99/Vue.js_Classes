<template>
<main-master-page>
<div class="data">
  <div class="data__wrapper">
    <div class="data__header data__header--row">
      <div class="data__block">
        <h3 class="data__title">Our drivers</h3>
      </div>
      <div class="data__block filter">
        <div class="filter__wrapper">
          <div class="filter__element">
            <div class="filter__block">
              <h3 class="filter__title">Filters:</h3>
            </div>
            <div class="filter__block">
              <div class="filter__item">
                <label class="filter__label">Name</label>
              </div>
              <div class="filter__item">
                <input v-model="driver.name"  type="text" placeholder="Enter driver's name" class="filter__input">
              </div>
            </div>
          </div>
          <div class="filter__element">
            <div class="filter__block">
              <h3 class="filter__title">Experience:</h3>
            </div>
            <div class="filter__block">
              <div class="filter__item">
                <label class="filter__label">from</label>
              </div>
              <div class="filter__item">
                <input v-model="driver.from"  type="number" class="filter__input">
              </div>
              <div class="filter__item">
                <label class="filter__label">to</label>
              </div>
              <div class="filter__item">
                <input v-model="driver.to"  type="number" class="filter__input">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="data__main">
      <items-component>
        <template #header>
            <h3 class="data__title">Name</h3>
          <h3 class="data__title">Experience</h3>
        </template>
        <template #main>
          <div v-for="item in getFilteredDriversList " :key="item.id" class="data__list">
            <div class="data__block">
              <p class="data__text">{{item.name}}</p>
            </div>
            <div class="data__block data__block--row">
              <div class="data__item">
                <p class="data__text">{{item.experience}}</p>
              </div>
              <div class="data__item">
                 <span class="data__icon icon icon-edit-pencil" @click="editDriver(item.id)"></span>
              </div>
              <div class="data__item">
                <span class="data__icon icon icon-trashcan" @click="deleteDriver(item.id)"></span>
              </div>
            </div>
          </div>
        </template>
      </items-component>
    </div>
  </div>
</div>
</main-master-page>
</template>

<script>
import MainMasterPage from "@/MasterPages/MainMasterPage";
import ItemsComponent from "@/components/ItemsComponent";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "DriversView",
  components: {ItemsComponent, MainMasterPage},
  data() {
    return {
      driver: {}
    }
  },
  computed: {
    ...mapGetters('drivers',['getFilteredDriversList'])
  },
  methods: {
    ...mapActions('drivers',['loadList','deleteItem','setFilterObj']),
    ...mapActions('assignments',['deleteAssignmentByDriverId']),
    editDriver(id) {
      this.$router.push({
        name: 'product-action',
        params:{
          itemID: id,
          category: 'drivers',
        } })
    },
    deleteDriver(id) {
      this.deleteItem(id)
      this.deleteAssignmentByDriverId(id)
    }
  },
  watch: {
    driver: {
      handler(newValue) {
        this.setFilterObj(newValue)
      },
      deep: true
    }
  },
  created() {
    this.loadList()
  }
}
</script>

<style scoped>

</style>