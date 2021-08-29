<template>
  <div class="product-rating" title="Рейтинг товара">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path fill="#fff" d="M20 20H0V0h20"/>

      <path
        d="M10 3.1c.2 0 .5.1.6.3L12.4 7l4 .6c.2 0 .4.2.5.4.1.2 0 .5-.2.6l-2.9 2.8.7 4c0 .2-.1.5-.2.6-.2.1-.4.2-.7 0L10 14.3l-3.6 1.9c-.2.1-.5.1-.7 0s-.3-.4-.2-.6l.7-4-2.9-2.9c-.2-.1-.2-.4-.1-.6.1-.2.3-.4.5-.4l4-.6 1.8-3.6c0-.2.3-.4.5-.4zm0 2.1L8.6 7.9c-.1.2-.2.4-.4.4l-3.1.4 2.2 2.2c.1.1.2.4.2.6l-.5 3 2.7-1.4c.2-.1.4-.1.6 0l2.7 1.4-.5-3.1c0-.2 0-.4.2-.6l2.2-2.2-3.1-.4c-.2 0-.4-.2-.5-.3L10 5.2z"
        fill-rule="evenodd" clip-rule="evenodd" fill="#f2c94c"/>
      <path v-if="rating === 5" d="M6.5 11L4 8l3.9-.4L10 4.1l1.6 3.3L16 8l-2.9 3.2.7 4.3L10 14l-3.5 1.5V11z"
            fill="#f2c94c"/>
      <path v-else-if="rating === 4" d="M6.5 11L4 8h12l-2.5 3v3.5l-.5 1-3-1.5-1 .5-2.5 1V11z" fill="#f2c94c"/>
      <path v-else-if="rating === 3"
            d="M6.8,11.9L4.4,9.5h5.7h5.7l-2.4,2.5v2.9l-0.5,0.8l-2.8-1.2l-0.9,0.4l-2.4,0.8v-0.8V11.9z" fill="#f2c94c"/>
      <path v-else-if="rating === 2" d="M6.5 11.1v4.4l2.5-1 1-.5 3 1.5.5-1v-3.4z" fill="#f2c94c"/>
      <path v-else-if="rating === 1" d="M6.5,12.7V15L9,14.5l1-0.3l3,0.8l0.5-0.5v-1.8H6.5z" fill="#f2c94c"/>
      <path v-else d=""/>
    </svg>

    <span class="product-rating__number">{{ rating }}</span>
  </div>
</template>

<script>
export default {
  name: "ProductRating",

  props: {
    rating: {
      type: Number,
      required: true,
      default: 0
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
