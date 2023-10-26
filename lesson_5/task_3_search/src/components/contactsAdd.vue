<template>
<div @click="createContact" class="contact-create">
  <div class="contact-plus">{{message}}</div>
  <p class="contact-text">New contact</p>
</div>
  <div v-if="isDone" class="contact-form">
    <label class="contact__label">Name<input type="text" v-model="contact.first_name"></label>
    <label class="contact__label">Surname<input type="text" v-model="contact.last_name"></label>
    <label class="contact__label">Email<input type="email" v-model="contact.email"></label>
    <button class="contact__button" @click="saveContact">Save</button>
  </div>
</template>

<script>
export default {
  name: "contactsAdd",
  data() {
    return {
      isDone: false,
      message: '+',
      contact:{
        first_name: null,
        last_name: null,
        email: null,
      }
    }
  },
  methods: {
    createContact() {
      this.isDone = !this.isDone
      this.message = this.isDone ? '-' : '+'
    },
    saveContact() {
      this.$emit('saveContact', this.contact)
      this.contact = {
        first_name: null,
        last_name: null,
        email: null,
      }
    }
  }
}
</script>

<style lang="css"   scoped>
.contact-create {
  display: flex;
  gap: 15px;
  cursor: pointer;

  padding-bottom: 10px;
}

.contact-plus {
  color: #74b274;
  font-size: 30px;

  padding: 7px 15px;
  border: 1px solid black;
  border-radius: 50%;
}

.contact-text {
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
.contact__button{
  width: 100px;
}
.contact__label{
  display: flex;
  gap: 10px;
}
</style>