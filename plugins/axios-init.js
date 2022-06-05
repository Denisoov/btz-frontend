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
          switch (error.response.status) {
            case 401:
              store.dispatch('user/exit')
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
          return 
        }
        return error
      }
  )

  //   api.onError(error => {
  //     console.log(error?.response.status)
  //     if (error.response.status === 401) {
  //         store.dispatch('user/exit')
  //     }
  //     else if (error.request) {
  //       store.dispatch('user/exit')
  //     }
  //     else if (error?.response.status === 500) {
  //       const { data } = error.response
      
  //       store.commit('OPEN_SNACKBAR', {
  //           isShowSnackbar: true,
  //           message: data.error,
  //       })
  //     }
  // })

  inject('api', api)
}