<template>
    <main-master-page>
        <div class='data'>
            <div class='data__wrapper'>
                <div class='data__header'>
                   <h3 class='data__title'>Friends List</h3>
                </div>
                <div class='data__main'>
                  <div v-for='item in getFriendsList' :key='item.id' class='data__block'>
                      <div class='data__item'>
                          <p class='data__text'>{{ item.name }}</p>
                      </div>
                      <div class='data__item'>
                          <button class='data__button' @click='deleteItem(item.id)'>Delete</button>
                      </div>
                  </div>
                </div>
                <div class='data__footer'>
                    <div class='data__block'>
                        <div class='data__item'>
                            <label  class='data__label'>New friend:</label>
                        </div>
                        <div class='data__item'>
                            <input v-model='friendName.name' type='text' class='data__input'>
                        </div>
                    </div>
                    <div class='data__block'>
                        <button class='data__button data__button--green' :disabled='!isInputEmpty' @click='addFriend' >Add</button>
                    </div>
                </div>
            </div>
        </div>
    </main-master-page>
</template>

<script>
import MainMasterPage from '@/MasterPages/MainMasterPages'
import {mapState,mapActions} from 'pinia'
import {useFriendsStore} from '@/store/modules/friends'
export default {
    name: 'FriendsPage',
    components: { MainMasterPage },
    data() {
        return {
            friendName: {
                name: '',
            }
        }
    },
    computed: {
        ...mapState(useFriendsStore,['getFriendsList']),

        isInputEmpty(){
            return this.friendName
        }
    },
    methods: {
        ...mapActions(useFriendsStore,['loadList','addItem','deleteItem']),

        async addFriend() {
            try {
                await this.addItem(this.friendName);
            } catch (error) {
                console.log(error);
            }finally {
                this.friendName.name = ''
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