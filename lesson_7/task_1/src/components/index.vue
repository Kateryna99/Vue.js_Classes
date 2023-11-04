<template>
<div class="score-system">
  <div class="score-system__wrapper">
    <div class="score-system__block">
      <students-list-container :students-list="filteredStudentsList"/>
    </div>
    <div class="score-system__block">
      <score-system-container v-model="scoreSystemValue"/>
    </div>
    <div class="score-system__block">
      <category-system-list/>
    </div>
  </div>
</div>
</template>

<script>

import StudentsListContainer from "@/components/StudentsList";
import {mapGetters,mapActions} from "vuex";
import ScoreSystemContainer from "@/components/ScoreSystem";
import CategorySystemList from "@/components/Category/CategorySystemList";



export default {
  name: "ScoreJournal",
  components: {CategorySystemList, ScoreSystemContainer,StudentsListContainer},
  data() {
    return {
      scoreSystemValue: null,
    }
  },
  computed: {
    ...mapGetters(['getStudentsListByScoreCategory','getStudentsListByCategory','getStudentCategory']),

    filteredStudentsList() {
      if(this.scoreSystemValue)
        return this.getStudentsListByScoreCategory(this.scoreSystemValue)
        else
        return this.getStudentsListByCategory
    }
  },
  methods: {
    ...mapActions(['setStudentList']),
  },
  created() {
      this.setStudentList()
  }
}
</script>

<style lang="scss" scoped>
.score-system {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    gap: 30px;
    padding: 25px;
  }

  &__block {
  }
}
</style>