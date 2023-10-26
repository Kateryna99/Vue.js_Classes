<template>
  <input  type="text" v-model="userContact">
</template>

<script>
export default {
  name: "contacts_form",
 // emits: ['update:userContact'],
  data() {
    return {
      userContact: null,
    }
  },
  computed: {
    /*saveData(){
      return this.$emit('update:userContact', this.userContact)
    }*/
  },
  methods: {
    /*sendData(){
      this.$emit('userContact', this.userContact)
    }*/
  },
  watch: {
    userContact(newValue) {
      {
        this.$emit('userContact', newValue)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.search-input{
  border-bottom: 1px solid black;
}
</style>