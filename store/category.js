const defaultState = {
  categories: [],
  detailCategory: {
    name: null
  }
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
  }
}

export const actions = {
  async createNewCategory({ dispatch }, newCategory) {
    try {
      await this.$api.post(`category/create`, newCategory, {
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
        },
      })

      await dispatch('fetchAllCategories')
    } catch (error) {}
  },

  async fetchAllCategories({ commit }) {
    try {
      const { data } = await this.$api.get(`category/show`, {
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
        },
      })

      commit('SET_CATEGORIES', data)
    } catch (error) {}
  },

  async getDetailCategory({ commit }, idCategory) {
    try {
      const { data } = await this.$api.get(`category/showDetail/${idCategory}`, {
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
        },
      })

      commit('SET_DETAIL_CATEGORY', data)
    } catch (error) {}
  },

  async changeTitleCategory({ state }, name) {
    const { id } = state.detailCategory

    await this.$api.put(`category/update/${id}/`, name, {
      headers: {
        Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
      },
    })
  }
}

export const getters = {}
