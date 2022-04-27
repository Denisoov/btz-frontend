export default $axios => resource => ({
    signIn() {
      return $axios.$get(`${resource}`)
    },
  
    registration(id) {
      return $axios.$get(`${resource}/${id}`)
    },
  })