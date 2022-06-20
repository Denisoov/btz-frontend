import { ContentStatuses } from '@/helpers/content-statuses'

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
    banks.push(newBank)
  },
  REMOVE_BANK(state, idBank) {
    state.banks = state.banks.filter(
      (bank) => bank.id !== idBank)
  },
  REMOVE_SECTION_IN_BANK(state, idSection) {
    state.detailBank.sections = state.detailBank.sections.filter(
      (section) => section.id !== idSection)
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
  async fetchAllBanks({ commit }) {
    try {
      const { data } = await this.$api.get('bank/show')

      commit('SET_BANKS', data)
      commit(
        'SET_CONTENT_STATUS', 
        data.length !== 0 ? ContentStatuses.Ready : ContentStatuses.Empty,
        { root: true }
      )

    } catch (error) {
      commit('SET_CONTENT_STATUS', ContentStatuses.Error, { root: true })
    }
    
  },
  async createNewBank({ dispatch }, newBank) {
    try {
      await this.$api.post('bank/create', newBank)

      dispatch('fetchAllBanks')
    } catch (error) {
      console.log('error', error)
    }
  },
  
  async deleteCurrentBank({ commit, state }, idBank) {
    try {
      await this.$api.delete(`bank/delete/${idBank}`)

      commit('REMOVE_BANK', idBank)
      if (state.banks.length === 0) commit('SET_CONTENT_STATUS', ContentStatuses.Empty, { root: true })
    } catch (error) {
      console.log('error', error)
    }
  },

  async fetchStatisticBanks({ commit }) {
    try {
      commit(
        'SET_LOADING_STATUS', 
        { typeLoading: 'isLoadingPageUnloading', status: true }, { root: true }
      )

      const { data } = await this.$api.get('bank/showUnload')

      commit('SET_STATISTIC_BANKS', data)
      commit(
        'SET_LOADING_STATUS', 
        { typeLoading: 'isLoadingPageUnloading', status: false }, { root: true }
      )
    } catch (error) {
      
    }
  },

  async getDetailBank({ commit }, idBank) {
    try {
      commit(
        'SET_LOADING_STATUS', 
        { typeLoading: 'isLoadingPageBank', status: true }, { root: true }
      )
      
      const { data } = await this.$api.get(`bank/showDetails/${idBank}`)

      commit('SET_DETAIL_BANK', data)
      commit(
        'SET_LOADING_STATUS', 
        { typeLoading: 'isLoadingPageBank', status: false }, { root: true }
      )
    } catch (error) {
      
    }
  },

  async changeTitleBank({ rootState }, name) {
    try {
      const { id } = rootState.bank.detailBank
      
      await this.$api.put(`bank/update/${id}`, name)

    } catch (error) {
      
    }
  },

  unloadBank({}, idBank) {
    try {
      const file = this.$api.get(`files/unloadingBank/bank/${idBank}`, {}, {
        responseType: "blob",
      })

      return file
    } catch (error) {
      
    }
  },

  unloadPassport({}, {idBank, formPassport}) {
    try {
      const file = this.$api.post(`files/passport/${idBank}`, {...formPassport}, {
        responseType: "blob",
      })

      return file
    } catch (error) {
      
    }
  },
  async loadNewBank({ dispatch }, formNewBtz) {
    try {
      await this.$api.post(`files/loadingBank`, formNewBtz)

      await dispatch('fetchAllBanks')
      
    } catch (error) {
      console.log(error)
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
