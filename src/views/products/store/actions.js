import * as types from './mutations-types'
import Axios from 'axios'

import { BASE_URL } from './../../../constantes.js'

export const  getProducts = ({ commit }) => {
    Axios.get(BASE_URL+'/products').then((resp)=> {
      commit(types.GET_PRODUCTS, resp.data)
    })
  }

  export const addProducts = ({ commit }, add ) => {
    Axios.post('http://localhost:8083/products', add ).then((resp) => {
      commit(types.ADD_PRODUCTS, resp.data)
    })
  }
