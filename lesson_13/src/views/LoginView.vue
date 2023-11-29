<template>
<div class="login-page">
  <div class="login-page__wrapper">
    <div class="login-page__header">
      <p class="login-page__text">{{getMessage}}</p>
      <h2 class="login-page__title">Login</h2>
    </div>
    <div class="login-page__main">
      <div class="login-page__block">
        <div class="login-page__item">
          <label class="login-page__label">Login</label>
        </div>
        <div class="login-page__item">
          <input v-model="userNameValue" type="text" class="login-page__input">
        </div>
      </div>
      <div class="login-page__block">
        <div class="login-page__item">
          <label class="login-page__label">Password</label>
        </div>
        <div class="login-page__item">
          <input v-model="userPasswordValue" type="password" class="login-page__input">
        </div>
      </div>
    </div>
    <div class="login-page__footer">
      <button @click="loginUser" class="login-page__button">Login</button>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "LoginView",
  data() {
    return {
      userPasswordValue: null,
      userNameValue: null,
    }
  },
  computed: {
    getMessage() {
      return this.$route.params.message
    }
  },
  methods: {
    ...mapActions(['setUserName']),

    loginUser() {
      window.userName = this.userNameValue
      this.setUserName(this.userNameValue)

      if (this.$route.query.redirect)
        this.$router.push({path: this.$route.query.redirect,})
      else this.$router.push({
          name: 'home',
        })
    }
  },
}
</script>

<style lang="scss" scoped>
.login-page {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;

    padding: 20px;

    max-width: 400px;
    width: 100%;
  }

  &__header {
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__title {
    font-size: 35px;
    letter-spacing: 2px;
    font-weight: 700;
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__block {
    display: grid;
    grid-template-columns: 90px 1fr;
    align-items: center;
    gap: 10px;
  }

  &__item {
  }

  &__label {
    font-size: 22px;
  }

  &__input {
    border: 2px solid black;
    border-radius: 5px;
    padding: 5px 10px;
  }

  &__footer {
  }

  &__button {
    border: 2px solid black;
    padding: 5px 40px;
    border-radius: 5px;

    font-size: 30px;
    color: green;
  }
  &__text {
    font-size: 25px;
    color: red;
  }
}
</style>