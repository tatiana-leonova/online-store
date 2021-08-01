<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__wrapper">
        <brand-logo></brand-logo>
        <product-cart-btn></product-cart-btn>
      </div>
    </div>
  </header>
</template>

<script>
import BrandLogo from "@/components/BrandLogo.vue";
import ProductCartBtn from "@/components/ProductCartBtn.vue";

export default {
  name: "PageHeader",

  components: {
    'brand-logo': BrandLogo,
    'product-cart-btn': ProductCartBtn,
  },
}
</script>

<style lang="scss" scoped>
.page-header {
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  &__cart-icon {
    fill: $color_black;
  }
}
</style>
