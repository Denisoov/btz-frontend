const defaultState = {
  token: null,
  user: {
    group_id: null,
    first_name: null,
    second_name: null,
    patronymic: null,
    email: null,
  },
}

export const state = () => defaultState

export const mutations = {
  SET_JWT_TOKEN(state, data) {
    state.token = data
  },
}

export const actions = {
  async signIn({ commit }, dataForm) {
    commit('login/SET_LOADING', true, { root: true })

    try {

      const { data } = await this.$api.post('getToken', dataForm)

      await this.$cookies.set('jwt_token', data.token)

      await commit('SET_JWT_TOKEN', data.token)
      await commit('login/RESET_STATE', {}, { root: true })
    } catch (error) {
      console.log(new Error('Запрос не выполнен'))
    }
    commit('login/SET_LOADING', false, { root: true })
  },
  
  async registration({ dispatch, commit, rootState  }) {
    commit('login/SET_LOADING', true, { root: true })

    try {
      const { data } = await this.$api.post('registration', rootState.login.loginForm)

      if (data)  await dispatch('login/changeCurrentForm', 'SignInForm', { root: true })

    } catch (error) {
      console.log(new Error('Запрос не выполнен'))
    }
    commit('login/SET_LOADING', false, { root: true })
  },

  async exit() {
    try {
      await this.$api.delete('user/dropToken')
      await this.$cookies.remove('jwt_token')

    } catch (error) {
      console.log(error)
      this.$cookies.remove('jwt_token')
    }
  },

  async fetchUserInfo() {
    try {
      const { data } = await this.$api.get('user/me', {
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
        },
      })

      return data

    } catch (error) {
      console.log(error)
    }
  }
}

export const getters = {}
