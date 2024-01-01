<template>
<main-master-page>
  <div class="data">
    <div class="data__wrapper">
      <div class="data__header">
        <h3 class="data__title">Gifts Distribution</h3>
      </div>
      <div class="data__main">
        <div v-if="assignmentList.length" v-for="item in assignmentList" :key="item.id" class="data__block">
          <div class="data__item">
            <p class="data__text">{{getFriendById(item.friend).name}}</p>
          </div>
          <div class="data__item">
            <p class="data__text">{{getGiftById(item.gift).title}}</p>
          </div>
          <div class="data__item">
            <button class="data__button" @click="deleteItem(item.id)">Delete</button>
          </div>
        </div>
        <div v-else class="data__message">
          <p class="data__text">There is no declared assignment</p>
        </div>
      </div>
      <div class="data__footer">
        <div class='data__block'>
          <div class='data__item'>
            <label for='' class='data__label'>Friend</label>
          </div>
          <div class='data__item'>
            <select v-model='assignment.friend' class='data__select' name='friends'>
              <option v-for='item in friendsList' :value='item.id' :key='item.id'>{{item.name}}</option>
            </select>
          </div>
        </div>
        <div class='data__block'>
          <div class='data__item'>
            <label for='' class='data__label'>Gift</label>
          </div>
          <div class='data__item'>
            <select v-model='assignment.gift' class='data__select' name='friends'>
              <option v-for='item in giftsList' :value='item.id' :key='item.id'>{{item.title}}</option>
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

<script setup>
import MainMasterPage from "@/MasterPages/MainMasterPage.vue";
import {onMounted, reactive,computed} from "vue";
import {useAssignmentsStore,useGiftsStore,useFriendsStore} from "@/stores/modules.js";
import {storeToRefs} from "pinia";
const assignmentsStore = useAssignmentsStore()
const giftsStore = useGiftsStore()
const friendsStore = useFriendsStore()

const {getItemsList:assignmentList} = storeToRefs(assignmentsStore)
const {loadList,addItem,deleteItem} = assignmentsStore

const {getItemsList:friendsList,getItemByID:getFriendById} = storeToRefs(friendsStore)


const {loadList:loadFriendsList} = friendsStore

const {getItemsList:giftsList,getItemByID:getGiftById} = storeToRefs(giftsStore)
const {loadList:loadGiftsList} = giftsStore

const assignment = reactive({
  friend:null,
  gift:null,
})

const isInputEmpty = computed(()=>{
  return assignment.friend && assignment.gift
})

onMounted(()=>{
  loadList()
  loadFriendsList()
  loadGiftsList()
})

</script>

<style scoped>

</style>