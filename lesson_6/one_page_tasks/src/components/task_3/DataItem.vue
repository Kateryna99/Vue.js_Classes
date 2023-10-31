<template>
<div class="user-info">
  <label for="">Your email
    <input   v-model="userEmail" class ='user-info__data' :class="inputClass" type="text">
  </label>
</div>
</template>

<script>
/*Задача 3. Розробити компонент (з підтримкою v-model), який дозволяє вводити e-mail з домену “edu” (приклад: ivan-hopko@inv.mn.edu). Частинка «@inv.mn.edu» додається автоматично (користувач не вводить її). При заданні модифікатора check відображати червоним фоном input, якщо некоректний.*/
export default {
  name: "dataItem",
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    modelModifiers: {
      default: () => ({}),
    }
  },
  data  (){
    return {
      inputClass: '',

    }
  },
  computed: {
    userEmail:{
      get(){
        return this.modelValue;
      },
      set(value){
        if(this.modelModifiers.check){
           if(value && !value.includes('@inv.mn.edu'))
            this.inputClass = 'user-info__data--wrong'
          else this.inputClass = ''
        }
        this.$emit('update:modelValue', value);
      }
    }
  },

}
</script>

<style lang="scss" scoped>
.user-info__data{
  &--wrong{
     outline: red;
    border-color: red;
   }
}
</style>