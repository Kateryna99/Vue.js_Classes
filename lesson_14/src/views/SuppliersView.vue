<template>
<main-masterpage>
  <template #shop-main>
    <div class="products">
      <div class="products__header">
        <h3 class="products__title">Choose a supplier</h3>
      </div>
      <div class="products__main">
        <suppliers-container/>
      </div>
    </div>
  </template>
  <template #shop-footer>
    <div class="shop__footer">
      <div class="shop__block shop__block--row">
        <div class="shop__item">
          <p class="shop__text">Most popular: Fly</p>
        </div>
        <div class="shop__item">
          <p class="shop__text">Status: {{getStatus}}</p>
        </div>
      </div>
    </div>
  </template>
</main-masterpage>
</template>

<script>
import MainMasterpage from "@/Masterpages/MainMasterpage";
import SuppliersContainer from "@/components/SuppliersContainer";
import {mapGetters} from "vuex";
export default {
  name: "SuppliersView",
  components: {SuppliersContainer, MainMasterpage},
  computed:{
    ...mapGetters(['getStatus'])
  }
}
</script>

<style scoped>

</style>