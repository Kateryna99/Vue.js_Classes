<template>
  <nav>
    <router-link to="/">Home</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/style";

nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
