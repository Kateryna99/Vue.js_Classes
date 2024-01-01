<template>
    <main-master-page>
        <div class='data'>
            <div class='data__wrapper'>
                <div class='data__header'>
                    <h3 class='data__title'>Friends List</h3>
                </div>
                <div class='data__main'>
                    <div v-for='item in getGiftsList' :key='item.id' class='data__block'>
                        <div class='data__item'>
                            <p class='data__text'>{{ item.title }}</p>
                        </div>
                        <div class='data__item'>
                            <button class='data__button' @click='deleteItem(item.id)'>Delete</button>
                        </div>
                    </div>
                </div>
                <div class='data__footer'>
                    <div class='data__block'>
                        <div class='data__item'>
                            <label  class='data__label'>New gift:</label>
                        </div>
                        <div class='data__item'>
                            <input v-model='giftName.title' type='text' class='data__input'>
                        </div>
                    </div>
                    <div class='data__block'>
                        <button class='data__button data__button--green' :disabled='!isInputEmpty' @click='addGift' >Add</button>
                    </div>
                </div>
            </div>
        </div>
    </main-master-page>
</template>

<script>
import MainMasterPage from '@/MasterPages/MainMasterPages'
import {mapState,mapActions} from 'pinia'
import {useGiftsStore} from '@/store/modules/gifts'
export default {
    name: 'GiftsPage',
    components: { MainMasterPage },
    data() {
        return {
            giftName: {
                title:'',
            }
        }
    },
    computed: {
        ...mapState(useGiftsStore,['getGiftsList']),

        isInputEmpty(){
            return this.giftName
        }
    },
    methods: {
        ...mapActions(useGiftsStore,['loadList','addItem','deleteItem']),

        async addGift() {
            try {
                await this.addItem(this.giftName);
            } catch (error) {
                console.log(error);
            }finally {
                this.giftName.title = ''
            }
        }
    },
    created() {
        this.loadList()
    }

}
</script>

<style scoped>

</style>