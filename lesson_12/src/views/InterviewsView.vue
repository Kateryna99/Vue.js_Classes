<template>
  <div class="company">
    <div class="company__wrapper">
      <div class="company__block">
        <interview-component-list/>
      </div>
      <div class="company__block">
        <interview-component/>
      </div>
    </div>
  </div>
</template>

<script>
import InterviewComponentList from "@/components/InterviewComponentList";
import InterviewComponent from "@/components/InterviewComponent";
export default {
  name: "InterviewsView",
  components: {InterviewComponent, InterviewComponentList}
}
</script>

<style scoped>

</style>