<template>
  <div class="filter__content">
    <div class="filter__wrapper">
      <div class="filter__block">
        <h2 class="filter__title">Supplier</h2>
      </div>
      <div class="filter__block">
        <div class="filter__item" v-for="item in suppliersArray" :key="item.id">
          <label class="filter__label" :for="item.type">{{item.name}}
          </label>
          <input class="filter__input" :class="checkBoxClass" :name="item.type" :value="item.name" v-model="supplier" type="checkbox">
        </div>
      </div>
    </div>
    <div class="filter__wrapper">
      <div class="filter__block">
        <h2 class="filter__title">Brands</h2>
      </div>
      <div class="filter__block">
        <div class="filter__item" v-for="item in brandsArray" :key="item.id">
          <label class="filter__label" :for="item.type">{{item.name}}
          </label>
          <input class="filter__input" :class="checkBoxClass" :value="item.name" :name="item.type"  v-model="brand" type="checkbox">
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "filterItem",
  props: {
    suppliersArray: {
      type: Array,
      required: true,
    },
    brandsArray:{
      type: Array,
      required: true,
    },
    supplierValue:{
      type: Array,
      default: ()=> []
    },
    supplierValueModifiers:{
      default: ()=> ({})
    } ,
    brandValue:{
      type: Array,
      default: ()=> []
    },
    brandValueModifiers:{
      default: ()=> ({})
    },
  },
  data(){
    return{
      checkBoxClass: '',
    }
  },
  computed:{
    supplier:{
      get(){
        return this.supplierValue
      },
      set(value){
        if(this.supplierValueModifiers.check){
          value.checked ? this.checkBoxClass = 'filter__input--checked' : this.checkBoxClass = ''
        }

        this.$emit('update:supplierValue', value)
      }
    },
    brand:{
      get(){
        return this.brandValue
      },
      set(value){
        if(this.supplierValueModifiers.check){
          value.checked ? this.checkBoxClass = 'filter__input--checked' : this.checkBoxClass = ''
        }

        this.$emit('update:brandValue', value)
      }
    },

    }
  }
</script>

<style lang="scss" scoped>

</style>