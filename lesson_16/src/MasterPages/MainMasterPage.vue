<template>
<div class="busses-company">
  <div class="busses-company__wrapper">
    <div class="busses-company__container">
      <div class="busses-company__header">
        <nav class="busses-company-menu">
          <router-link to="/">Home</router-link> |
          <router-link to="/drivers">Drivers</router-link> |
          <router-link to="/busses">Busses</router-link> |
          <router-link to="/assignments">Assignments</router-link>|
          <router-link to="/">Contacts</router-link>
        </nav>
      </div>
      <div class="busses-company__main">
        <slot></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "MainMasterPage"
}
</script>

<style lang="scss" scoped>
.busses-company {
  &__wrapper {
    padding: 20px;
  }

  &__container {
    max-width: 930px;
    width: 100%;

    padding-left: 15px;
    padding-right: 15px;
  }

  &__header {
  }

  &__main {
  }
}

.busses-company-menu {
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