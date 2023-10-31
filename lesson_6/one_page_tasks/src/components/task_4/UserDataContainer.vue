<template>
  <div class="task">
    <div class="task__container">
      <user-data-item v-model:userAge.checkAge="age" v-model:userName.checkName="login"/>
    </div>
  </div>
</template>

<script>

import UserDataItem from "@/components/task_4/UserDataItem";
export default {
  name: "userDataContainer",
  components: {UserDataItem},
  data(){
    return {
      age:null,
      login:null,
    }
  }
}
</script>

<style scoped>

</style>