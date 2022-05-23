const defaultState = {
  snackbar: {
    isShowSnackbar: false,
    message: 'Что-то пошло не так',
  },
  isLoadingPageBank: false,
  isLoadingPageCategory: false,
  isLoadingPageUnloading: false,
  error: {
    status: null,
    message: null
  },
  contentStatusBanks: null,
  contentStatusCategories: null,
}

export const state = () => defaultState

export const mutations = {
  OPEN_SNACKBAR({ snackbar }, data) {
    snackbar = Object.assign(snackbar, data)
  },
  CLOSE_SNACKBAR(state) {
    state.snackbar.isShowSnackbar = false
  },
  SET_LOADING_STATUS(state, date) {
    state[date.typeLoading] = date.status
  },
  SET_ERROR(state, error) {
    state.error = error
  },
  SET_CONTENT_STATUS(state, status) {
    state.contentStatusBanks = status
  },
  SET_CONTENT_STATUS_CATEGORIES(state, status) {
    state.contentStatusCategories = status
  }
}

export const actions = {}

export const getters = {}
