const defaultState = {
  categories: [],
  detailCategory: {
    name: null
  },
  search: '',
}

export const state = () => defaultState

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_DETAIL_CATEGORY(state, detail) {
    state.detailCategory = detail
  },
  SET_NEW_TITLE_CATEGORY(state, name) {
    state.detailCategory = Object.assign(state.detailCategory, name)
  },
  SET_NEW_SEARCH(state, str) {
    state.search = str
  },
  REMOVE_CATEGORY(state, idCategory) {
    state.categories = state.categories.filter((category) => category.id !== idCategory)
  },
}

export const actions = {
  async createNewCategory({ dispatch }, newCategory) {
    try {
      await this.$api.post(`category/create`, newCategory)

      await dispatch('fetchAllCategories')
    } catch (error) {}
  },

  async fetchAllCategories({ commit }) {
    try {
      const { data } = await this.$api.get(`category/show`)

      commit('SET_CATEGORIES', data)
    } catch (error) {}
  },

  async getDetailCategory({ commit }, idCategory) {
    try {
      const { data } = await this.$api.get(`category/showDetail/${idCategory}`)

      commit('SET_DETAIL_CATEGORY', data)
    } catch (error) {}
  },

  async deleteCurrentCategory({ commit }, idCategory) {
    try {
      await this.$api.delete(`category/delete/${idCategory}`)
      commit('REMOVE_CATEGORY', idCategory)

    } catch (error) {
      console.log('error', error)
    }
  },

  async changeTitleCategory({ state }, name) {
    const { id } = state.detailCategory

    await this.$api.put(`category/update/${id}/`, name)
  }
}

export const getters = {
  foundCategories(state) {
    const categories = state.categories

    if (state.search === '') return categories
    
    return categories.filter(category => {
      return category.name.toLowerCase().includes(state.search.toLowerCase())
    })
  }
}
