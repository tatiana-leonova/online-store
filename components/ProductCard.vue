<template>
  <li class="product-card">
    <div class="product-card__top-wrapper">
      <product-rating class="product-card__rating"
                      :rating="product.rating"></product-rating>
      <transition name="button" mode="out-in">
        <button v-if="!product.isInCart"
                class="product-card__card-button"
                title="Добавить товар в корзину"
                @click.prevent="onAddProductToCart(product)">
          <product-cart-icon class="product-card__card-icon"
          ></product-cart-icon>
        </button>
      </transition>

      <transition name="button" mode="out-in">

        <button v-if="product.isInCart"
                class="product-card__trash-button"
                title="Удалить товар из корзины"
                @click="onRemoveProductFromCart(product.id)">
          <trash-icon class="product-card__trash-icon"></trash-icon>
        </button>
      </transition>
    </div>
    <img
      :src="`https://frontend-test.idaproject.com${product.photo}`"
      :alt="`Изображение ${product.name}`"
      width="180"
      height="210">
    <a href="#">
      <h3 class="product-card__title">{{ product.name | capitalized }}</h3>
    </a>
    <strong class="product-card__price">{{ product.price | formatted }} ₽</strong>
  </li>
</template>

<script>
import ProductRating from "~/components/ProductRating";
import ProductCartIcon from "~/components/ProductCartIcon";
import TrashIcon from "~/components/TrashIcon";
import {mapActions, mapState} from "vuex";

export default {
  name: "ProductCard",
  components: {
    'product-rating': ProductRating,
    'product-cart-icon': ProductCartIcon,
    'trash-icon': TrashIcon
  },
  props: {
    product: {
      type: Object,
      required: true
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

  methods: {
    ...mapActions(['setAddProductToCart', 'setRemoveProductFromCart', 'setChangeCartState']),

    onAddProductToCart(product) {
      this.setAddProductToCart(product)
      this.setChangeCartState({id: product.id, isInCart: true})

    },

    onRemoveProductFromCart(id) {
      this.setRemoveProductFromCart(id)
      this.setChangeCartState({id: id, isInCart: false})
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  width: 264px;
  padding: 18px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 15px;

  @media (max-width: $width-tablet-max) {
    width: 48%;
  }

  @media (max-width: $width-mobile-max) {
    width: 100%;
    max-width: 450px;
    margin: 0 auto 30px auto;
  }

  &__rating {
    position: absolute;
    top: 15px;
    left: 15px;
  }

  a {
    text-decoration: none;
    transition: all 0.5s;

    &:hover, &:focus {
      h3 {
        text-decoration: underline;
      }
    }

    &:active {
      opacity: 0.5;
    }
  }

  img {
    display: block;
    margin: -15px auto 0px auto;
  }

  &__title {
    font-size: 14px;
    font-weight: 400;
    color: $color_gray;

  }

  &__price {
    font-size: 14px;
    font-weight: 700;
    color: $color_black;
  }

  &__top-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__card-button {
    position: absolute;
    top: 16px;
    right: 15px;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }

  &__card-icon {
    width: 16px;
    height: 16px;
    fill: $color_gray-light;
    transition: all 0.5s ease;

    &:hover, &:focus {
      fill: $color_black;
    }

    &:active {
      opacity: 0.5;
    }
  }

  &__trash-button {
    position: absolute;
    top: 12px;
    right: 18px;
    border: none;
    background-color: inherit;
    padding: 0;
    cursor: pointer;

    svg {
      width: 24px;
      height: 24px;
    }

    &:hover, &:focus {
      svg {
        fill: $color_black;

      }
    }

    &:active {
      opacity: 0.5;
    }
  }

  &__trash-icon {
    fill: $color_gray-light;
    transition: all 0.5s ease;

    &:hover, &:focus {
      fill: $color_black;
    }

    &:active {
      opacity: 0.5;
    }
  }
}

.button-enter-active, .button-leave-active {
  transition: opacity 0.5s;
}

.button-enter, .button-leave-to {
  opacity: 0;
}
</style>
