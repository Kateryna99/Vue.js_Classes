<template>
<card-container :card-data="cardData" />
</template>

<script>


import CardContainer from "@/components/cardContainer";
import {raspberryList} from "@/constants/raspberry_data";
export default {
  name: 'App',
  components: {
    CardContainer

  },
  data() {
    return {
      cardData: raspberryList
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
