<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/shop">Shop</router-link> |
    <router-link to="/payment-rules">Payment Rules</router-link> |
    <router-link to="/contacts">Contacts</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import './assets/style';
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
</style>
