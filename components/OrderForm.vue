<template>
  <form class="order-form" action="">
    <h3 class="order-form__title">Оформить заказ</h3>
    <ul class="order-form__list">
      <li class="order-form__item"
          v-for="(field, index) in InputsList">
        <label :for="field.id"
               class="is-hidden">
          {{ field.title }}
        </label>
        <input :id="field.id"
               :type="field.type"
               :value="field.value"
               :placeholder="[field.title]"
               @input="onInput($event.target.value, index)">
      </li>
    </ul>
    <button class="button" type="button">Отправить</button>
  </form>
</template>

<script>
export default {
  name: "OrderForm",

  data() {
    return {
      InputsList: [
        {
          id: 'name',
          title: 'Ваше имя',
          type: 'text',
          value: '',
          pattern: /^[a-zA-Z ]{4,30}$/,
          valid: false
        },
        {
          id: 'phone',
          title: 'Телефон',
          type: 'text',
          value: '',
          pattern: /^[0-9]{7,14}$/,
          valid: false
        },
        {
          id: 'adress',
          title: 'Адрес',
          type: 'text',
          value: '',
          pattern: /^[a-zA-Z ]{10,70}$/,
          valid: false
        },
      ]
    }
  },

  methods: {
    onInput(value, i) {
      let field = this.info[i];
      field.value = value.trim();
      field.valid = field.pattern.test(field.value);
    }
  }
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
    margin-bottom: 20px;
  }

  input {
    height: 50px;
    width: 100%;
    padding: 14px;
    border: none;
    color: $color_gray-light;
    font-size: 14px;
    line-height: 20px;
    background-color: #f8f8f8;
    border-radius: 8px;

    &::placeholder {
      font-size: 14px;
      line-height: 20px;
      color: $color_gray-light;
    }
  }
}
</style>
