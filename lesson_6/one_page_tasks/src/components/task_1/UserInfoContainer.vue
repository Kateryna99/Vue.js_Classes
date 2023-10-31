<template>
  <div class="task task__container">
    <user-info-item v-model.check.setColor="userAge"/>
  </div>

</template>

<script>
import UserInfoItem from "@/components/task_1/UserInfoItem";
export default {
  name: "userInfoContainer",
  components: {UserInfoItem},
  data(){
    return{
      userAge:null
    }
  },
  computed:{

  }
}
</script>

<style lang="scss" scoped>

</style>