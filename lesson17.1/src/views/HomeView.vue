<template>
  <div class="home">
    <div class="home__wrapper">
      <nav class="home__nav menu">
        <div class="menu__block" @click="changeLanguage">
          <div class="menu__item">
            <span class="menu__icon icon icon-buoy"></span>
          </div>
          <div class="menu__item">
            <p class="menu__text">{{getTitle}}</p>
          </div>
        </div>
        <div class="menu__block menu__block--login" @click="buttonAction">
          <div class="menu__item">
            <span class="menu__icon icon icon-key"></span>
          </div>
          <div class="menu_item">
            <button v-if="!getUser" class="menu__button">{{ $t('actionTitles.login')}}</button>
            <button v-else class="menu__button">{{ $t('actionTitles.logout')}}</button>
          </div>
        </div>
      </nav>
      <div class="home__block">
        <shop-vue></shop-vue>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters,mapActions } from 'vuex'
import ShopVue from "@/components/ShopVue";
export default {
  name: "HomeView",
  components: {
    ShopVue
  },
  computed: {
    ...mapGetters('auth', ['getUser']),

    getLanguage() {
        return this.$i18n.locale;
    },
    getTitle() {
      return this.getLanguage === 'en' ? 'EN' : 'UA'
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ua' : 'en'

      if (localStorage.getItem('lang') !== this.$i18n.locale) {
        localStorage.setItem('lang', this.$i18n.locale);
      }
    },
    buttonAction() {
      if(!this.getUser) {
        this.$router.push({
          name: 'login-page'
        })
      }else this.logout()
    }
  },
  created() {
    this.$i18n.locale = localStorage.getItem('lang')
  }
};
</script>

<style lang="scss">
.home {
  &__wrapper {
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    position: relative;
  }

  &__nav {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 30px;
  }

  &__block {
  }
}

.menu {
  &__block {
    display: flex;
    gap: 5px;

    &--login {
      border: 2px solid green;
      border-radius: 20px;
      padding: 5px;
    }
  }

  &__item {
  }

  &__icon {
    cursor: pointer;
  }

  &__text {
    cursor: pointer;
  }
  &__button {
    color: green;
  }
}

.icon {
}

.icon-buoy {
  color: darkblue;
}

.icon-key {
  color: green;
}

.menu_item {
}
</style>
