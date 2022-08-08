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
            var userinfo = JSON.parse(localStorage.getItem('userinfo'))
            const headers = { Authorization: `Bearer ${userinfo.token}` }
            axios.get(BASE_URL+'/categories', { headers }).then(resp => {
                commit('getCategoriesM', resp.data)
            })
        }
    }
}