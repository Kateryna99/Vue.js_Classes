<template>
  <div class="interview">
    <div class="interview__wrapper interview__wrapper--row">
      <div class="interview__block interview__block--row">
        <label class="interview__label">Worker</label>
        <select v-model="interview.worker" class="interview__select">
          <option v-for="item in getFilteredWorkersListByPosition(interview.candidate)" :key="item.id" :value="item.id">
            {{ item.name }}---{{ getPositionByID(item.positionId) }}
          </option>
        </select>
      </div>
      <div class="interview__block interview__block--row">
        <label class="interview__label">Candidate</label>
        <select v-model="interview.candidate" class="interview__select">
          <option v-for="item in getFilteredCandidatesListByPosition(interview.worker)" :key="item.id" :value="item.id">
            {{ item.name }}---{{ getPositionByID(item.positionId) }}
          </option>
        </select>
      </div>
      <div class="interview__block interview__block--row">
        <label class="interview__label">Day</label>
        <select v-model="interview.day" class="interview__select">
          <option v-for="item in getWeekDays" :key="item.id" :value="item.id">{{ item.name }}</option>
        </select>
      </div>
    </div>
    <div :disabled="!isFormEmpty" :class="{'action__button--disabled':!isFormEmpty}" class="action action__button"
         @click="addInterview(interview)">Add
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "InterviewComponent",
  data() {
    return {
      interview: {}
    }
  },
  computed: {
    ...mapGetters('workers', ['getFilteredWorkersList', 'getPositionByID',]),
    ...mapGetters('candidates', ['getFilteredList']),
    ...mapGetters('interviews', ['getWeekDays', 'getInterviewData', 'getFilteredWorkersListByPosition', 'getFilteredCandidatesListByPosition']),

    isFormEmpty() {
      return this.interview.worker && this.interview.candidate && this.interview.day
    }
  },
  methods: {
    ...mapActions('interviews', ['updateInterviewData', 'addNewInterview']),

    addInterview(interview) {
      this.addNewInterview(interview)
      this.interview = {}
    }
  },
  watch: {
    interview: {
      handler(newValue) {
        this.updateInterviewData(newValue)
      },
      deep: true
    }
  },
}
</script>

<style scoped>

</style>