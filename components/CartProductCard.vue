<template>
  <li class="cart-product-card">
    <img :src="`https://frontend-test.idaproject.com${product.photo}`"
         :alt="`Изображение ${product.name}`"
         width="70"
         height="90">
    <div>
      <h3>{{ product.name | capitalized }}</h3>
      <strong>{{ product.price | formatted }} ₽</strong>
      <product-rating :rating="product.rating"
      ></product-rating>
    </div>
    <button class="cart-product-card__button"
            title="Удалить товар из корзины"
            @click="onRemoveProductFromCart(product.id)">
      <trash-icon class="cart-product-card__trash-icon"></trash-icon>
    </button>
  </li>
</template>

<script>
import {mapActions, mapState} from "vuex";
import ProductRating from "~/components/ProductRating";
import TrashIcon from "~/components/TrashIcon";

export default {
  name: "CartProductCard",

  components: {
    'product-rating': ProductRating,
    'trash-icon': TrashIcon,
  },

  props: {
    product: {
      type: Object,
      required: false
    }
  },

  filters: {
    formatted: value => {
      if (!value) return ''
      return `${value}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
    },

    capitalized: value => {
      if (!value) return ''
      value = value.toString().toLowerCase()
      const words = value.split(' ')
      let result = ''
      words.forEach(word => {
        result += word.charAt(0).toUpperCase() + word.slice(1) + " "
      })
      return result
    }
  },

  computed: {
    ...mapState(['products']),
  },

  methods: {
    ...mapActions(['setRemoveProductFromCart', 'setChangeCartState']),

    onRemoveProductFromCart(id) {
      this.setRemoveProductFromCart(id)
      this.setChangeCartState({id: id, isInCart: false})
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-product-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  &__button {
    border: none;
    background-color: inherit;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover, &:focus {
      transform: scale(1.1);
      opacity: 0.6;
    }

    &:active {
      opacity: 0.9;
    }
  }

  &__trash-icon {
    fill: $color_gray-light;
  }
}
</style>
