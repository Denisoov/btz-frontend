const defaultState = {
  categories: {},
}

export const state = () => defaultState

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  async createNewSection({ commit, rootState }, newSection) {
    const { id } = rootState.bank.detailBank

    try {
      const { data } = await this.$api.post(
        `section/create/${id}`, newSection, {
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
        },
      })
      
    } catch (error) {
      
    }
  },

  async getCategoriesOfSection({ commit, rootState }, idSection) {
    try {
      const { data } = await this.$api.get(
        `section/showCategory/${idSection}`, {
          headers: {
            Authorization: `Bearer ${this.$cookies.get('jwt_token')}`,
          },
        }
      )

      commit('SET_CATEGORIES', data)
    } catch (error) {
      
    }
  }
}

export const getters = {}
