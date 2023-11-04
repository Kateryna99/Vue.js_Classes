<template>
<div class="student-list">
  <div class="student-list__wrapper">
    <div class="student-list__header">
      <h2 class="student-list__title">Student List</h2>
    </div>
    <div class="student-list__main">
      <student-item v-for="student in studentsList" :key="student.id" :student="student"/>
    </div>
  </div>
</div>
</template>

<script>

import StudentItem from "@/components/StudentsList/StudentList";
export default {
  name: "StudentsListContainer",
  components: {StudentItem},
  props: {
    studentsList: {
      type: Array,
      default: () => []
    }
  },

}
</script>

<style lang="scss" scoped>
.student-list {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__header {
  }

  &__title {
    font-size: 25px;
    letter-spacing: 0.5px;
  }

  &__main {
  }
}
</style>