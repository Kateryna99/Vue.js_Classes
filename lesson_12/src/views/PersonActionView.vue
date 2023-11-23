<template>
  <div class="action">
    <div class="action__wrapper">
      <div class="action__block">
        <div class="action__item">
          <label class="action__label">Name:</label>
        </div>
        <div class="action__item">
          <input v-model="worker.name" type="text" class="action__input">
        </div>
      </div>
      <div class="action__block">
        <div class="action__item">
          <label class="action__label">Position:</label>
        </div>
        <div class="action__item">
          <input v-model="worker.positionId" type="text" class="action__input">
        </div>
      </div>
      <div class="action__block">
        <button @click="addPerson(worker)" class="action__button" :class="{'action__button--disabled':!isInputEmpty}" :disabled="!isInputEmpty">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "PersonActionView",
  data() {
    return {
      worker: {}
    }
  },
  computed:{
    getCategory(){
      return this.$route.params.category
    },
    isInputEmpty(){
      return this.worker.name && this.worker.positionId
    }
  },
  methods: {
    ...mapActions('workers',['addWorker']),
    ...mapActions('candidates',['addCandidate']),

    addPerson(worker){
      if(this.getCategory === 'worker'){
        this.addWorker(worker)
        this.$router.push(
          {
            name: 'workers',
          }
        )
      }else{
        this.addCandidate(worker)
        this.$router.push(
          {
            name: 'candidates',
          }
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>