import * as types from './mutations-types'
import Axios from 'axios'

import { BASE_URL } from './../../../constantes.js'

export const getProducts = ({ commit }) => {

  var userinfo = JSON.parse(localStorage.getItem('userinfo'))
  const headers = { Authorization: `Bearer ${userinfo.token}` }

  Axios.get(BASE_URL + '/products', {headers}).then((resp) => {
    commit(types.GET_PRODUCTS, resp.data)
  })
}

export const addProducts = ({ commit }, add) => {

  var userinfo = JSON.parse(localStorage.getItem('userinfo'))
  const headers = { Authorization: `Bearer ${userinfo.token}` }

  Axios.post(BASE_URL + '/products', add, {headers}).then((resp) => {
    commit(types.ADD_PRODUCTS, resp.data)
  })
}

// export const getCategories = ({ commit }) => {

//   var userinfo = JSON.parse(localStorage.getItem('userinfo'))
//   const headers = { Authorization: `Bearer ${userinfo.token}` }

//   Axios.get(BASE_URL + '/categories', {headers}).then((resp) => {
//     commit(types.GET_CATEGORIES, resp.data)
//   })
// }

export const findProductById = ({ commit }, id) => {

  var userinfo = JSON.parse(localStorage.getItem('userinfo'))
  const headers = { Authorization: `Bearer ${userinfo.token}` }

  Axios.get(BASE_URL + '/products/' + id + '/', {headers}).then((resp) => {
    const newdados = {
      id:resp.data.id,
      name:resp.data.name,
      amount:resp.data.amount,
      price:resp.data.price.toFixed(2)
      }    
    commit(types.FIND_PRODUCTS, newdados)
    // commit(types.FIND_PRODUCTS, resp.data)
  })
}

export const updateProducts = ({ commit }, add ) => {

  var userinfo = JSON.parse(localStorage.getItem('userinfo'))
  const headers = { Authorization: `Bearer ${userinfo.token}` }

  Axios.put(BASE_URL + '/products/' + add.id, add, {headers}).then((resp) => {
    commit(types.UPDATE_PRODUCTS, resp.data)
  })
}

export const deleteProducts = ({ commit }, id) => {

  var userinfo = JSON.parse(localStorage.getItem('userinfo'))
  const headers = { Authorization: `Bearer ${userinfo.token}` }

  Axios.delete(BASE_URL + '/products/' + id + '/', {headers}).then((resp) => {
    commit(types.DELETE_PRODUCTS, resp.data)
  })
}