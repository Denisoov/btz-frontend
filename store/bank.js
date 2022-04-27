const defaultState = {
  banks: [],
  search: '',
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

  async deleteCurrentBank({ commit }, idBank) {
    try {
      const { data } = await this.$api.delete(`bank/delete/${idBank}`, {
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
        },
      })
      console.log(data)
      commit('REMOVE_BANK', idBank)

    } catch (error) {
      console.log('error', error)
    }
  },

  async getDetailBank({ commit }, idBank) {
    try {
      // const { data } = await this.$api.
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
