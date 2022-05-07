export default ({ $axios, redirect, store, $cookies }, inject) => {

    const api = $axios.create()
    api.setBaseURL('http://127.0.0.1:8000/api/')


    api.onRequest(config => {
      config.headers.Authorization = `Bearer ${$cookies.get('jwt_token')}`
    })

    // api.interceptors.response.use(
    //     response => {
    //       if (response.status === 200) {
    //         if (response.request.responseURL && response.request.responseURL.includes('login')) {
    //         }
    //       }
    //       return response
    //     }
    //   )

      api.onError(error => {
        if (error.response && error.response.status === 404) {
            const { data } = error.response

            store.commit('OPEN_SNACKBAR', {
                isShowSnackbar: true,
                message: data.error,
            })
          }
        if (error.response && error.response.status === 404) {
        const { data } = error.response
        
        store.commit('OPEN_SNACKBAR', {
            isShowSnackbar: true,
            message: data.error,
        })
        }
    })

    inject('api', api)
}