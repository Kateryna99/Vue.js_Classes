<template>
<div class="contacts">
  <div class="contacts__wrapper">
    <contacts-form @user-contact="userContact"/>
    <contacts-add @save-contact= "saveContact"/>
    <contacts-list v-for="item in contactsData" :key="item.activity_score" :contactData="item" />
  </div>
</div>
</template>

<script>

import ContactsForm from "@/components/contactsForm";
import ContactsAdd from "@/components/contactsAdd";
import ContactsList from "@/components/contactsList";
export default {
  name: "contactContainer",
  components: {ContactsList, ContactsAdd, ContactsForm},
  props: {
    contactsData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    userContact(contact){
      console.log(contact)
      return this.contactsData.filter(item=>item.email.includes('contact'))
    }
  },
  methods: {
    saveContact(contactData) {
      this.$emit('saveContact', contactData)
    }
  },
}
</script>

<style scoped>

</style>