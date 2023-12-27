<template>
  <div  class="pop-up">
    <div class="pop-up__wrapper">
      <div class="pop-up__content">
        <div class="pop-up__block">
          <h3 class="pop-up__title">New Product</h3>
        </div>
        <div class="pop-up__block">
          <div class="pop-up__element">
            <div class="pop-up__item">
              <label class="pop-up__label">Img Url:</label>
            </div>
            <div class="pop-up__item">
              <input v-model="productItem.imgUrl" type="text" class="pop-up__input">
            </div>
          </div>
          <div class="pop-up__element pop-up__element--object">
            <div class="pop-up__element--object__block">
              <h4 class="pop-up__element--object__title">Price:</h4>
            </div>
            <div class="pop-up__element--object__block pop-up__element--object__block--padding">
              <div class="pop-up__element--object__element">
                <div class="pop-up__element--object__item">
                  <label  class="pop-up__element--object__label">Old Price:</label>
                </div>
                <div class="pop-up__element--object__item">
                  <input v-model="productItem.price.oldPrice" type="text" class="pop-up__element--object__input">
                </div>
              </div>
              <div class="pop-up__element--object__element">
                <div class="pop-up__element--object__item">
                  <label  class="pop-up__element--object__label">New Price:</label>
                </div>
                <div class="pop-up__element--object__item">
                  <input v-model="productItem.price.newPrice" type="text" class="pop-up__element--object__input">
                </div>
              </div>
            </div>
          </div>
          <div class="pop-up__element pop-up__element--object">
            <div class="pop-up__element--object__block">
              <h4 class="pop-up__element--object__title">Title:</h4>
            </div>
            <div class="pop-up__element--object__block pop-up__element--object__block--padding">
              <div class="pop-up__element--object__element">
                <div class="pop-up__element--object__item">
                  <label  class="pop-up__element--object__label">EN:</label>
                </div>
                <div class="pop-up__element--object__item">
                  <input v-model="productItem.title.en" type="text" class="pop-up__element--object__input">
                </div>
              </div>
              <div class="pop-up__element--object__element">
                <div class="pop-up__element--object__item">
                  <label  class="pop-up__element--object__label">UA:</label>
                </div>
                <div class="pop-up__element--object__item">
                  <input v-model="productItem.title.ua" type="text" class="pop-up__element--object__input">
                </div>
              </div>
            </div>
          </div>
          <div class="pop-up__element">
            <div class="pop-up__item">
              <label class="pop-up__label">Brand:</label>
            </div>
            <div class="pop-up__item">
              <input v-model="productItem.brand" type="text" class="pop-up__input">
            </div>
          </div>
          <div class="pop-up__element">
            <div class="pop-up__item">
              <label class="pop-up__label">Trader:</label>
            </div>
            <div class="pop-up__item">
              <input v-model="productItem.trader" type="text" class="pop-up__input">
            </div>
          </div>
        </div>
        <div class="pop-up__block">
          <button class="pop-up__button" @click="buttonAction">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import{ mapGetters,mapActions } from 'vuex'
export default {
  name: "ProductAction",
  data() {
    return {
      productItem: {
        imgUrl: '',
        price: {
          oldPrice: '',
          newPrice: ''
        },
        title: {
          en: '',
          ua: ''
        },
        brand: '',
        trader: ''
      }
    };
  },
  computed:{
    ...mapGetters('products',['getItemById']),

    getProductID(){
      return this.$route.params.productID
    }
  },
  methods:{
    ...mapActions('products',['updateItem','addItem']),

    buttonAction() {
      if (this.getProductID) {
        this.productItem.id = this.getProductID;
        this.updateItem({
          itemId: this.productItem.id,
          data: this.productItem
        });
        this.$router.push({ name: 'home' });
      } else {
        this.addItem(this.productItem);
        this.$router.push({ name: 'home' });
      }
    }
  },
  created() {
    if(this.getProductID)
      this.productItem = this.getItemById(this.getProductID)
  }
}
</script>

<style lang="scss" scoped>
.pop-up {
  &__wrapper {
    padding: 20px;

    max-width: 500px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;

    border: 2px solid black;
    padding: 15px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__title {
    text-align: center;
    font-size: 30px;
  }

  &__element {
    display: flex;
    gap: 15px;
    &--object {
      display: flex;
      flex-direction: column;
    }

    &--object__block {
      display: flex;
      flex-direction: column;
      gap: 10px;

      &--padding {
        padding-left: 40px;
      }
    }

    &--object__title {
      font-size: 20px;
      font-weight: bold;
    }

    &--object__element {
      display: flex;
      gap: 10px;
    }

    &--object__item {
    }

    &--object__label {
    }

    &--object__input {
      border: 2px solid black;
    }
  }

  &__item {

  }

  &__label {
    font-size: 20px;
    font-weight: bold;
  }

  &__input {
    border: 2px solid black;
  }

  &__button {
    border: 2px solid green;
    padding: 5px;

    font-size: 18px;
  }
}
</style>