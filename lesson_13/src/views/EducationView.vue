<template>
  <div class="school">
    <div class="school__wrapper">
      <div class="school__block">
        <h3 class="school__title">Education Plan</h3>
      </div>
      <div class="school__block">
        <div v-for="item in getEducationList" :key="item.id">
          <p>{{getTeacherByID(item.teacherId)}} --- {{getLessonByID(item.lessonId)}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "EducationView",
  computed: {
    ...mapGetters(['getLessonByID','getTeacherByID']),
    getEducationList() {
      return JSON.parse(this.$route.params.educationSetUp)
    }
  },
}
</script>

<style scoped>

</style>