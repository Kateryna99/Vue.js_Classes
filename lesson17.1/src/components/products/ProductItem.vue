<template>
<div class="product-card">
  <div class="product-card__wrapper">
    <div class="product-card__header">
      <div class="product-card__utils">
        <span v-if="userPermissions.delete" class="product-card__icon icon icon-trashcan" @click="deleteItem(product.id)"></span>
        <span v-if="userPermissions.write" class="product-card__icon icon icon-plus" @click="addItem"></span>
        <span v-if="userPermissions.update" class="product-card__icon icon icon-edit-pencil" @click="updateItem"></span>
      </div>
      <div class="product-card__image">
        <img :src="product.imgUrl" alt="">
      </div>
    </div>
    <div class="product-card__main">
      <p v-if="getLanguage==='ua'" class="product-card__text">{{product.title.ua}}</p>
      <p v-else class="product-card__text">{{product.title.en}}</p>
    </div>
    <div class="product-card__footer">
        <div class="product-card__item">
          <p class="product-card__price product-card__price-old">{{product.price.oldPrice}} $</p>
        </div>
        <div class="product-card__item">
          <p class="product-card__price">{{product.price.newPrice}}</p>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('users', ['userPermissions']),

    getLanguage() {
      return this.$i18n.locale
    }
  },
  methods: {
    ...mapActions('products', ['deleteItem']),

    addItem() {
      this.$router.push({
        name: 'product-action',
        params: {
          category: 'add',
        }
      })
    },
    updateItem() {
      console.log(this.product.id)
      this.$router.push({
        name: 'product-action',
        params: {
          category: 'update',
          productID: this.product.id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    min-height: 400px;
  }

  &__header {
    position: relative;
  }

  &__utils {
    position: absolute;
    top: 10px;
    right: 0;


    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  &__icon {
    cursor: pointer;
    font-size: 20px;

    padding: 2px;
    border: 1px solid black;
  }

  &__image {
    max-width: 100%;
    width: 100%;
    height: 200px;

    img{
      width: 100%;
      height: 100%;

      object-fit: contain;
      object-position: center;
    }
  }

  &__main {
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__text {
    text-align: center;
  }

  &__footer {
  }

  &__item {
  }

  &__price {
    color: red;
    font-size: 24px;

    text-align: center;
  }

  &__price-old {
    text-decoration: line-through;
    color: grey;
    font-size: 18px;
  }
}

.icon {
}

.icon-trashcan {
  color: red;
}

.icon-plus {
  color: green;
}

.icon-edit-pencil {
  color: chocolate;
}
</style>