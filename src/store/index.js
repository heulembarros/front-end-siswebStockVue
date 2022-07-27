import Vuex from 'vuex'

import {store as products} from './../views/products'
import {store as categories} from './../views/categories'


const store = new Vuex.Store({
  modules: {
    categories,
    products
  }
})

export default store