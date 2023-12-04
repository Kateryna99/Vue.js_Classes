<template>
  <main-masterpage>
  <template #shop-main>
    <div class="products">
      <div class="products__header">
        <div class="products__block">
          <h3 class="products__title">Choose your products</h3>
        </div>
        <div class="products__block">
          <router-link  :to="{name:'selector'}" class="products__button">Filter products</router-link>
        </div>
        <div class="products__block">
          <router-view name="filter"/>
        </div>
      </div>
      <div class="products__main">
       <router-view/>
      </div>
      <div class="products__footer">
        <div class="products__block">
          <router-link :to="{name:'editor'}" class="products__button">Edit products</router-link>
        </div>
        <div class="products__block">
          <router-view name="editor"/>
        </div>
      </div>
    </div>
  </template>
    <template #shop-footer>
      <div class="shop__footer">
        <div class="shop__block shop__block--row">
          <div class="shop__item">
            <p class="shop__text">Our Rating: {{ getRating }}</p>
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
import { mapGetters } from "vuex";

export default {
  name: "ProductsView",
  components: {
    MainMasterpage
  },
  computed: {
    ...mapGetters(["getRating",'getStatus']),

  }
}
</script>

<style lang="scss" scoped>

</style>