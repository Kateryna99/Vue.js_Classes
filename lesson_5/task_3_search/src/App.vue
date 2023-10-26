<template>
<contact-container :contacts-data="contactsData" @saveContact="saveContact" @userContact="userContact"/>
</template>

<script>


/*
ДОБРИЙ ДЕНЬ !
ТРИ ГОДИНИ НАМАГАЛАСЯ ЗРОЗУМІТИ ЧОМУ НЕ МОЖУ ПЕРЕДАТИ ДАНІ З ІНПУТА ЧЕРЕЗ WATCHER, А ВИЯВЛЯЄТЬСЯ , ЩЕ НЕ ДОШЛА ДО 6\ГО УРОКУ , ДЕ МИ РОЗГЛЯДАЛИ ЦЮ ТЕМУ, ТОМУ,БУДЬ ЛАСКА, ОЦІНЮЙТЕ ТІЛЬКИ ІНТЕРФЕЙС ТА ДОДАВАННЯ , ДЯКУЮ !!)))
* */

import ContactContainer from "@/components/contactContainer";
import {contacts} from "@/constants/contactsData.js";
export default {
  name: 'App',
  components: {
    ContactContainer

  },
  data() {
    return {
      contactsData: contacts
    }
  },
  methods: {
    saveContact(contact) {
      this.contactsData.push(contact)
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
