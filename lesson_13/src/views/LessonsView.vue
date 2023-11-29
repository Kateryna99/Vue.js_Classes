<template>
  <div class="school">
    <div class="school__wrapper">
      <div class="school__header">
        <h3 class="school__title">Choose lessons:</h3>
      </div>
      <div class="school__main">
        <div v-for="item in getLessonsList" :key="item.id" class="school__item">
          <label :for="item.title" class="school__label">{{ item.title }}</label>
          <input v-model="lessons" :value="item.id" :id="item.title" name="lessons" type="checkbox"
                 class="school__input" required>
        </div>
      </div>
      <div class="school__footer">
        <button class="school__button" :class="{'school__button--disabled':!isLessonChosen}"
                @click="sendToTeachersPage">Choose Teachers
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "LessonsView",
  data() {
    return {
      lessons: []
    }
  },
  computed: {
    ...mapGetters(['getLessonsList']),
    isLessonChosen() {
      return this.lessons.length
    }
  },
  methods: {
    ...mapActions(['setLessonsList']),

    sendToTeachersPage() {

      this.$router.push(
          {
            name: 'teachers',
            params: {lessonsIDList: this.lessons},
          })
    }
  },
}
</script>

<style scoped>

</style>