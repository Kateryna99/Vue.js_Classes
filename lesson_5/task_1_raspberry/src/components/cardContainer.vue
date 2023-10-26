<template>
  <div class="card card__container">
    <card-item v-for="item in cardData" :key="item.id" :card="item"/>
  </div>

</template>

<script>
import CardItem from "@/components/cardItem";

export default {
  name: "cardContainer",
  components: {CardItem},
  props: {
    cardData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="css" scoped>
.card{

}
.card__container{
  display: flex;
  gap: 20px;
}
</style>