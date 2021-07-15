import http from '../../service/http';
// import router from '../router';

const state = {
//   error: [],
  messageList: [],
};
const getters = {
//   error() {
//     return state.error;
//   },
  messageList() {
    return state.messageList;
  },
};
const mutations = {
  setError(_state, data) {
    state.error.push(data);
  },
  clearError() {
    state.error = [];
  },
  setMessageList(_state, data) {
    state.messageList = data;
  },
};
const actions = {
//   login({ commit }, params) {
//     http.post('authentication/login', params).then((result) => {
//       localStorage.setItem('token', result.data.data.token);
//       router.go();
//     }).catch((err) => {
//       commit('setError', err.response.data.errors[0].message);
//     });
//   },
//   clearError({ commit }) {
//     commit('clearError');
//   },
//   parseUserInfo({ commit }) {
//     const token = localStorage.getItem('token');
//     const userInfo = userMixin.parseToken(token);
//     localStorage.setItem('expireAt', userInfo.exp);
//     commit('setUserInfo', userInfo);
//   },
    getMessageList({commit}) {
        http.get('/api/v1/messages/text').then((result)=> {
            commit('setMessageList', result.data.data)
            console.log(result)
        }).catch((err) => {
            commit('setError', err.response.data.error[0].message)
            console.log(err)
        })
    },
    postMessageList({commit}, params) {
        http.post('/api/v1/messages/text', params).then((result) => {
            commit
            console.log(result)
        }).catch((err) => {
            commit('setError', err.response.data.error[0].message)
            console.log(err)
        })
    }
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};