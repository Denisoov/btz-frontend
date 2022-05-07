const defaultState = {
  banks: [],
  search: '',
  detailBank: {},
  statisticBanks: []
}

export const state = () => defaultState

export const mutations = {
  SET_BANKS(state, list) {
    state.banks = list
  },
  UPDATE_BANKS({ banks }, newBank) {
    banks.unshift(newBank)
  },
  REMOVE_BANK(state, idBank) {
    state.banks = state.banks.filter((bank) => bank.id !== idBank)
  },
  SET_NEW_SEARCH(state, str) {
    state.search = str
  },
  SET_DETAIL_BANK(state, detail) {
    state.detailBank = detail
  },
  SET_NEW_TITLE_BANK(state, name) {
    state.detailBank = Object.assign(state.detailBank, name)
  },
  SET_STATISTIC_BANKS(state, banks) {
    state.statisticBanks = banks
  }
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

      commit('UPDATE_BANKS', data)

    } catch (error) {
      console.log('error', error)
    }
  },

  async fetchStatisticBanks({ commit }) {
    try {
      const { data } = await this.$api.get('bank/showUnload', {
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
        },
      })
      commit('SET_STATISTIC_BANKS', data)
    } catch (error) {
      
    }
  },

  async deleteCurrentBank({ commit }, idBank) {
    try {
      await this.$api.delete(`bank/delete/${idBank}`, {
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
        },
      })
      commit('REMOVE_BANK', idBank)

    } catch (error) {
      console.log('error', error)
    }
  },

  async getDetailBank({ commit }, idBank) {
    try {
      const { data } = await this.$api.get(`bank/showDetails/${idBank}`, {
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
        },
      })

      commit('SET_DETAIL_BANK', data)
    } catch (error) {
      
    }
  },

  async changeTitleBank({ rootState }, name) {
    try {
      const { id } = rootState.bank.detailBank
      
      await this.$api.put(`bank/update/${id}/`, name, {
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
        },
      })

    } catch (error) {
      
    }
  },

  unloadBank({}, idBank) {
    try {
      const file = this.$api.post(`files/unloadingBank/bank/${idBank}`, {}, {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
        },
      })

      return file
    } catch (error) {
      
    }
  }
}

export const getters = {
  foundBanks(state) {
    const banks = state.banks

    if (state.search === '') return banks
    
    return banks.filter(bank => {
      return bank.name.toLowerCase().includes(state.search.toLowerCase())
  })
  }
}
