<template>
  <li class="product-card">
    <div class="product-card__top-wrapper">
      <product-rating :rating="rating"></product-rating>
      <a href="">
        <product-basket-icon class="product-card__basket-icon"
        ></product-basket-icon>
      </a>
    </div>
    <img
      :src="`https://frontend-test.idaproject.com${photo}`"
      :alt="`Изображение ${name}`"
      width="142"
      height="180">
    <a href="#">
      <h3 class="product-card__title">{{ name | capitalized }}</h3>
    </a>
    <strong class="product-card__price">{{ price | formatted }} ₽</strong>
  </li>
</template>

<script>
import ProductRating from "~/components/ProductRating";
import ProductBasketIcon from "~/components/ProductBasketIcon";

export default {
  name: "ProductCard",
  components: {
    'product-rating': ProductRating,
    'product-basket-icon': ProductBasketIcon

  },
  props: {
    photo: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    category: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  },
  filters: {
    formatted: value => {
      if (!value) return ''
      return `${value}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
    },

    capitalized: value => {
      if (!value) return ''
      value = value.toString().toLowerCase()
      const words = value.split(' ')
      let result = ''
      words.forEach(word => {
        result += word.charAt(0).toUpperCase() + word.slice(1) + " "
      })
      return result
    }
  },
}
</script>

<style lang="scss" scoped>
.product-card {
  width: 264px;
  padding: 18px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 15px;

  a {
    text-decoration: none;
  }

  img {
    display: block;
    margin: 0 auto;
  }

  &__title {
    font-size: 14px;
    font-weight: 400;
    color: $color_gray;
    transition: all 0.5s ease;

    &:hover, &:focus {
      text-decoration: underline;
    }

    &:active {
      opacity: 0.5;
    }
  }

  &__price {
    font-size: 14px;
    font-weight: 700;
    color: $color_black;
  }

  &__top-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__basket-icon {
    width: 16px;
    height: 16px;
    fill: $color_gray-light;
    transition: all 0.5s ease;

    &:hover, &:focus {
      fill: $color_black;
    }

    &:active {
      opacity: 0.5;
    }
  }
}
</style>
