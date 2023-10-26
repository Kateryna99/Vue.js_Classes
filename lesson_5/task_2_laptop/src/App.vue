<template>
<laptop-container :laptop-data="laptopData" />
</template>

<script>


import LaptopContainer from "@/components/laptopContainer";
import {notebooksList} from "@/constants/data_laptops";
export default {
  name: 'App',
  components: {
    LaptopContainer,
  },
  data() {
    return {
      laptopData: notebooksList
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
