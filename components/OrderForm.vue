<template>
  <form class="order-form">
    <h3 class="order-form__title">Оформить заказ</h3>
    <ul class="order-form__list">
      <li class="order-form__item"
          v-for="input in inputs"
          :key="input.id">
        <label :for="input.id"
               class="is-hidden">
          {{ input.title }}
        </label>
        <input :id="input.id"
               :type="input.type"
               v-model.trim="input.value"
               :placeholder="[input.title]"
               :class="{'order-form__error': !input.valid}"
               @input="onInputText(input)"
               @focus="applyMask(input)"
        >
        <span v-if="!input.valid"
              class="order-form__item-error-text"
        >Поле заполнено неверно</span>
      </li>
    </ul>
    <button class="button"
            type="submit"
            @click="orderSubmit"
            aria-label="Отправить форму">
      Отправить
    </button>
  </form>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "OrderForm",

  data() {
    return {
      inputs: [
        {
          id: 'name',
          title: 'Ваше имя',
          type: 'text',
          value: '',
          pattern: /^[а-яА-ЯёЁa-zA-Z]+$/,
          valid: true,
        },
        {
          id: 'phone',
          title: 'Телефон',
          type: 'text',
          value: '',
          pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/,
          valid: true
        },
        {
          id: 'adress',
          title: 'Адрес',
          type: 'text',
          value: '',
          pattern: /^.{5,30}$/,
          valid: true
        },
      ],
      lastPhoneValue: ""
    }
  },

  computed: {
    ...mapState(['isFormSent']),

    isFormSent: {
      get() {
        return this.$store.state.isFormSent
      },
      set(boolean) {
        this.setIsFormSent(boolean)
      }
    },
  },

  methods: {
    ...mapActions(['setClearProductsInCart', 'setIsFormSent']),

    orderSubmit(e) {
      const notValidValues = this.inputs.filter(input => {
        const result = input.pattern.test(input.value)
        input.valid = result
        return result === false
      })

      if (notValidValues.length) {
        e.preventDefault()
        return
      }

      this.isFormSent = true
      this.setClearProductsInCart()
    },

    applyMask(input) {
      if (input.id === 'phone') {
        input.value = '+7 ('
      }
    },

    onInputText(input) {
      if (input.id === 'phone') {

        if (input.value.length === 7) {
          input.value = `${input.value}) `
        }

        if (input.value.length === 12 && this.lastPhoneValue.length < input.value.length) {
          input.value = `${input.value}-`
        }

        if (input.value.length === 15 && this.lastPhoneValue.length < input.value.length) {
          input.value = `${input.value}-`
        }

        if (input.value.length > 18) {
          input.value = this.lastPhoneValue
        }

        if (this.lastPhoneValue.length > input.value.length && input.value.slice(-1) === "-") {
          input.value = input.value.slice(0, -1);
        }

        this.lastPhoneValue = input.value
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.order-form {
  &__list {
    @include no-list;
    margin-bottom: 24px;
  }

  &__title {
    font-size: 18px;
    font-weight: 400;
    color: $color_gray;
    margin-bottom: 16px;
  }

  &__item {
    position: relative;
    margin-bottom: 20px;
  }

  input {
    color: $color_gray-light;
    font-size: 14px;
    line-height: 20px;
    height: 50px;
    width: 100%;
    padding: 14px;
    background-color: $color_extra_light;
    border: none;
    border-radius: 8px;

    &::placeholder {
      font-size: 14px;
      line-height: 20px;
      color: $color_gray-light;
    }
  }

  &__item-error-text {
    position: absolute;
    bottom: -15px;
    left: 0;
    font-size: 12px;
    color: $color_error;
  }

  &__error {
    border: 1px solid $color_error !important;
  }
}
</style>
