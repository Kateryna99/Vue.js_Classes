<template>
<div class="dance-couple">
  <div class="dance-couple__wrapper">
    <div class="dance-couple__block">
      <dancers-container/>
    </div>
    <div class="dance-couple__block">
      <div class="dance-couple__item">
        <h3 class="dance-couple__title">Chosen Couples</h3>
      </div>
      <div class="dance-couple__item dance-couple__item--border">
      <ul class="dance-couple__list">
          <li v-for="(item,index) in getSelectedCouples" :key="item.id" class="dance-couple__list-item">{{index+1}}. {{item.boy.name}} -- {{item.girl.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>


import DancersContainer from "@/components/DanceCouple/DancersContainer";
import {mapActions,mapGetters} from "vuex";
export default {
  name: "DanceCouple",
  components: {DancersContainer},
computed: {
  ...mapGetters(['getSelectedCouples'])
},
methods: {
  ...mapActions(['setData']),

},
  created() {
    this.setData()
  }

}
</script>

<style lang="scss" scoped>
.dance-couple {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 50px;

    max-width: 600px;
    width: 100%;

    padding: 20px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__item {
    &--border {
      border: 2px solid black;
      min-height: 100px;
      padding: 10px;
    }
  }

  &__title {
    font-size: 30px;
    letter-spacing: 2px;
    font-weight: 700;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  &__list-item {
    font-size: 20px;
    letter-spacing: 1.5px;
  }
}
</style>