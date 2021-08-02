<template>
  <div class="custom-select"
       :data-value="selected"
       :data-list="sortTypes">
    <div>
      <ul>
        <li :class="{ current : item === selected }"
            v-for="item in sortTypes"
            @click="select(item)">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "CustomSelect",

  props: {
    sortTypes: {
      type: Array
    },
  },
  computed: {
    ...mapState(['selectedSorting', 'isOpenSelect']),

    selected: {
      get() {
        return this.$store.state.selectedSorting
      },
      set(selected) {
        this.$store.commit('setSelectedSorting', selected)
        this.$store.commit('setSortProducts', selected.type)
      }
    },
  },
  methods: {
    ...mapActions(['setIsOpenSelect']),
    select(option) {
      this.selected = option;
      this.setIsOpenSelect(false)

    }
  }
}
</script>

<style lang="scss" scoped>
.custom-select {
  ul {
    position: absolute;
    z-index: 1;
    font-size: 14px;
    background: $color_white;
    width: 100%;
    padding: 0;
    list-style-type: none;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: 0;
  }

  li {
    color: $color_gray-light;
    padding: 12px;
    cursor: pointer;

    &:hover {
      color: $color_black;
      background: $color_extra_light;
    }
  }

  .current {
    background: $color_extra_light;
  }
}
</style>
