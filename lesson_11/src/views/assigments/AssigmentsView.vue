<template>
<div class='data'>
  <div class='data__wrapper'>
      <div class='data__header'>
          <h3 class='data__title'>Assignments</h3>
      </div>
      <div class='data__main data-assignment'>
          <div class='data-assignment__wrapper'>
              <div class='data-assignment__block data-assignment__block--row'>
                  <h3 class='data-assignment__title'>Driver</h3>
                  <h3 class='data-assignment__title'>Bus Register Number</h3>
              </div>
              <div class='data-assignment__block'>
                  <div v-for='item in getAssignmentsList' :key='item.id' class='data-assignment__item'>
                      <p class='data-assignment__text'>{{item.driver}}</p>
                      <p class='data-assignment__text'>---</p>
                      <p class='data-assignment__text'>{{item.bus}}</p>
                      <button class='data-assignment__button' @click='deleteAssignment(item.id)'>Delete</button>
                  </div>
              </div>
          </div>
      </div>
      <div class='data__footer'>
          <div class='data__block'>
              <h3 class='data__title'>New Assignment</h3>
          </div>
          <div class='data__block'>
              <div class='data-assignment__container'>
                  <div class='data-assignment__block'>
                      <div class='data-assignment__item'>
                          <label class='data-assignment__label'>Driver:</label>
                      </div>
                      <div class='data-assignment__item'>
                          <select v-model='assignment.driver' class='data-assignment__select' name='driver'>
                              <option  v-for='item in getDriversList' :key='item.id' :value='item.driverName' class='data-assignment__option'>{{item.driverName}}</option>
                          </select>
                      </div>
                  </div>
                  <div class='data-assignment__block'>
                      <div class='data-assignment__item'>
                          <label class='data-assignment__label'>Bus:</label>
                      </div>
                      <div class='data-assignment__item'>
                          <select v-model='assignment.bus' class='data-assignment__select' name='driver'>
                              <option  v-for='item in getBussesList' :key='item.id' :value='item.registerNumber' class='data-assignment__option'>{{item.registerNumber}}</option>
                          </select>
                      </div>
                  </div>
              </div>
          </div>
          <div class='data__block'>
              <button class='data__button' @click='addAssignment(assignment)'>Add</button>
          </div>
      </div>
  </div>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name: 'AssignmentsView',
    data() {
        return {
          assignment: {},
        }
    },
    computed: {
        ...mapGetters('assignments',['getAssignmentsList','getDriversList','getBussesList'])
    },
    methods: {
        ...mapActions('assignments',['deleteAssignment','addAssignment']),
    },
    /*watch: {
        assignment: {
            handler(newValue) {
                this.setAssignmentsObj(newValue)
            },
            deep: true,
        },
    }*/
}
</script>

<style lang='scss' scoped>

.data-assignment {
    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__block {
        display: flex;
        flex-direction: column;
        gap: 15px;
        &--row {
            flex-direction: row;
            gap: 50px;
        }
    }

    &__title {
        font-size: 20px;
    }

    &__item {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    &__text {
    }

    &__button {
        padding: 5px 15px;
        border: 2px solid black;
    }

    &__container {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &__label {
      width: 60px;
        font-size: 20px;
    }

    &__select {
        border: 2px solid black;
        width: 200px;
        padding: 5px;
    }

    &__option {
    }
}
</style>