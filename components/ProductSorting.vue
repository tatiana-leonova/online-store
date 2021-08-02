<template>
  <div class="product-sorting">
    <button class="product-sorting__title"
            @click="onClickTitleButton">Сортировать по: {{ selected.title }}
    </button>
    <custom-select :sortTypes="sortTypes"
                   class="product-sorting__custom-select"
    ></custom-select>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import CustomSelect from "@/components/CustomSelect.vue";

export default {
  name: "ProductSorting",

  components: {
    'custom-select': CustomSelect,
  },
  computed: {
    ...mapState(['sortTypes', 'selectedSorting', 'isOpenSelect']),

    selected: {
      get() {
        return this.$store.state.selectedSorting
      },
      set(selected) {
        this.$store.commit('setSelectedSorting', selected)
        this.$store.commit('setSortProducts', selected.type)
      }
    }
  },
  methods: {
    ...mapActions(['setIsOpenSelect']),

    onClickTitleButton() {
      this.setIsOpenSelect(!this.isOpenSelect)
    }
  },

  mounted() {
    this.selected = this.sortTypes[0]
  }
}
</script>

<style lang="scss" scoped>
.product-sorting {
  position: relative;

  &__title {
    font-size: 16px;
    font-weight: 400;
    color: $color_black;
    border: none;
    background-color: inherit;
    cursor: pointer;
    transition: all 0.5s ease;
    margin-left: auto;

    &:hover, &:focus {
      opacity: 0.7;
    }
  }

  &__custom-select {
    width: 160px;
    position: absolute;
    top: 30px;
    right: 0;

    @media (max-width: $width-mobile-max) {
      right: calc(50% - 80px);
    }
  }
}
</style>
