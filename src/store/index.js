import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        saveFormData({ commit }, formData) {
            commit('addFormData', formData)
        }
    },
    mutations: {
        addFormData(state, formData) {
            state.formData = formData
        }
    },
    state: {
        formData: {},
        locations: [
            {
                country: 'Some country 1',
                cities: ['Some city 11', 'Some city 12', 'Some city 13', 'Some city 14', 'Some city 15', 'Some city 16']
            },
            {
                country: 'Some country 2',
                cities: ['Some city 21', 'Some city 22', 'Some city 23', 'Some city 24', 'Some city 25', 'Some city 26']
            },
            {
                country: 'Some country 3',
                cities: ['Some city 31', 'Some city 32', 'Some city 33', 'Some city 34', 'Some city 35', 'Some city 36']
            },
            {
                country: 'Some country 4',
                cities: ['Some city 41', 'Some city 42', 'Some city 43', 'Some city 44', 'Some city 45', 'Some city 46']
            },
            {
                country: 'Some country 5',
                cities: ['Some city 51', 'Some city 52', 'Some city 53', 'Some city 54', 'Some city 55', 'Some city 56']
            }
        ]
    },
    getters: {
        getFormData(state) {
            return state.formData
        },
        getLocations(state) {
            return state.locations
        }
    }
})
