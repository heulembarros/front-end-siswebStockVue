import * as types from './mutations-types'

export default {
    [types.GET_PRODUCTS](state, payload){
        state.products = payload
    },
    [types.ADD_PRODUCTS](state, payload){
        state.products = payload
    },
    [types.GET_CATEGORIES](state, payload){
        state.categories = payload
    }
}