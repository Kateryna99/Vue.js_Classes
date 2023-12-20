<template>
<main-master-page>
<div class="assignments">
  <div class="assignments__wrapper">
    <div class="assignments__header">
      <div class="assignments__block">
        <h3 class="assignments__title">Driver</h3>
        <h3 class="assignments__title">Bus number</h3>
      </div>
      <p v-if="!getAssignmentList" class="assignments__text">There is no assignments yet!</p>
      <div v-else v-for="item in getAssignmentList" :key="item.id" class="assignments__block">
        <p class="assignments__text">{{ getDriverById(item.driver).name }} - </p>
        <p class="assignments__text">{{getBusById(item.bus).busNumber}}</p>
        <span class="assignments__icon icon icon-trashcan" @click="deleteItem(item.id)"></span>
      </div>
    </div>
    <div class="assignments__main">
      <h3 class="assignments__title">New assignment</h3>
      <div class="assignments__block">
        <div class="assignments__item">
          <label for="" class="assignments__label">Driver</label>
        </div>
        <div class="assignments__item">
          <select v-model="data.driver" class="assignments__select">
            <option v-for="item in getFilteredDriversList" :key="item.id" :value="item.id">{{item.name}}</option>
          </select>
        </div>
      </div>
      <div class="assignments__block">
        <div class="assignments__item">
          <label for="" class="assignments__label">Bus</label>
        </div>
        <div class="assignments__item">
          <select v-model="data.bus" class="assignments__select">
            <option v-for="item in getItemsList" :key="item.id" :value="item.id">{{item.busNumber}}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="assignments__footer">
      <button class="assignments__button" :disabled="!isInputEmpty" @click="buttonAction">Add</button>
    </div>
  </div>
</div>
</main-master-page>
</template>

<script>
import MainMasterPage from "@/MasterPages/MainMasterPage";
import { mapGetters,mapActions} from 'vuex'
export default {
  name: "AssignmetsView",
  components: {MainMasterPage},
  data() {
    return {
      data: {}
    }
  },
  computed: {
    ...mapGetters('assignments',['getAssignmentList','getItemById']),
    ...mapGetters('drivers',['getFilteredDriversList','getDriverById']),
    ...mapGetters('busses',['getItemsList','getBusById']),

    isInputEmpty() {
      return this.data.driver && this.data.bus
    }
  },
  methods: {
    ...mapActions('drivers',['loadList']),
    ...mapActions('busses',['loadBussesList']),
    ...mapActions('assignments',['addItem','loadAssignmentsList','deleteItem']),

    buttonAction() {
      this.addItem({
        ...this.data
      })
      this.data={}
    },
  },
  created() {
    this.loadList()
    this.loadBussesList()
    this.loadAssignmentsList()
  }
}
</script>

<style lang="scss" scoped>
.assignments {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__block {
    display: flex;
    gap: 100px;
  }

  &__title {
    font-size: 25px;
    font-weight: bold;
  }

  &__text {
    font-size: 20px;
    letter-spacing: 2px;
  }

  &__icon {
    cursor: pointer;
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__item {
  }

  &__label {

  }

  &__select {
    border: 2px solid black;
    width: 100px;
  }

  &__footer {
  }

  &__button {
    padding: 5px 20px;
    border: 2px solid black;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
}

.icon {
}

.icon-trashcan {
}
</style>