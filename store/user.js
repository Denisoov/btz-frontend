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
      console.log(dataForm)
      const { data } = await this.$api.post('getToken', dataForm)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
}

export const getters = {}
