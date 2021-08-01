import Vue from "vue";

function setIsInChart(productsInCart, products) {
  if (!products || !productsInCart) {
    return
  }
  for (let i = 0; i < productsInCart.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (productsInCart[i].id === products[j].id) {
        const product = products[j]
        Vue.set(product, "isInCart", true)
      }
    }
  }
}

export default {
  setProductCategories: (state, productCategories) => {
    state.productCategories = productCategories
  },

  setProducts: (state, {products, category}) => {
    state.products = products
    state.activeCategory = category
    setIsInChart(state.productsInCart, state.products)
  },

  setSelectedSorting: (state, selected) => {
    state.selectedSorting = selected
  },

  setSortProducts: (state, selectedField) => {
    state.products.sort((item1, item2) => {
      if (item1[selectedField] < item2[selectedField]) {
        return 1;
      }
      if (item1[selectedField] > item2[selectedField]) {
        return -1;
      }
      return 0;
    })
  },

  setAddProductToCart: (state, product) => {
    state.productsInCart.push(product)
  },

  setRemoveProductFromCart: (state, id) => {
    state.productsInCart = state.productsInCart.filter((item) => {
      return item.id !== id;
    });
  },

  setChangeCartState: (state, {id, isInCart}) => {
    const product = state.products.find(item => item.id === id)
    Vue.set(product, "isInCart", isInCart)
  },

  setIsOpenCart: (state, boolean) => {
    state.isOpenCart = boolean
  },

  setIsOpenSelect: (state, boolean) => {
    state.isOpenSelect = boolean
  },

  setProductsInCartStorage: (state, products) => {
    if (!products) {
      return
    }
    state.productsInCart = products
    setIsInChart(state.productsInCart, state.products)
  }
}
