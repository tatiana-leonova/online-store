<template>
  <div class="product-cart">
    <a @click="onClickCartButton"
       href="#">
      <product-cart-icon class="page-header__cart-icon"></product-cart-icon>
      <span class="product-cart__count">{{ productsInCart.length }}</span>
    </a>
  </div>
</template>

<script>
import ProductCartIcon from "@/components/ProductCartIcon.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "ProductCartBtn",
  components: {
    'product-cart-icon': ProductCartIcon,
  },

  computed: {
    ...mapState(['isOpenCart', 'productsInCart']),

    isOpenCart: {
      get() {
        return this.$store.state.isOpenCart
      },
      set(boolean) {
        this.setIsOpenCart(boolean)
      }
    },
  },

  methods: {
    ...mapActions(['setIsOpenCart']),

    onClickCartButton() {
      this.isOpenCart = true
    }
  }
}
</script>

<style lang="scss" scoped>
.product-cart {
  position: relative;

  svg {
    width: 32px;
    height: 32px;
    fill: $color_black;
    z-index: 1;
    transition: all 0.5s ease;

    &:hover, &:focus {
      fill: $color_gray-light;
    }

    &:active {
      opacity: 0.5;
    }
  }

  &__count {
    position: absolute;
    top: -5px;
    right: -3px;
    font-size: 10px;
    font-weight: 700;
    color: $color_white;
    min-width: 17px;
    min-height: 16px;
    background-color: $color_gray-light;
    border-radius: 50%;
    padding: 0 6px;
  }
}
</style>
