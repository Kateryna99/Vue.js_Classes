<template>
  <div class="shop">
    <div class="shop__wrapper">
      <div class="shop__container">
        <div class="shop__header">
          <slot name="shop-header">
            <nav>
              <router-link to="/">Home</router-link>
              |
              <router-link to="/products">Products</router-link>
              |
              <router-link to="/suppliers">Suppliers</router-link>
              |
              <router-link to="/contacts">Contacts</router-link>
              |
              <router-link to="/rules">Shopping Rules</router-link>
              |
            </nav>
          </slot>
        </div>
        <div class="shop__main">
          <slot name="shop-main"></slot>
        </div>
        <div class="shop__footer">
          <slot name="shop-footer"></slot>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "MainMasterpage"
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

.shop {
  &__wrapper {
    min-height: 100vh;
    overflow: hidden;
    position: relative;

  }

  &__container {
    min-height: 100vh;
    max-width: 830px;
    width: 100%;
    margin: 0 auto;

    padding-left: 15px;
    padding-right: 15px;

    display: flex;
    flex-direction: column;
  }

  &__header {
    padding: 20px 0;
  }

  &__main {
    flex-grow: 1;
  }

  &__footer {
    padding: 30px;
  }
}
</style>