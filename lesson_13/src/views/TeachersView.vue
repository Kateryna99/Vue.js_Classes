<template>
  <div class="teachers">
    <div class="teachers__wrapper">
      <div class="teachers__block">
        <div v-for="(lesson,index) in getLessonsList" :key="index" class="teachers__item">
          <label class="teachers__label">{{ getLessonByID(lesson) }}</label>
          <select v-model="educationSetup[index].teacherId" class="teachers__select">
            <option v-for="teacher in getTeachersList" :key="teacher.id" :value="teacher.id" class="teachers__option">
              {{ teacher.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="teachers__block">
        <p v-if="message" class="teachers__text">{{ message }}</p>
        <div class="school__button" @click="createEducation">Create education</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TeachersView",
  data() {
    return {
      educationSetup: [],
      message: null
    }
  },
  computed: {
    ...mapGetters(['getLessonByID', 'getTeachersList']),
    getLessonsList() {
      return this.$route.params.lessonsIDList
    }
  },
  methods: {

    createEducation() {
      const uniqueTeachers = new Set(this.educationSetup.map(item => item.teacherId));
      if (uniqueTeachers.size !== this.educationSetup.length) {
        this.message = 'Choose unique teacher for each classes!';
        return;
      }

      if (!this.educationSetup.length) {
        this.$router.push({
          name: 'page-not-found'
        })
      } else {
        this.$router.push({
          name: 'education',
          params: {
            educationSetUp: JSON.stringify(this.educationSetup)
          }
        })
      }
    },
    initializeTeachers() {
      return this.getLessonsList.map(lessonId => ({
        id: new Date().getTime(),
        teacherId: null,
        lessonId
      }))

    },
  },
  created() {
    this.educationSetup = this.initializeTeachers()
  }

}
</script>

<style lang="scss" scoped>
.teachers {
  &__wrapper {
    max-width: 500px;
    width: 100%;
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__label {
    font-size: 22px;
  }

  &__item {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    gap: 15px;
  }

  &__select {
    border: 2px solid black;
  }

  &__option {
  }
  &__text {
    color: red;
  }
}

</style>