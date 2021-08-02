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
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 14px;
    position: absolute;
    z-index: 1;
    background: #fff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }

  li {
    padding: 12px;
    color: $color_gray-light;
    cursor: pointer;

    &:hover {
      color: $color_black;
      background: #F8F8F8;
    }
  }

  .current {
    background: #F8F8F8;
  }
}
</style>
