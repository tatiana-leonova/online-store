<template>
  <div class="product-sorting">
    <button class="product-sorting__title"
            @click="onClickTitleButton">Сортировать по: {{ selected.title }}
    </button>
    <transition name="sorting">
      <custom-select v-if="isOpenSelect"
                     :sortTypes="sortTypes"
                     class="product-sorting__custom-select">
      </custom-select>
    </transition>
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
    background-color: inherit;
    border: none;
    cursor: pointer;
    transition: all 0.5s ease;
    margin-left: auto;

    &:hover, &:focus {
      opacity: 0.7;
    }
  }

  &__custom-select {
    z-index: 2;
    position: absolute;
    top: 30px;
    right: 0;
    width: 160px;

    @media (max-width: $width-mobile-max) {
      right: calc(50% - 80px);
    }
  }
}

.sorting-enter-active {
  transition: all .2s ease;
}

.sorting-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.sorting-enter, .sorting-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
