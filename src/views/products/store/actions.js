import * as types from './mutations-types'
import Axios from 'axios'

import { BASE_URL } from './../../../constantes.js'

export const getProducts = ({ commit }) => {
  Axios.get(BASE_URL + '/products').then((resp) => {
    commit(types.GET_PRODUCTS, resp.data)
  })
}

export const addProducts = ({ commit }, add) => {
  Axios.post(BASE_URL + '/products', add).then((resp) => {
    commit(types.ADD_PRODUCTS, resp.data)
  })
}

export const getCategories = ({ commit }) => {
  Axios.get(BASE_URL + '/categories').then((resp) => {
    commit(types.GET_CATEGORIES, resp.data)
  })
}

export const findProductById = ({ commit }, id) => {
  Axios.get(BASE_URL + '/products/' + id).then((resp) => {
    commit(types.FIND_PRODUCTS, resp.data)
  })
}

export const updateProducts = ({ commit }, add ) => {
  Axios.put(BASE_URL + '/products/' + add.id, add).then((resp) => {
    commit(types.UPDATE_PRODUCTS, resp.data)
  })
}

export const deleteProducts = ({ commit }, id) => {
  Axios.delete(BASE_URL + '/products/' + id).then((resp) => {
    commit(types.DELETE_PRODUCTS, resp.data)
  })
}