<template>
  <div class="company">
    <div class="company__wrapper">
      <div class="company__block">
        <p class="company__text">Welcome to our IT company. Feel free to check our workers and choose appropriate time for your interview.</p>
        <router-link :to="{name:'interviews'}" class="company__link">Book an interview</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "HomeView",
};
</script>
