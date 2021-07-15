
const state = {
    isLoading: false,
}

const getters = {
    isLoading() {
        return state.isLoading
    }
}

const mutations = {
    showLoader(state) {
        state.isLoading = true
    },
    hideLoader(state) {
        state.isLoading = false
    },
}

const actions = {
    showLoader({commit}) {
        commit('showLoader')
    },
    hideLoader({commit}) {
        commit('hideLoader')
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};