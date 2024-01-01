<template>
    <main-master-page>
        <div class='data'>
            <div class='data__wrapper'>
                <div class='data__header'>
                    <h3 class='data__title'>Gifts Distribution</h3>
                </div>
                <div v-if='getAssignmentsList.length > 0' class='data__main'>
                    <div v-for='item in getAssignmentsList' :key='item.id' class='data__block'>
                        <div class='data__item'>
                            <p class='data__text' >{{getFriendName(item.friend)}}</p>
                        </div>
                        <div class='data__item'>
                            <p class='data__text'>{{getGiftTitle(item.gift)}}</p>
                        </div>
                        <div class='data__item'>
                            <button class='data__button' @click='deleteItem(item.id)'>Delete</button>
                        </div>
                    </div>
                </div>
                <div v-else class='data__message'>
                    <p class='data__text'>There is no assigned gift</p>
                </div>
                <div class='data__footer'>
                    <div class='data__block'>
                        <div class='data__item'>
                            <label for='' class='data__label'>Friend</label>
                        </div>
                        <div class='data__item'>
                            <select v-model='assignment.friend' class='data__select' name='friends'>
                                <option v-for='item in getFriendsList' :value='item.id' :key='item.id'>{{item.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class='data__block'>
                        <div class='data__item'>
                            <label for='' class='data__label'>Gift</label>
                        </div>
                        <div class='data__item'>
                            <select v-model='assignment.gift' class='data__select' name='friends'>
                                <option v-for='item in getGiftsList' :value='item.id' :key='item.id'>{{item.title}}</option>
                            </select>
                        </div>
                    </div>
                    <div class='data__block'>
                        <button class='data__button data__button--green' :disabled='!isInputEmpty' @click='addItem(assignment)'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    </main-master-page>
</template>

<script>
import MainMasterPage from '@/MasterPages/MainMasterPages'
import { mapState, mapActions } from 'pinia'
import { useAssignmentsStore } from '@/store/modules/assignments'
import { useGiftsStore } from '@/store/modules/gifts'
import { useFriendsStore } from '@/store/modules/friends'

export default {
    name: 'GiftsAssignments',
    components: { MainMasterPage },
    data() {
        return {
            assignment: {
                friend: '',
                gift: ''
            }
        }
    },
    computed: {
        ...mapState(useAssignmentsStore, ['getAssignmentsList']),

        ...mapState(useGiftsStore, ['getGiftsList']),
        ...mapState(useGiftsStore,{getGiftByID:'getItemById'}),

        ...mapState(useFriendsStore, ['getFriendsList']),
        ...mapState(useFriendsStore,{getFriendByID:'getItemById'}),

        isInputEmpty() {
            return this.assignment.friend && this.assignment.gift
        }
    },
    methods: {
        ...mapActions(useAssignmentsStore, ['loadList', 'addItem', 'deleteItem']),
        ...mapActions(useGiftsStore, { loadGiftsList: 'loadList' }),
        ...mapActions(useFriendsStore, { loadFriendsList: 'loadList' }),

        getFriendName(friendId) {
            const friend = this.getFriendByID(friendId);
            return friend ? friend.name : 'Unknown Friend';
        },
        getGiftTitle(giftId) {
            const gift = this.getGiftByID(giftId);
            return gift ? gift.title : 'Unknown Gift';
        },
    },
    created() {
        this.loadList()
        this.loadGiftsList()
        this.loadFriendsList()
    }
}
</script>

<style scoped>

</style>