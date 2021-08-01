<template>
  <div class="product-sorting">
    <p class="product-sorting__title">Сортировать по: {{ selected.title }}</p>
    <select class="product-sorting__select"
            name="sorting"
            id="sorting"
            v-model="selected">
      <option v-for="type in sortTypes" :value="type" :key="type.type">
        По {{ type.title }}
      </option>
    </select>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ProductSorting",

  computed: {
    ...mapState(['sortTypes', 'selectedSorting']),

    selected: {
      get() {
        return this.$store.state.selectedSorting
      },
      set(selected) {
        console.log(selected)
        this.$store.commit('setSelectedSorting', selected)
        this.$store.commit('setSortProducts', selected.type)
      }
    }
  },

  mounted() {
    this.selected = this.sortTypes[0]
  }
}
</script>

<style lang="scss" scoped>
.product-sorting {
  &__title {
    font-size: 16px;
    font-weight: 400;
    color: $color_black;
  }

  &__select {
    display: block;
    box-sizing: border-box;

    option {
      font-size: 14px;
      font-weight: 400;
      color: $color_gray-light;

      &:hover,
      &:focus {
        color: $color_black;
        background-color: $color_extra_light !important;
      }

      &:active {
        opacity: 0.5;
      }
    }
  }
}
</style>
