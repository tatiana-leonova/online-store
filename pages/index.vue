<template>
  <main>
    <section class="catalog">
      <div class="container">
        <div class="catalog__wrapper-heading">
          <h1 class="catalog__title">
            Каталог
          </h1>
          <product-sorting class="catalog__product-sorting">

          </product-sorting>
        </div>
        <div>
          <div class="catalog__wrapper-content">
            <product-categories class="catalog__product-categories">
            </product-categories>
            <product-list class="catalog__product-list">
            </product-list>
          </div>
        </div>
      </div>
      <product-cart></product-cart>
    </section>
  </main>
</template>

<script>
import ProductSorting from "@/components/ProductSorting.vue";
import ProductCategories from "@/components/ProductCategories.vue";
import ProductCard from "@/components/ProductCard.vue";
import ProductList from "@/components/ProductList.vue";
import ProductCart from "@/components/ProductCart.vue";
import {mapActions, mapState} from "vuex";

export default {
  components: {
    'product-sorting': ProductSorting,
    'product-categories': ProductCategories,
    'product-card': ProductCard,
    'product-list': ProductList,
    'product-cart': ProductCart
  },

  async asyncData({store}) {
    try {
      await store.dispatch('setProductCategories')
    } catch (err) {
      console.log(err);
    }
  },

  computed: {
    ...mapState(['productsInCart']),
  },

  methods: {
    ...mapActions(['setProductsInCartStorage']),
  },

  mounted() {
    this.setProductsInCartStorage()
  }
}
</script>

<style lang="scss">
.catalog {
  position: relative;
  margin-top: 32px;

  &__wrapper-heading {
    @media (min-width: $width-tablet) {
      display: flex;
      justify-content: space-between;
    }

    @media (max-width: $width-tablet-max) {
      margin-bottom: 20px;
    }

    @media (max-width: $width-mobile-max) {
      margin: 0 auto 25px auto;
    }
  }

  &__title {
    @media (max-width: $width-mobile-max) {
      text-align: center;
      margin-top: 50px;
    }
  }

  &__product-sorting {
    position: absolute;
    top: 20px;
    right: 0;

    @media (max-width: $width-mobile-max) {
      position: relative;
      margin: 0 auto 50px auto;
      text-align: center;
    }
  }

  &__wrapper-content {
    display: flex;

    @media (max-width: $width-tablet-max) {
      flex-direction: column;
    }
  }

  &__product-categories {
    width: 160px;

    @media (max-width: $width-tablet-max) {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;

      li {
        margin-right: 30px;
      }
    }
  }

  &__product-list {
    width: 1100px;
    margin-left: 20px;

    //@media (max-width: $width-mobile-max) {
    //  width: 100%;
    //  margin-left: 0;
    //  margin-top: 20px;
    //}

    @media (max-width: $width-tablet-max) {
      width: 100%;
      margin-left: 0;
      margin-top: 20px;
    }
  }
}
</style>
