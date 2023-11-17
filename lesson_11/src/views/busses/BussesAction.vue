<template>
    <div class='data'>
        <div class='data__wrapper'>
            <div class='data__block'>
                <div class='data__item'>
                    <label class='data__label'>
                        Bus Register Number:
                    </label>
                </div>
                <div class='data__item'>
                    <input v-model='bus.registerNumber' type='text' class='data__input'>
                </div>
            </div>
            <div class='data__block'>
                <div class='data__item'>
                    <label class='data__label'>Experience:</label>
                </div>
                <div class='data__item'>
                    <input v-model='bus.placesAmount' type='number' class='data__input'>
                </div>
            </div>
            <div class='data__block'>
                <button v-if='getBus' class='data__button' @click='editBusInfo(bus)'>Edit</button>
                <button v-else class='data__button' @click='addNewBus(bus)'>Add</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name: 'BussesAction',
    data(){
        return {
            bus:{}
        }
    },
    computed:{
        ...mapGetters('busses',['getBusByID']),

        getBus(){
            return this.$route.params.busId
        }
    },
    methods:{
        ...mapActions('busses',['editBus','addBus']),
        editBusInfo(bus){
            this.editBus(bus)
            this.$router.push({name:'busses'})
        },
        addNewBus(bus){
            this.addBus(bus)
            this.$router.push({name:'busses'})
        }

    },
    created(){
        if(this.getBus){
            this.bus = this.getBusByID(this.getBus)
        }
    }
}
</script>

<style scoped>

</style>