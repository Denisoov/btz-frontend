export default ({ $axios, store, $cookies }, inject) => {

    const api = $axios.create()
    api.setBaseURL('http://127.0.0.1:8000/api/')


    api.onRequest(config => {
      config.headers.Authorization = `Bearer ${$cookies.get('jwt_token')}`
    })

    api.interceptors.response.use(
      response => response,
      error => {
        if (!error.response) {
            console.log("Пожалуйста проверьте ваше соединение.");
        }
        else {
          switch (error?.response?.status) {
            case 401:
              store.dispatch('user/exit')
              break;
          
            case 422: 
              store.commit('OPEN_SNACKBAR', {
                isShowSnackbar: true,
                message: 'Некорректные данные',
              })

              break;

            default:
              store.commit('OPEN_SNACKBAR', {
                isShowSnackbar: true,
                message: 'Что-то пошло не так',
              }),
              store.commit('SET_ERROR', {
                status: error.response.status,
                message: 'Что-то пошло не так',
              })

              break;
          }
        }
        return error
      }
  )

  inject('api', api)
}