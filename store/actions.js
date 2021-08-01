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
}
