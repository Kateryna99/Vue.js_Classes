<template>
  <div class="user-info">
    <label>Your age<input class="user-info__data" :class="backgroundColor" v-model="userAge" type="number"></label>
    <p v-if="message">Incorrect age</p>
  </div>

</template>

<script>
//Задача 1. Розробити компонент для введення віку користувача (з підтримкою v-model). При заданні модифікатора check не допускати введення некоректного віку (вік не може бути більшим за 150). При заданні модифікатора setColor задавати фон (вік менше 10 – зелений, від 10 до 21 – жовтий, інакше – оранжевий).
export default {
  name: "userInfoItem",
  props: {
    modelValue:{
      type: Number,
      default: 0
    },
    modelModifiers:{
      default: () => ({})
    }
  },
  data(){
    return{
      message:false,
      backgroundColor:''
    }
  },
  computed:{
    userAge:{
      get(){
        return this.modelValue;
      },
      set(value){
        if(this.modelModifiers.check){
          if(value >150){
            this.backgroundColor = 'user-info__data--wrong';
            this.message = true;
            value = ''
          }else this.message = false;
        }
        if(this.modelModifiers.setColor){
          if(value){
            if(value <10)
              this.backgroundColor = 'user-info__data--green';
            else if(value <20)
              this.backgroundColor = 'user-info__data--yellow';
            else this.backgroundColor = 'user-info__data--orange';
          }

        }
        this.$emit('update:modelValue', value);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>