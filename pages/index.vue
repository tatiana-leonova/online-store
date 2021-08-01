<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog__wrapper-heading">
        <h1 class="title">
          Каталог
        </h1>
        <product-sorting></product-sorting>
      </div>
      <div>
        <div class="catalog__wrapper-content">
          <product-categories class="catalog__product-categories">
          </product-categories>
          <div>
            <product-list></product-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSorting from "@/components/ProductSorting.vue";
import ProductCategories from "@/components/ProductCategories.vue";
import ProductCard from "@/components/ProductCard.vue";
import ProductList from "@/components/ProductList.vue";
import {mapState} from "vuex";

export default {
  components: {
    'product-sorting': ProductSorting,
    'product-categories': ProductCategories,
    'product-card': ProductCard,
    'product-list': ProductList
  },

  // computed: {
  //   ...mapState(['products']),
  // },

  async asyncData({store}) {
    try {
      await store.dispatch('setProductCategories')
    } catch (err) {
      console.log(err);
    }
  },
}
</script>

<style lang="scss">
.catalog {
  &__wrapper-heading {
    display: flex;
    justify-content: space-between;
  }

  &__wrapper-content {
    display: flex;
  }

  &__product-categories {
    width: 160px;
  }

  //&__product-list {
  //  @include no-list;
  //  display: flex;
  //  flex-wrap: wrap;
  //  justify-content: space-between;
  //}

  &__product-card {
    width: 1100px;
    margin-left: 20px;
  }
}
</style>
