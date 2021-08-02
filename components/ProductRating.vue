<template>
  <div class="product-rating" title="Рейтинг товара">
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fff" d="M0 0h20v20H0z"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10 3.125c.238 0 .455.135.56.348l1.786 3.619 3.994.583a.625.625 0 01.346 1.066l-2.89 2.815.683 3.976a.625.625 0 01-.907.659L10 14.312l-3.572 1.879a.625.625 0 01-.906-.66l.681-3.975-2.89-2.815a.625.625 0 01.347-1.066l3.994-.583L9.44 3.473a.625.625 0 01.56-.348zm0 2.037L8.63 7.939a.625.625 0 01-.47.342l-3.067.448 2.218 2.16c.148.144.215.351.18.554l-.523 3.052 2.741-1.442a.625.625 0 01.582 0l2.741 1.442-.523-3.052a.625.625 0 01.18-.553l2.218-2.16-3.066-.45a.625.625 0 01-.47-.34L10 5.161z"
            fill="#F2C94C"/>
    </svg>
    <span class="product-rating__number">{{ rating }}</span>
  </div>
</template>

<script>
export default {
  name: "ProductRating",

  data() {
    return {}
  },

  props: {
    rating: {
      type: Number,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
.product-rating {
  position: relative;

  &__number {
    position: absolute;
    top: calc(50% - 5px);
    left: 23px;
    @include text(10px, 10px);
    font-weight: 700;
    color: $color_yellow;
  }
}
</style>
