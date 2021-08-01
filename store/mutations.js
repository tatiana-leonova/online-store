export default {
  setProductCategories: (state, productCategories) => {
    state.productCategories = productCategories
  },

  setProducts: (state, {products, category}) => {
    state.products = products
    state.activeCategory = category
  },

  setSelectedSorting: (state, selected) => {
    state.selectedSorting = selected
  },

  setSortProducts: (state, selectedField) => {
    console.log('setSortProducts: ' + selectedField)
    state.products.sort((item1, item2) => {
      if (item1[selectedField] < item2[selectedField]) {
        return 1;
      }
      if (item1[selectedField] > item2[selectedField]) {
        return -1;
      }
      return 0;
    })
  }
}
