import { ContentStatuses } from '@/helpers/content-statuses'

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
    state.categories = state.categories.filter(
      (category) => category.id !== idCategory)
  },
}

export const actions = {
  async fetchAllCategories({ commit }) {
    try {
      const { data } = await this.$api.get(`category/show`)

      commit('SET_CATEGORIES', data)
      commit(
        'SET_CONTENT_STATUS_CATEGORIES', 
        data.length !== 0 ? ContentStatuses.Ready : ContentStatuses.Empty,
        { root: true }
      )
    } catch (error) {
      commit('SET_CONTENT_STATUS_CATEGORIES', ContentStatuses.Error,{ root: true })
    }
  },
  
  async createNewCategory({ dispatch }, newCategory) {
    try {
      await this.$api.post(`category/create`, newCategory)

      dispatch('fetchAllCategories')
    } catch (error) {}
  },

  async deleteCurrentCategory({ commit, state }, idCategory) {
    try {
      await this.$api.delete(`category/delete/${idCategory}`)
      commit('REMOVE_CATEGORY', idCategory)

      if (state.categories.length === 0) commit('SET_CONTENT_STATUS_CATEGORIES', ContentStatuses.Empty, { root: true })
    } catch (error) {
      console.log('error', error)
    }
  },

  async getDetailCategory({ commit }, idCategory) {
    try {
      commit(
        'SET_LOADING_STATUS', 
        { typeLoading: 'isLoadingPageCategory', status: true }, { root: true }
      )
      const { data } = await this.$api.get(`category/showDetail/${idCategory}`)

      commit('SET_DETAIL_CATEGORY', data)
    } catch (error) {}
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
