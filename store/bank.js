const defaultState = {
  banks: null,
}

export const state = () => defaultState

export const mutations = {
  SET_BANKS(state, list) {
    state.banks = list
  },
}

export const actions = {
  async fetchAllBanks({ commit }, dataForm) {
    try {
      const { data }  = await this.$api.get('bank/show', {
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
        },
      })
      commit('SET_BANKS', data)

      return data

    } catch (error) {
      console.log('error', error)
    } 
  },
  async createNewBank({ commit }, newTitleBank) {
    try {
      const { data }  = await this.$api.post('bank/create', newTitleBank, {
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
        },
      })
      // this.fetchAllBanks()

      return data

    } catch (error) {
      console.log('error', error)
    }
  },
}

export const getters = {}
