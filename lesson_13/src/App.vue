<template>
  <nav>
    <div>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/lessons">Lessons</router-link>
      |
      <router-link to="/teachers">Teachers</router-link>
    </div>
    <div>
      <div class="links">
        <div class="links__wrapper">
          <div v-if="!getUserName" class="links__block">
            <button class="links__button" @click="goToLoginPage">Login</button>
          </div>
          <div v-else class="links__block">
            <p class="links__text">{{ getUserName }}</p>
            <button class="links__button" @click="logout">/ Log out</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(['getUserName'])
  },
  methods: {
    ...mapActions(['logoutUser']),

    goToLoginPage() {
      this.$router.push({
        name: 'login-page',
      })
    },
    logout() {
      window.userName = null
      this.logoutUser()

      this.$router.push({
        name: 'login-page',
      })
    }
  }
};

</script>

<style lang="scss">
@import "@/assets/style";

nav {
  max-width: 700px;
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.links {
  &__wrapper {
  }

  &__block {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__button {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  &__text {
    font-style: italic;
    font-size: 18px;
  }
}
</style>
