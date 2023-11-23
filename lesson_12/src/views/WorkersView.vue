<template>
<div class="company">
  <div class="company__wrapper">
    <div class="company__block">
      <filter-container/>
    </div>
    <div class="company__block">
      <persons-container :data-arr="getFilteredWorkersList" @deleteItem="deleteWorkerFromList"/>
    </div>
    <div class="company__block">
      <button @click="addWorker" class="company__button">Add Worker</button>
    </div>
  </div>
</div>
</template>

<script>
import FilterContainer from "@/components/FilterContainer";
import PersonsContainer from "@/components/PersonsContainer";
import {mapGetters,mapActions} from "vuex";
export default {
  name: "WorkersView",
  components: {PersonsContainer, FilterContainer},
  computed: {
    ...mapGetters('workers',['getFilteredWorkersList'])
  },
  methods: {
    ...mapActions('workers',['deleteWorker']),

    deleteWorkerFromList(id){
      this.deleteWorker(id)
    },
    addWorker(){
      this.$router.push({
        name: 'edit-page',
        params: {
          category: 'worker'
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>

</style>