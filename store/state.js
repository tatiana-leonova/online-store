export default {
  products: [],
  cacheProducts: [],
  productCategories: [],
  productsInCart: [],
  sortTypes: [
    {
      type: 'price',
      title: 'цене',
    },
    {
      type: 'rating',
      title: 'популярности',
    },
  ],
  selectedSorting: '',
  activeCategory: '',
  isOpenCart: false,
  isOpenSelect: false,
  isLoading: false,
  isFormSent: false
}
