<template>
<card-item v-model:cardNumber.digitDivider="cardNumber" v-model:expiryDate="expiryDate" v-model:secureCode="secureCode"/>
  <div>{{cardNumber}}--{{expiryDate}}--{{secureCode}}</div>
</template>

<script>
import CardItem from "@/components/task_6/CardItem";
export default {
  name: "cardContainer",
  components: {CardItem},
  data(){
    return {
      cardNumber: null,
      expiryDate: null,
      secureCode: null
    }
  }
}
</script>

<style scoped>

</style>