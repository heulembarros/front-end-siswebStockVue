import axios from "axios"

export default {
    state: { categories: []},

    mutations: {
        getCategoriesM(state, payload){
            state.categories = payload
        }
    },


    actions: {
        getCategories( { commit } ){
            axios.get('http://localhost:8081/categories').then(resp => {
                commit('getCategoriesM', resp.data)
                console.log(resp.data)
            })
        }
    }
}