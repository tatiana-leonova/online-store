<template>
  <div class="product-basket">
    <a href="#">
      <product-basket-icon class="page-header__basket-icon"></product-basket-icon>
      <span class="product-basket__count">2</span>
    </a>
  </div>
</template>

<script>
import ProductBasketIcon from "@/components/ProductBasketIcon.vue";

export default {
  name: "ProductBasket",
  components: {
    'product-basket-icon': ProductBasketIcon,
  },
}
</script>

<style lang="scss" scoped>
.product-basket {
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
    right: 4px;
    font-size: 8px;
    font-weight: 700;
    color: $color_white;
    z-index: 9999;


    &:before {
      content: "";
      position: absolute;
      top: 2px;
      left: -3px;
      background-color: $color_gray-light;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      z-index: -1;
    }
  }
}
</style>
