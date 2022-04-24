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
  SET_JWT_TOKEN({ token }, data) {
    token = data
  }
}

export const actions = {
  async signIn({ commit }, dataForm) {
    try {
      const { data } = await this.$api.post('getToken', dataForm)

      commit('SET_JWT_TOKEN', data.token)
    } catch (error) {
      console.log(error)
    }
  },
  
  async registration({ dispatch, commit, rootState  }) {
    try {
      const { data } = await this.$api.post('registration', rootState.login.loginForm)

      dispatch('login/changeCurrentForm', 'EmailVerify', { root: true })

    } catch (error) {
      console.log(error)
    }
  }
}

export const getters = {}
