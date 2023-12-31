//store/modules/auth.js
import Vue from "vue";
const state = {
  status: '',
  token: '',
  user : {},
  favorites: [],
  errors: [],
  cources: [],
};
const getters = {
  isLoggedIn: state => state.token,
  authStatus: state => state.status,
  isAdmin: state => state.user.status == 2,
  errors: state => state.errors,
};
const actions = {
  ChangeStatus({
    commit
  }) {
    commit('change_status');
  },
  async Register({
    commit
  }, data) {

    commit('auth_request')
    const response = await fetch(`${process.env.VUE_APP_ROOT_API}/register `, {
      method: 'POST',
      body: data,
    })
    let resp = await response.json();

    if (resp.status == true) {
      Vue.$toast.success('Успешная регистрация', {
        timeout: 2000
      });
    } else {
      commit('auth_error', resp.errors);
      Vue.$toast.error(resp.errors.name, {
        timeout: 2000
      });
    }
  },
  async LogIn({
    commit
  }, data) {
    commit('auth_request');
    const response = await fetch(`${process.env.VUE_APP_ROOT_API}/login`, 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })

    let resp = await response.json();
    if (resp.status == true) {
      const token = resp.token;
      const user = resp.user;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      commit('auth_success', { token, user })
      Vue.$toast.success('Успешная авторизация', {
        timeout: 2000,
    })
    } else {
      commit('auth_error', resp.errors);
      Vue.$toast.error('Вход невыполнен', {
        timeout: 2000,
      })
    }
  },
  async LogOut({ commit }) {
    const response = await fetch(`${process.env.VUE_APP_ROOT_API}/logout`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
    commit('LogOut')
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  favoritePosts({
    commit
  }, {
    userId,
    postId
  }) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({
          url: `${process.env.VUE_APP_ROOT_API}/favorite/${userId}/${postId}`,
          method: 'POST'
        })
        .then(resp => {
          const favorites = resp.data.favorites
          commit('favorite_change')
          commit('favorites', favorites)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          reject(err)
        })
    })
  },
  async GetCources({ commit }) {
    const response = await fetch(`${process.env.VUE_APP_ROOT_API}/course`, {
      method: 'GET'
    });
    const cource = await response.json();
    commit('get_cources', cource)
  }
};
const mutations = {
  auth_request(state) {
    state.status = 'loading'
  },
  get_cources(state, cources) {
    state.cources = cources
  },
  auth_success(state, { token, user }) {
    state.status = 'success';
    state.token = token;
    state.user = user
  },
  change_status(state) {
    state.status = '';
    state.errors = []
  },
  user(state, user) {
    state.user = user;
  },
  favorites(state, favorites) {
    state.favorites = favorites;
  },
  favorite_change(state) {
    state.status = 'success';
  },
  auth_error(state, errors) {
    state.status = 'error',
      state.errors = errors
  },
  LogOut(state) {
    state.status = ''
    state.token = ''
    state.user = ''
    state.favorites = ''
  },
};
export default {
  state,
  getters,
  actions,
  mutations
};