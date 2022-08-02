import axios from "axios"

import { BASE_URL } from './../../../constantes.js'

export default {
    state: { categories: []},

    mutations: {
        getCategoriesM(state, payload){
            state.categories = payload
        }
    },

    actions: {
        getCategories( { commit } ){
            axios.get(BASE_URL+'/categories').then(resp => {
                commit('getCategoriesM', resp.data)
            })
        }
    }
}