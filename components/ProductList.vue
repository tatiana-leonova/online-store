<template>
  <div>
    <ul v-if="!isLoading"
        class="product-list">
      <product-card class="catalog__product-card"
                    v-for="product in products"
                    :key="product.id"
                    :product="product">
      </product-card>
    </ul>
    <div v-else
         class="product-list--empty">
      <h3>Список товаров пуст</h3>
    </div>
  </div>
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
    ...mapState(['products', 'isLoading']),
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

.product-list--empty {
  margin: 0 auto;

  h3 {
    text-align: center;
  }
}
</style>
