<template>
<div class="login-page">
  <div class="login-page__wrapper">
    <div class="login-page__block">
      <button class="login-page__button" @click="onLogin">{{ $t('loginText')}}</button>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "LoginPage",
  computed: {

  },
  methods: {
    ...mapActions('auth', ['loginWithGoogle']),

      async onLogin() {
        try {
          await this.loginWithGoogle()
          this.$router.push({
            name: 'home',
          })
        } catch (error) {
          alert(error.message)
        }
      },
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  &__wrapper {
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__block {
  }

  &__button {

    font-size: 35px;
    font-weight: bold;

    border-bottom: 2px solid black;
    padding-bottom: 10px;
  }
}
</style>