<template>
  <div class="interview">
    <div class="interview__wrapper">
      <div class="interview__block interview__block--row">
        <h3 class="interview__title">
          Worker
        </h3>
        <h3 class="interview__title">
          Candidate
        </h3>
        <h3 class="interview__title">
          Day
        </h3>
      </div>
      <div class="interview__block">
        <div v-for="item in getChosenCouples" :key="item.id" class="interview__item">
          <p class="interview__text">{{getWorkerByID(item.worker)}}</p>
          <p class="interview__text">{{getCandidateByID(item.candidate)}}</p>
          <p class="interview__text">{{getDayByID(item.day)}}</p>
          <button @click="deleteInterview(item.id)" class="interview__button">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";
export default {
  name: "InterviewComponentList",
  computed: {
    ...mapGetters('interviews',['getChosenCouples','getWorkerByID','getCandidateByID','getDayByID'])
  },
  methods: {
    ...mapActions('interviews',['deleteInterview'])
  }
}
</script>

<style scoped>

</style>