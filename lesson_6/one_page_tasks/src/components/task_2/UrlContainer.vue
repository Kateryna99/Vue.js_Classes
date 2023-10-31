<template>
  <div class="task task__container">
    <url-item v-model.checkPath="urlPath"/>
  </div>

</template>

<script>
import UrlItem from "@/components/task_2/UrlItem";
export default {
  name: "urlContainer",
  components: {UrlItem},
  data(){
    return{
      urlPath: null,
    }
  }
}
</script>

<style lang="scss" scoped>


</style>