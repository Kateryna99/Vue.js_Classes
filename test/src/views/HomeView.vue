<template>
  <div class="wrapper">
    <div v-for="item in getItemsList" :key="item.id" class="wrapper__block">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import {mapGetters,mapActions} from 'vuex'

export default {
  name: "HomeView",
  computed:{
    ...mapGetters('friends',['getItemsList'])
  },
  methods:{
    ...mapActions('friends',['loadList'])
  },
    created() {
        this.loadList()
  }
};
</script>
