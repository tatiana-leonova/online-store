<template>
  <ul class="product-categories-list">
    <li class="product-categories"
        :class="[activeCategory === category.id ? 'product-categories__active' : '']"
        v-for="category in productCategories"
        @click="onCategoryClick(category.id)"
        :key="category.id">
      <a href="#">{{ category.name }}</a>
    </li>
  </ul>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  name: "ProductCategories",

  computed: {
    ...mapState(['productCategories', 'activeCategory']),
  },

  methods: {
    ...mapActions(['setProductsInCategory']),

    onCategoryClick(id) {
      this.setProductsInCategory(id)
    },
  }
}
</script>

<style lang="scss" scoped>
.product-categories-list {
  @include no-list;
}

.product-categories {
  margin-bottom: 15px;

  a {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: $color_gray-light;
    text-decoration: none;
    transition: all 0.5s;

    &:hover,
    &:focus {
      color: $color_gray;
    }

    &:active {
      opacity: 0.5;
    }
  }

  &__active {
    text-decoration: underline;

    a {
      color: $color_black;
    }
  }
}
</style>
