export default {
  async setProductCategories({commit, dispatch}) {
    await this.$axios.$get('https://frontend-test.idaproject.com/api/product-category').then(response => {
      commit('setProductCategories', response)
      return dispatch("setProducts", response[0].id)
    }).catch(error => {
      console.log(error)
    })
  },

  async setProducts({state, commit}, category) {
    await this.$axios.$get('https://frontend-test.idaproject.com/api/product', {
      params: {
        category: category
      }
    }).then(response => {
      commit('setProducts', {products: response, category: category})
      commit('setSortProducts', state.selectedSorting.type)
    }).catch(error => {
      console.log(error)
    })
  },

  setAddProductToCart({commit}, product) {
    const storageData = JSON.parse(localStorage.getItem('cartProducts'))
    let result
    if (storageData != null) {
      result = [product].concat(storageData)
    } else {
      result = [product]
    }

    localStorage.setItem("cartProducts", JSON.stringify(result));
    commit('setAddProductToCart', product)
  },

  setRemoveProductFromCart({commit}, id) {
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    cartProducts = cartProducts.filter((item) => {
      return item.id !== id;
    });
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    commit('setRemoveProductFromCart', id)
  },

  setChangeCartState({commit}, {id, isInCart}) {
    commit('setChangeCartState', {id, isInCart})
  },

  setIsOpenCart({commit}, boolean) {
    commit('setIsOpenCart', boolean)
  },

  setIsFormSent: ({commit}, boolean) => {
    commit('setIsFormSent', boolean)
  },

  setIsOpenSelect({commit}, boolean) {
    commit('setIsOpenSelect', boolean)
  },

  setProductsInCartStorage({commit}) {
    commit('setProductsInCartStorage', JSON.parse(localStorage.getItem('cartProducts')))
  },

  setClearProductsInCart: ({commit}) => {
    localStorage.removeItem("cartProducts");
    commit('setClearProductsInCart')
  },
}
