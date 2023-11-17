<template>
    <div class='data'>
        <div class='data__wrapper'>
            <div class='data__block'>
                <div class='data__item'>
                    <label class='data__label'>
                        Full name:
                    </label>
                </div>
                <div class='data__item'>
                    <input v-model='driver.driverName' type='text' class='data__input'>
                </div>
            </div>
            <div class='data__block'>
                <div class='data__item'>
                    <label class='data__label'>Experience:</label>
                </div>
                <div class='data__item'>
                    <input v-model='driver.experience' type='number' class='data__input'>
                </div>
            </div>
            <div class='data__block'>
                <button v-if='getDriver' class='data__button' @click='editDriverInfo(driver)'>Edit</button>
                <button v-else class='data__button' @click='addNewDriver(driver)'>Add</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'DriversActions',
    data() {
        return {
            driver: {}
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriverByID']),

        getDriver() {
            return this.$route.params.driverId
        }
    },
    methods: {
        ...mapActions('drivers', ['editDriver', 'addDriver']),

        editDriverInfo(driver) {
            this.editDriver(driver)

            this.$router.push({
                name: 'drivers'
            })
        },
        addNewDriver(driver) {
            this.addDriver(driver)

            this.$router.push({
                name: 'drivers'
            })
        }
    },
    /*created() {
        if (this.getDriver) {
            this.driver = this.getDriverByID(this.getDriver)
        }
    }*/
}
</script>

<style scoped>

</style>