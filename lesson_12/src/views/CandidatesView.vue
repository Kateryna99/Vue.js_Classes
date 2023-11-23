<template>
  <div class="company">
    <div class="company__wrapper">
      <div class="company__block">
        <filter-container/>
      </div>
      <div class="company__block">
       <persons-container :data-arr="getFilteredList" @deleteItem = "deleteCandidate"/>
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
  name: "CandidatsView",
  components: {PersonsContainer, FilterContainer},
  computed: {
    ...mapGetters('candidates',['getFilteredList'])
  },
  methods: {
    ...mapActions('candidates',['setData','deleteCandidateFromList']),

    addWorker(){
      this.$router.push({
        name: 'edit-page',
        params: {
          category: 'candidate'
        }
      })
    },
    deleteCandidate(id){
      this.deleteCandidateFromList(id)
    }
  },
}
</script>

<style scoped>

</style>