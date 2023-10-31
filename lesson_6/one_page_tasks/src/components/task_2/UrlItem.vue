<template>
<div class="user-info">
  <label>URL Path
    <input v-model="urlPath" class="user-info__data" :class="inputClass" type="text">
  </label>
</div>
</template>

<script>
//Задача 2. Розробити компонент (з підтримкою v-model), який дозволяє вводити шлях до файлу js (URL, що закінчується розширенням js). При заданні модифікатора checkPath відображати червоним фоном input, якщо шлях некоректний.
export default {
  name: "urlItem",
  props:{
    modelValue: {
      type: String,
      default: ''
    },
    modelModifiers:{
      default: () => ({})
    },
  },
  data(){
    return {
      inputClass: ''
    }
  },
  computed:{
    urlPath:{
      get(){
        return this.modelValue
      },
      set(value){
        if(this.modelModifiers.checkPath){
          if(value && !value.match(/\w{3,}\.js$/))
              this.inputClass = 'user-info__data--wrong'
          else this.inputClass = ''
        }

        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>