export default ({ redirect, $cookies, route }) => {
  if ($cookies.get('jwt_token') && route.name === 'login') {
    redirect('/')
  }
  else if (!$cookies.get('jwt_token') && route.name !== 'login') {
    redirect('/login')
  }
}
