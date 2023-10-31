<template>
  <div class="task">
    <div class="task__container">
      <data-item @focusout="inputAction"  v-model.check="userEmail" />
    </div>
  </div>

</template>

<script>
import DataItem from "@/components/task_3/DataItem";
export default {
  name: "dataContainer",
  components: {DataItem},
  data(){
    return{
      userEmail:null,
    }
  },
  methods:{
    inputAction(){
      if(this.userEmail)
        if(!this.userEmail.includes('@inv.mn.edu')){
          this.userEmail = this.userEmail.replace(/(\w+)/,'$1@inv.mn.edu')
        }

    }
  }
}
</script>

<style scoped>

</style>