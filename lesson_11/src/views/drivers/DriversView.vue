<template>
<div class='data'>
    <div class='data__wrapper'>
        <div class='data__header data-filter'>
            <div class='data-filter__block'>
                <h3 class='data-filter__title'>Filters:</h3>
            </div>
            <div class='data-filter__block'>
                <div class='data-filter__item'>
                    <label class='data-filter__label'>Full name</label>
                </div>
                <div class='data-filter__item'>
                    <input v-model='filter.driverName' type='text' class='data-filter__input'>
                </div>
            </div>
            <div class='data-filter__block'>
                <div class='data-filter__container'>
                    <h3 class='data-filter__title'>Experience:</h3>
                </div>
                <div class='data-filter__container'>
                    <div class='data-filter__item'>
                        <label class='data-filter__label'> from</label>
                    </div>
                    <div class='data-filter__item'>
                        <input v-model='filter.experienceFrom' type='number' class='data-filter__input'>
                    </div>
                </div>
                <div class='data-filter__container'>
                    <div class='data-filter__item'>
                        <label class='data-filter__label'> to</label>
                    </div>
                    <div class='data-filter__item'>
                        <input v-model='filter.experienceTo' type='number' class='data-filter__input'>
                    </div>
                </div>
            </div>
        </div>
        <div class='data__main data-list'>
            <div class='data-list__wrapper'>
                <div class='data-list__block data-list__block--row'>
                        <h3 class='data-list__title'>Name</h3>
                        <h3 class='data-list__title'>Experience</h3>
                </div>
                <div class='data-list__block'>
                    <div v-for='item in getFilteredDriversList' :key='item.id' class='data-list__item'>
                        <p class='data-list__text'>{{item.driverName}}</p>
                        <p class='data-list__text'>{{item.experience}} year</p>
                        <button  class='data-list__button' @click='editDriver(item.id)'>Edit</button>
                        <button  class='data-list__button' @click='deleteDriver(item.id)'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <div class='data__footer'>
            <button class='data__button' @click='addDriver'>Add a driver</button>
        </div>
    </div>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name: 'driversView',
    data() {
        return {
            filter: {}
        }
    },
    computed: {
        ...mapGetters('drivers',['getFilteredDriversList','getFilterObj'])
    },
    methods: {
        ...mapActions('drivers',['updateFilter','deleteDriver']),


        editDriver(id) {
           this.$router.push({
               name: 'driver',
               params: {
                   driverId: id,
               }
           })
        },
        addDriver() {
            this.$router.push({
                name: 'driver',
            })
        }
    },
    watch: {
        filter: {
            handler(newValue) {
                this.updateFilter(newValue)
            },
            deep: true,
        }
    },
    /*created() {
        this.setData()
    }*/
}
</script>

<style scoped>

</style>