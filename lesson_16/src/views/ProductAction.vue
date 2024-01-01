<template>
  <main-master-page>
    <div class="product">
      <div class="product__wrapper">
        <div class="product__block">
          <div class="product__item">
            <label for="" class="product__label">Title:</label>
          </div>
          <div class="product__item">
            <input v-if="getRouterParamsCategory==='busses'" v-model="bus.busNumber" type="text" class="product__input">
            <input v-else v-model="driver.name" type="text" class="product__input">
          </div>
        </div>
        <div class="product__block">
          <div class="product__item">
            <label for="" class="product__label">Number:</label>
          </div>
          <div class="product__item">
            <input v-if="getRouterParamsCategory==='busses'" v-model="bus.placeAmount" type="number" class="product__input">
            <input v-else v-model="driver.experience" type="number" class="product__input">
          </div>
        </div>
        <div class="product__block">
          <button class="product__button" :disabled="!isInputEmpty"  @click="buttonAction">{{getButtonText}}</button>
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script>
import { mapActions,mapGetters} from 'vuex'
import MainMasterPage from "@/MasterPages/MainMasterPage";
export default {
  name: "ProductAction",
  components: {MainMasterPage},
  data() {
    return {
       driver: {},
       bus: {}
    }
  },
  computed: {
    ...mapGetters('drivers',['getDriverById','getFilteredDriversList']),
    ...mapGetters('busses',['getBusById','hasError']),

    getRouterParamsItem() {
      return this.$route.params.itemID
    },
    getRouterParamsCategory() {
      return this.$route.params.category
    },
    getButtonText() {
      return this.getRouterParamsItem ? 'Edit' : 'Add'
    },
    isInputEmpty() {
      if(this.getRouterParamsCategory === 'drivers')
        return this.driver.name && this.driver.experience
      else return this.bus.busNumber && this.bus.placeAmount
    }
  },
  methods: {
    ...mapActions('drivers',['addItem','updateItem','loadList']),
    ...mapActions('busses',['addBus','updateBus']),

    buttonAction() {
      if(this.getRouterParamsCategory ==='drivers') {
        console.log(this.driver)
        if(this.getRouterParamsItem){
          this.driver.id = this.getRouterParamsItem
          console.log(this.getRouterParamsItem)
          this.updateItem({itemId:this.driver.id,
            data:{
              name:this.driver.name,
              experience:this.driver.experience,
            }});
        }
        else this.addItem(this.driver);

        this.$router.push({
          name: 'drivers'
        })
    }else {
      if(this.getRouterParamsItem){
        this.bus.id = this.getRouterParamsItem
        this.updateBus({itemId:this.bus.id,
          data:{
            busNumber:this.bus.busNumber,
            placeAmount:this.bus.placeAmount,
          }
        });
      }
      else this.addBus(this.bus)

        this.$router.push({
          name: 'busses'
        })
      }
    }
  },
  created() {
    if(this.getRouterParamsItem){
      if(this.getRouterParamsCategory === 'drivers')
        this.driver = this.getDriverById(this.getRouterParamsItem)
     else this.bus = this.getBusById(this.getRouterParamsItem)
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  &__wrapper {
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__block {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__item {
  }

  &__label {
    font-size: 20px;
    font-weight: bold;
  }

  &__input {
    border: 2px solid black;
    padding: 5px 10px;
  }

  &__button {
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
}
</style>