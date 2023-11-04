<template>
<div class="data-system">
  <div class="data-system__wrapper">
    <div class="data-system__item">
      <label class="data-system__label">Categories
        <select v-model="studentCategoryValue">
          <option v-for="item in studentsCategoryList" :key="item.id" :value="item">{{item.title}}</option>
        </select>
      </label>
    </div>
  </div>
</div>
</template>

<script>
import {studentsCategoryList} from "@/constants/scoreSytem";
import {mapGetters,mapActions} from "vuex";

export default {
  name: "CategorySystemList",

  data() {
    return {
      studentsCategoryList,
    }
  },
  computed: {
    ...mapGetters(['getStudentCategory']),
    studentCategoryValue: {
      get() {
        return this.getStudentCategory
      },
      set(value) {
        this.setStudentCategory(value)
      }
    }
  },
  methods: {
    ...mapActions(['setStudentCategory']),
  },
}
</script>

<style lang="scss" scoped>
.data-system{
  &__label{
    font-size: 25px;
  }
}
</style>