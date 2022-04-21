const defaultState = {
  isLoading: false,
  currentForm: 'SignInForm',
  loginForm: {
    first_name: '',
    second_name: '',
    patronymic: '',
    email: '',
    password: '',
  },
  signInForm: {
    email: '',
    password: '',
  },
}

export const state = () => defaultState

export const mutations = {
  SET_LOADING: (state) => {
    state.isLoading = !state.isLoading
  },
  SET_LOGIN_FORM: (state, first_name) => {
    state.loginForm.first_name = first_name
  },
  SET_CURRENT_FORM: (state, currentForm) => {
    state.currentForm = currentForm
  },
  RESET_LOGIN_DATA: (state) => {
    Object.keys(state.loginForm).forEach((key) => {
      state.loginForm[key] = ''
    })
  },
  RESET_SIGN_IN_DATA: (state) => {
    Object.keys(state.signInForm).forEach((key) => {
      state.loginForm[key] = ''
    })
  },
  SET_SECOND_NAME: (state, secondName) => {
    state.loginForm.second_name = secondName
  },
  SET_FIRST_NAME: (state, firstName) => {
    state.loginForm.first_name = firstName
  },
  SET_PATRONYMIC: (state, patronymic) => {
    state.loginForm.patronymic = patronymic
  },
  SET_EMAIL_LOGIN: (state, email) => {
    state.loginForm.email = email
  },
  SET_PASSWORD: (state, password) => {
    state.loginForm.password = password
  },
  // для формы авторизации
  SET_EMAIL_SIGNIN: (state, email) => {
    state.signInForm.email = email
  },
  SET_PASSWORD_SIGNIN: (state, password) => {
    state.signInForm.password = password
  },
}

export const actions = {
  changeCurrentForm({ commit }, formName) {
    commit('SET_CURRENT_FORM', formName)

    if (formName === 'SignInForm') {
      commit('RESET_LOGIN_DATA', defaultState.loginForm)
    } else {
      commit('RESET_SIGN_IN_DATA', defaultState.signInForm)
    }
  },
  clearState({ commit }) {
    commit('RESET_LOGIN_DATA')
    commit('RESET_SIGN_IN_DATA')
  },

}

export const getters = {
  currentForm: ({ currentForm }) => {
    return currentForm
  },
}