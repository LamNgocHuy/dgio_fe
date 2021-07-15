import Vuex from 'vuex'
import Vue from 'vue'
import simulator from './modules/simulator'
import loader from './modules/loader'
import message from './modules/message'

Vue.use(Vuex)

export default new Vuex.Store ({
    modules: {
        SIMULATOR: simulator, //namespaced: file import
        LOADER: loader,
        MESSAGE: message
    }
});