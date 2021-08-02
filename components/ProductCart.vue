<template>
  <transition name="cart">
    <div v-if="isOpenCart"
         class="cart">
      <div class="cart__wrapper">
        <div class="cart__wrapper-content">
          <div class="cart__title-wrapper">
            <h2>Корзина</h2>
            <button class="cart__btn-close"
                    type="button"
                    aria-label="Закрыть корзину"
                    @click="onCloseCart">
              &#215;
            </button>
          </div>
          <div v-if="!isFormSent">
            <div v-if="!productsInCart.length">
              <p class="cart__text">Пока что вы ничего не добавили
                в корзину.</p>
              <a class="button"
                 @click="onCloseCart"
                 href="#">Перейти к выбору</a>
            </div>
            <div v-else>
              <h3 class="cart__title-min">Товары в корзине</h3>
              <transition-group class="cart__products-list"
                                name="list" tag="ul">
                <cart-product-card v-for="product in productsInCart"
                                   :product="product"
                                   :key="product.id">
                </cart-product-card>
              </transition-group>
              <order-form></order-form>
            </div>
          </div>
          <div v-if="isFormSent"
               class="cart__success">
            <img class="cart__success-img"
                 src="@/assets/img/ok-emoji.png"
                 alt="эмоджи успешной отправки формы"
                 width="80"
                 height="80">
            <h3 class="cart__success-title">Заявка успешно отправлена</h3>
            <p class="cart__success-text">Вскоре наш менеджер свяжется с Вами</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import OrderForm from "~/components/OrderForm";
import CartProductCard from "~/components/CartProductCard";
import {mapActions, mapState} from "vuex";

export default {
  name: "ProductCart",

  components: {
    'order-form': OrderForm,
    'cart-product-card': CartProductCard
  },

  computed: {
    ...mapState(['productsInCart', 'isOpenCart', 'isFormSent']),

    isOpenCart: {
      get() {
        return this.$store.state.isOpenCart
      },
      set(boolean) {
        this.setIsOpenCart(boolean)
      }
    },

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
    ...mapActions(['setIsFormSent', 'setIsOpenCart']),

    onCloseCart() {
      this.isOpenCart = false
      this.isFormSent = false
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 30;
  transition: opacity 0.8s ease;

  &__wrapper {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 460px;
    background-color: $color_white;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

    @media (max-width: $width-mobile-max) {
      width: 100%;
      max-width: 450px;
    }
  }

  &__wrapper-content {
    overflow-y: scroll;
    height: 100%;
    padding: 50px 70px 50px 50px;
    margin-right: -20px;

    @media (max-width: $width-mobile-max) {
      padding: 30px 50px 30px 30px;
    }
  }

  &__title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title-min {
    font-size: 18px;
    font-weight: 400;
    color: $color_gray;
    margin-bottom: 16px;
  }

  &__text {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 24px;
  }

  &__products-list {
    @include no-list;
    margin-bottom: 30px;
  }

  &__success {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 90%;
  }

  &__success-img {
    display: block;
    margin: 20px auto 24px auto;
  }

  &__success-title {
    font-size: 24px;
    color: $color_black;
    margin: 5px 0;
  }

  &__success-text {
    font-size: 16px;
    color: $color_gray;
    margin: 5px 0;
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

.cart-enter-active {
  transition: all 0.5s ease;
}

.cart-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.cart-enter, .cart-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.list-enter-active, .list-leave-active {
  transition: all 0.4s;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
