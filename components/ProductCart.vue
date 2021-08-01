<template>
  <div v-if="isOpenCart"
       class="cart">
    <div class="cart__title-wrapper">
      <h2>Корзина</h2>
      <button class="cart__btn-close"
              type="button"
              aria-label="Закрыть корзину"
              @click="onCloseCart">
        &#215;
      </button>
    </div>

    <!--    <div v-if="!productsInCart.length">-->
    <p>Пока что вы ничего не добавили
      в корзину.</p>
    <a class="button"
       @click="onCloseCart"
       href="#">Перейти к выбору</a>
    <!--    </div>-->

    <!--    <div v-else>-->
    <p>Товары в корзине</p>
    <ul class="cart__products-list">
      <cart-product-card v-for="product in productsInCart"
                         :product="product"
                         :key="product.id"></cart-product-card>
    </ul>
    <order-form></order-form>
    <!--    </div>-->

    <div>

    </div>
  </div>
</template>

<script>
import OrderForm from "~/components/OrderForm";
import CartProductCard from "~/components/CartProductCard";
import {mapState} from "vuex";

export default {
  name: "ProductCart",

  components: {
    'order-form': OrderForm,
    'cart-product-card': CartProductCard
  },

  computed: {
    ...mapState(['productsInCart', 'isOpenCart']),

    isOpenCart: {
      get() {
        return this.$store.state.isOpenCart
      },
      set(boolean) {
        this.$store.commit('setIsOpenCart', boolean)
      }
    },
  },

  methods: {
    onCloseCart() {
      this.isOpenCart = false
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 460px;
  padding: 50px;
  background-color: $color_white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

  &__title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__products-list {
    @include no-list;
  }

  &__btn-close {
    border: none;
    background-color: inherit;
    font-size: 40px;
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
}
</style>
