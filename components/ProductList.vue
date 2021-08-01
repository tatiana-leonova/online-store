<template>
  <ul class="product-list">
    <product-card class="catalog__product-card"
                  v-for="product in products"
                  :key="product.id"
                  :photo="product.photo"
                  :name="product.name"
                  :price="product.price"
                  :rating="product.rating"
                  :category="product.category">
    </product-card>
  </ul>
</template>

<script>
import {mapState} from "vuex";
import ProductCard from "~/components/ProductCard";

export default {
  name: "ProductList",
  components: {
    'product-card': ProductCard,
  },
  computed: {
    ...mapState(['products']),
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  @include no-list;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
