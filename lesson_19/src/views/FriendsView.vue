<template>
<main-master-page>
<div class="data">
  <div class="data__wrapper">
    <div class="data__header">
      <h3 class="data__title">Friends List</h3>
    </div>
    <div class="data__main">
      <div v-for="item in getItemsList" :key="item.id" class="data__block">
        <div class="data__item">
          <p class="data__text">{{item.name}}</p>
        </div>
        <div class="data__item">
          <button class="data__button" @click="deleteFriend(item.id)">Delete</button>
        </div>
      </div>
    </div>
    <div class="data__footer">
      <div class="data__block">
        <div class="data__item">
          <label for="" class="data__label">New friend:</label>
        </div>
        <div class="data__item">
          <input v-model="personName" type="text" class="data__input">
        </div>
      </div>
      <div class="data__block">
        <button class="data__button data__button--green" :disabled="!isInputEmpty" @click="addFriend">Add</button>
      </div>
    </div>
  </div>
</div>
</main-master-page>
</template>

<script setup>
import MainMasterPage from "@/MasterPages/MainMasterPage.vue";
import {computed, onMounted, ref} from "vue";
import {useFriendsStore,useAssignmentsStore} from "@/stores/modules.js";
import {storeToRefs} from "pinia";
const friendsStore = useFriendsStore()
const assignmentsStore = useAssignmentsStore()

const {getItemsList} = storeToRefs(friendsStore)
const {loadList,addItem,deleteItem} = friendsStore

const personName = ref(null)

const isInputEmpty = computed(() => personName.value)

function addFriend() {
  addItem({name:personName.value})
  personName.value = null
}
function deleteFriend(id) {
  deleteItem(id)
  assignmentsStore.deleteAssignmentByFriendID(id)
}


onMounted(() => {
  loadList()
})

</script>

<style scoped>

</style>