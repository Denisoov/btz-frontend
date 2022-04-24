const defaultState = {
  isLoading: false,
  currentForm: 'SignInForm',
  loginForm: {
    first_name: '',
    last_name: '',
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
  SET_LAST_NAME: (state, lastName) => {
    state.loginForm.last_name = lastName
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

    switch (formName) {
      case 'SignInForm':
        commit('RESET_LOGIN_DATA', defaultState.loginForm)
      case 'LogInForm':
        commit('RESET_LOGIN_DATA', defaultState.signInForm)
      case 'EmailVerify':
        commit('RESET_LOGIN_DATA', defaultState.loginForm)
        commit('RESET_LOGIN_DATA', defaultState.logisignInFormnForm)
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
