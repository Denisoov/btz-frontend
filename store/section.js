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
  },
  REMOVE_CATEGORY_IN_SECTION(state, idCategory) {
    state.categories = state.categories.filter((category) => category.id !== idCategory)
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
    try {
      const { id } = rootState.bank.detailBank.sections[state.tabSection]
      const { data } = await this.$api.get(`section/showNotCategory/${id}`)

      commit('SET_FREE_CATEGORIES', data)
    } catch (error) {
      
    }
  },

  async getCategoriesOfSection({ state, commit, rootState }) {
    if (rootState.bank.detailBank.sections.length <= 0) return

    try {
      // Вытягиваем id раздела для первого отображения категорий
      const { id } = rootState.bank.detailBank.sections[state.tabSection]
      const { data } = await this.$api.get(`section/showCategory/${id}`)

      commit('SET_CATEGORIES', data)
    } catch (error) {
      
    }
  },

  async addCategoryInSection({ state, rootState }, idCategory) {
    if (rootState.bank.detailBank.sections.length <= 0) return
    
    try {
      const { id } = rootState.bank.detailBank.sections[state.tabSection]

      await this.$api.get(`section/createCategory/${id}/category/${idCategory}`)

      await dispatch('bank/getDetailBank', id, { root: true })

    } catch (error) {
      
    }
  },

  async removeCategoryInSection({ state, commit }, idCategory) {
    try {
      const { id } = rootState.bank.detailBank.sections[state.tabSection]

      await this.$api.delete(`section/deleteCategory/${id}/category/${idCategory}`)

      commit('REMOVE_CATEGORY_IN_SECTION', idCategory)
    } catch (error) {
      
    }
  }
}

export const getters = {}
