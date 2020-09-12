import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawer: null,
        mini: null
    },
    getters: {
        getClickNavigation(state) {
            return state.drawer
        }
    },
    mutations: {
        toggleNavigation(state, payload){
            state.mini = payload
            console.log('CHAY VAO DAY ROI')
        },
    },
});
