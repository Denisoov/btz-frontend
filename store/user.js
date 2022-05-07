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
  }
}

export const actions = {
  async signIn({ commit }, dataForm) {
    try {
      const { data } = await this.$api.post('getToken', dataForm)

      this.$cookies.set('jwt_token', data.token)

      commit('SET_JWT_TOKEN', data.token)
    } catch (error) {
      console.log(error)
    }
  },
  
  async registration({ dispatch, rootState  }) {
    try {
      await this.$api.post('registration', rootState.login.loginForm)

      dispatch('login/changeCurrentForm', 'EmailVerify', { root: true })

    } catch (error) {
      console.log(error)
    }
  },

  async exit({ dispatch, rootState  }) {
    try {
      await this.$api.delete('user/dropToken')
      await this.$cookies.remove('jwt_token')

    } catch (error) {
      console.log(error)
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
