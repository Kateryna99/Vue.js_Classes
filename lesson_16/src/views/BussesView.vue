<template>
<main-master-page>
  <div class="data">
    <div class="data__wrapper">
      <div class="data__header">
        <div class="data__block">
          <h3 class="data__title">Our Busses</h3>
        </div>
      </div>
      <div class="data__main">
        <items-component>
          <template #header>
            <h3 class="data__title">Bus Number</h3>
            <h3 class="data__title">Places Amount</h3>
          </template>
          <template #main>
            <div v-for="item in getItemsList " :key="item.id" class="data__list">
              <div class="data__block">
                <p class="data__text">{{item.busNumber}}</p>
              </div>
              <div class="data__block data__block--row">
                <div class="data__item">
                  <p class="data__text">{{item.placeAmount}}</p>
                </div>
                <div class="data__item">
                  <span class="data__icon icon icon-edit-pencil" @click="editDriver(item.id)"></span>
                </div>
                <div class="data__item">
                  <span class="data__icon icon icon-trashcan" @click="deleteDriver(item.id)"></span>
                </div>
              </div>
            </div>
          </template>
        </items-component>
      </div>
    </div>
  </div>
</main-master-page>
</template>

<script>
import MainMasterPage from "@/MasterPages/MainMasterPage";
import {mapGetters,mapActions} from "vuex";
import ItemsComponent from "@/components/ItemsComponent";

export default {
  name: "BussesView",
  components: {ItemsComponent, MainMasterPage},
  computed: {
    ...mapGetters('busses',['getItemsList'])
  },
  methods: {
    ...mapActions('busses',['loadBussesList','deleteItem']),
    ...mapActions('assignments',['deleteAssignmentByBusId']),
    editDriver(id) {
      this.$router.push({
        name: 'product-action',
        params:{
          itemID: id,
          category: 'busses',
        }
      })
    },
    deleteDriver(id) {
      this.deleteItem(id)
      this.deleteAssignmentByBusId(id)
    }
  },
  created() {
    this.loadBussesList()
  }
}
</script>

<style scoped>

</style>