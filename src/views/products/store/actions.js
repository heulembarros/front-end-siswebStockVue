import * as types from './mutations-types'
import Axios from 'axios'

import { BASE_URL } from './../../../constantes.js'

export const getProducts = ({ commit }) => {

  var token = localStorage.getItem('token')
  const headers = { Authorization: `Bearer ${token}` }

  Axios.get(BASE_URL + '/products', {headers}).then((resp) => {
    commit(types.GET_PRODUCTS, resp.data)
  })
}

export const addProducts = ({ commit }, add) => {

  var token = localStorage.getItem('token')
  const headers = { Authorization: `Bearer ${token}` }

  Axios.post(BASE_URL + '/products', add, {headers}).then((resp) => {
    commit(types.ADD_PRODUCTS, resp.data)
  })
}

export const getCategories = ({ commit }) => {

  var token = localStorage.getItem('token')
  const headers = { Authorization: `Bearer ${token}` }

  Axios.get(BASE_URL + '/categories', {headers}).then((resp) => {
    commit(types.GET_CATEGORIES, resp.data)
  })
}

export const findProductById = ({ commit }, id) => {

  var token = localStorage.getItem('token')
  const headers = { Authorization: `Bearer ${token}` }

  Axios.get(BASE_URL + '/products/' + id + '/', {headers}).then((resp) => {
    commit(types.FIND_PRODUCTS, resp.data)
  })
}

export const updateProducts = ({ commit }, add ) => {

  var token = localStorage.getItem('token')
  const headers = { Authorization: `Bearer ${token}` }

  Axios.put(BASE_URL + '/products/' + add.id, add, {headers}).then((resp) => {
    commit(types.UPDATE_PRODUCTS, resp.data)
  })
}

export const deleteProducts = ({ commit }, id) => {

  var token = localStorage.getItem('token')
  const headers = { Authorization: `Bearer ${token}` }

  Axios.delete(BASE_URL + '/products/' + id + '/', {headers}).then((resp) => {
    commit(types.DELETE_PRODUCTS, resp.data)
  })
}