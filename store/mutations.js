import Vue from "vue";

function setIsInChart(productsInCart, products) {
  if (!products || !productsInCart) {
    return
  }
  for (let i = 0; i < productsInCart.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (productsInCart[i].id === products[j].id) {
        Vue.set(products[j], "isInCart", true)
      }
    }
  }
}

function clearInCart(products) {
  if (!products) {
    return
  }
  for (let i = 0; i < products.length; i++) {
    Vue.set(products[i], "isInCart", false)
  }
}

export default {
  setProductCategories: (state, productCategories) => {
    state.productCategories = productCategories
  },

  setProducts: (state, products) => {
    state.cacheProducts = products
  },

  setProductsInCategory: (state, category) => {
    state.products = state.cacheProducts.filter(item => {
      return item.category === category
    })
    state.activeCategory = category
    setIsInChart(state.productsInCart, state.cacheProducts)
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
    state.isLoading = false
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
    const product = state.cacheProducts.find(item => item.id === id)
    Vue.set(product, "isInCart", isInCart)
  },

  setIsOpenCart: (state, boolean) => {
    state.isOpenCart = boolean
  },

  setIsOpenSelect: (state, boolean) => {
    state.isOpenSelect = boolean
  },

  setIsFormSent: (state, boolean) => {
    state.isFormSent = boolean
  },

  setProductsInCartStorage: (state, products) => {
    if (!products) {
      return
    }
    state.productsInCart = products
    setIsInChart(state.productsInCart, state.cacheProducts)
  },

  setClearProductsInCart: (state) => {
    state.productsInCart = []
    clearInCart(state.cacheProducts)
  }
}
