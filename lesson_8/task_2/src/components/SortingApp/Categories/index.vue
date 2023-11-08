<template>
    <div class='categories'>
        <div>{{getVehicleTypeValue}}{{getVehicleBodyType}}{{getVehicleModelType}}{{getVehicleBrandType}}{{getYearFrom}}{{getYearTo}}</div>
        <div class='categories__wrapper'>
            <div class='categories__block'>
                <category-select v-model='vehicleTypeValue' title='Vehicle type' :data-arr='vehicleType' />
            </div>
            <div class='categories__block'>
                <category-check-box v-model='vehicleBodyTypeValue' :car-body-arr='vehicleBodyType' />
            </div>
            <div class='categories__block'>
                <category-select v-model='vehicleModelType' :data-arr='vehicleModel' title='Model' />
            </div>
            <div class='categories__block'>
                <category-select v-model='vehicleBrandTypeValue' :data-arr='vehicleBrandType' title='Brand' />
            </div>
            <div class='categories__block'>
                <category-year v-model:year-from='yearFrom' v-model:year-to='yearTo' :year-arr='yearData' />
            </div>
        </div>

    </div>
</template>

<script>
import CategorySelect from '@/components/SortingApp/Categories/CategorySelect'
import { vehicleType, vehicleBodyType, vehicleModel, vehicleBrandType, yearData } from '@/constants/data'
import CategoryCheckBox from '@/components/SortingApp/Categories/CategoryCheckBox'
import CategoryYear from '@/components/SortingApp/Categories/CategoryYear'
import { mapActions,mapGetters } from 'vuex'

export default {
    name: 'CategoriesContainer',
    components: { CategoryYear, CategoryCheckBox, CategorySelect },
    data() {
        return {
            vehicleType,
            vehicleBodyType,
            vehicleModel,
            vehicleBrandType,
            yearData,
            /*vehicleTypeValue:null,
            vehicleBodyTypeValue:[],
            vehicleModelType:null,
            vehicleBrandTypeValue:null,
            yearFrom:null,
            yearTo:null,*/
        }
    },
    computed: {
      ...mapGetters(['getVehicleTypeValue','getVehicleBodyType','getVehicleModelType','getVehicleBrandType','getYearFrom','getYearTo']),
        vehicleTypeValue:{
            get(){
                return this.getVehicleTypeValue
            },
            set(value){
                this.setVehicleTypeValue(value)
            }
        },
        vehicleBodyTypeValue:{
            get(){
                return this.getVehicleBodyType
            },
            set(value){
                this.setVehicleBodyTypeValue(value)
            }
        },
        vehicleModelType:{
            get(){
                return this.getVehicleModelType
            },
            set(value){
                this.setVehicleModelType(value)
            }
        },
        vehicleBrandTypeValue:{
            get(){
                return this.getVehicleBrandType
            },
            set(value){
                this.setVehicleBrandTypeValue(value)
            },
        },
        yearFrom:{
            get(){
                return this.getYearFrom
            },
            set(value){
                this.setYearFrom(value)
            }
        },
        yearTo:{
            get(){
                return this.getYearTo
            },
            set(value){
                this.setYearTo(value)
            }
        }
    },
    methods: {
        ...mapActions(['setVehicleTypeValue', 'setVehicleBodyTypeValue', 'setVehicleModelType', 'setVehicleBrandTypeValue','setYearFrom','setYearTo'])
    }
}
</script>

<style lang='scss' scoped>
.categories {
    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &__block {
    }
}
</style>