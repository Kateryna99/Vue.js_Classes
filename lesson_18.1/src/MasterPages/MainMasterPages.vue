<template>
  <div class="wrapper">
    <div class="header">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/friends">Friends</router-link> |
        <router-link to="/gifts">Gifts</router-link> |
        <router-link to="/gifts-assignments">Gifts' Assignments</router-link>
      </nav>
    </div>
    <div class="page">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMasterPage"
}
</script>

<style lang="scss" scoped>
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.wrapper {
  padding: 20px;

  max-width: 600px;
  width: 100%;
}

.header {
}

.page {
}
</style>