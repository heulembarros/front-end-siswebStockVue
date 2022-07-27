import * as types from './mutations-types'
import Axios from 'axios'

export const  getProducts = ({ commit }) => {
    Axios.get('http://localhost:8081/products').then((resp)=> {
      commit(types.GET_PRODUCTS, resp.data)
    })
  }
