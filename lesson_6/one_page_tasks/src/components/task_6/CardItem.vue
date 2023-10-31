<template>
<div class="card">
  <div class="card__wrapper">
    <div class="card__item card__item--big">
      <label class="card__label" for="">Card Number
        <input v-model="cardNumberValue" class="card__input card__input--big" type="text">
      </label>
    </div>
    <div class="card__item">
      <label class="card__label" for="">Expiry Date
        <input v-model="expiryDateValue" type="text" class="card__input ">
      </label>
    </div>
    <div class="card__item">
      <label class="card__label" for="">Secure Code
        <input v-model="secureCodeValue" class="card__input" type="number">
      </label>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "cardItem",
  props: {
    cardNumber: {
      type: String,
    },
    cardNumberModifiers: {
      default: () => ({})
    },
    expiryDate: {
      type: String,
    },
    expiryDateModifiers: {
      default: () => ({})
    },
    secureCode: {
      type: Number,
       default: null,
    },
    secureCodeModifiers: {
      default: () => ({})
    }
  },
  computed: {
    cardNumberValue: {
      get() {
        return (this.cardNumber ?? '').toString().replace(/(\d{4}(?=\S+))/g, '$1 ')
      },
      set(value) {
        if(this.cardNumberModifiers.digitDivider) {
          value = value.replace(/\D/g,'')
        }
        this.$emit('update:cardNumber', value);
      }
    },
    expiryDateValue: {
      get() {
        return (this.expiryDate ?? '').toString().replace(/^([1-9]\/|[2-9])$/g, '0$1/')
      },
      set(value) {
        if(this.cardNumberModifiers.digitDivider) {
          value = value.replace(/\D/g,'')
        }

        this.$emit('update:expiryDate', value);
      }
    },
    secureCodeValue: {
      get() {
        return this.secureCode;
      },
      set(value) {
        this.$emit('update:secureCode', value);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 20px;
    max-width: 370px;

    padding-left: 10px;
  }

  &__item {
    &--big {
      grid-column: 1 / span 2;
    }
  }

  &__label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__input {
    max-width: 170px;
    width: 100%;

    padding: 10px;
    border-radius: 3px;
    &--big {
      max-width: 100%;
      width: 100%;
    }
  }
}
</style>