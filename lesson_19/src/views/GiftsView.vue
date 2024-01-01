<template>
<main-master-page>
  <div class="data">
    <div class="data__wrapper">
      <div class="data__header">
        <h3 class="data__title">Gifts List</h3>
      </div>
      <div class="data__main">
        <div v-for="item in getItemsList" :key="item.id" class="data__block">
          <div class="data__item">
            <p class="data__text">{{item.title}}</p>
          </div>
          <div class="data__item">
            <button class="data__button" @click="deleteGift(item.id)">Delete</button>
          </div>
        </div>
      </div>
      <div class="data__footer">
        <div class="data__block">
          <div class="data__item">
            <label for="" class="data__label">New gift:</label>
          </div>
          <div class="data__item">
            <input v-model="giftTitle" type="text" class="data__input">
          </div>
        </div>
        <div class="data__block">
          <button class="data__button data__button--green" :disabled="!isInputEmpty" @click="addGift">Add</button>
        </div>
      </div>
    </div>
  </div>
</main-master-page>
</template>

<script setup>

import MainMasterPage from "@/MasterPages/MainMasterPage.vue";
import {onMounted,ref,computed} from "vue";
import {useGiftsStore,useAssignmentsStore} from "@/stores/modules.js";
import {storeToRefs} from "pinia";
const giftsStore = useGiftsStore()
const assignmentsStore = useAssignmentsStore()

const {getItemsList} = storeToRefs(giftsStore)
const {loadList,addItem,deleteItem} = giftsStore

const giftTitle = ref(null)

const isInputEmpty = computed(() => giftTitle.value)

function addGift() {
  addItem({title:giftTitle.value})
}
function deleteGift(id) {
  deleteItem(id)
  assignmentsStore.deleteAssignmentByGiftID(id)
}


onMounted(() => {
  loadList()
})
</script>

<style scoped>

</style>