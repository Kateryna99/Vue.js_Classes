<template>
<div class='data'>
    <div class='data__wrapper'>
        <div class='data__header'>
            <h2 class='data__title'>Our busses</h2>
        </div>
        <div class='data__main data-list'>
            <div class='data-list__wrapper'>
                <div class='data-list__block data-list__block--row'>
                    <h3 class='data-list__block__title'>Bus Register Number</h3>
                    <h3 class='data-list__block__title'>Places Amount</h3>
                </div>
                <div class='data-list__block'>
                    <div v-for='item in getBussesList' :key='item.id' class='data-list__item'>
                        <p class='data-list__text'>{{item.registerNumber}}</p>
                        <p class='data-list__text'>{{item.placesAmount}}</p>
                        <button class='data-list__button' @click='editBus(item.id)'>Edit</button>
                        <button class='data-list__button' @click='deleteBus(item.id)'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <div class='data__footer'>
            <button class='data__button' @click='addBus'>Add a bus</button>
        </div>
    </div>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name: 'BussesView',
    computed: {
        ...mapGetters('busses',['getBussesList'])
    },
    methods: {
        ...mapActions('busses',['deleteBus']),

        editBus(id){
            this.$router.push({
                name: 'bus',
                params: {
                    busId: id
                }
            })
        },
        addBus(){
            this.$router.push({
                name: 'bus',
            })
        }
    },
    /*created() {
        this.setBussesList()
    }*/
}
</script>

<style scoped>

</style>