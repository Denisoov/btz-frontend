const defaultState = {
  categories: [],
  freeCategories: [],
  tabSection: 0,
}

export const state = () => defaultState

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_FREE_CATEGORIES(state, freeCategories) {
    state.freeCategories = freeCategories
  },
  SET_TAB_SECTION(state, tab) {
    state.tabSection = tab
  }
}

export const actions = {
  async createNewSection({ dispatch, rootState }, newSection) {
    try {
      const { id } = rootState.bank.detailBank

      await this.$api.post(`section/create/${id}`, newSection)

      await dispatch('bank/getDetailBank', id, { root: true })
      
    } catch (error) {
      
    }
  },
  async getFreeCategories({ state, commit, rootState }) {

    const { id } = rootState.bank.detailBank.sections[state.tabSection]

    try {
      const { data } = await this.$api.get(`section/showNotCategory/${id}`)

      commit('SET_FREE_CATEGORIES', data)
    } catch (error) {
      
    }
  },

  async getCategoriesOfSection({ state, commit, rootState }) {

    if (rootState.bank.detailBank.sections.length <= 0) return

    // Вытягиваем id раздела для первого отображения категорий
    const { id } = rootState.bank.detailBank.sections[state.tabSection]

    try {
      const { data } = await this.$api.get(`section/showCategory/${id}`)

      commit('SET_CATEGORIES', data)
    } catch (error) {
      
    }
  }
}

export const getters = {}
