<template>
<div class="user-info">
  <label for=""> Your Name
    <input type="text" v-model="user" :class="nameClass" class="user-info__data"></label>
  <label> Your Age
    <input type="number" v-model="age" :class="ageClass" class="user-info__data"></label>
</div>
</template>

<script>
export default {
  name: "userDataItem",
  props: {
    userName: {
      type: String,
      default: ""
    },
    userNameModifiers: {
      default: () => ({})
    },
    userAge: {
      type: Number,
      default: 0
    },
    userAgeModifiers: {
      default: () => ({})
    }
  },
  data(){
    return {
      nameClass:'',
      ageClass :'',
    }
  },
  computed: {
    user:{
      get(){
        return this.userName
      },
      set(value){
        if(this.userNameModifiers.checkName){
          if(!value)
            this.nameClass = 'user-info__data--wrong'
          else this.nameClass = ''
        }
        this.$emit('update:userName', value)
      }
    },
    age:{
      get(){
        return this.userAge
      },
      set(value){
        if(this.userAgeModifiers.checkAge){
          if(value){
            if( value <18)
              this.ageClass = 'user-info__data--red'
            else this.ageClass = 'user-info__data--green'
          }

          this.$emit('update:userAge', value)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>