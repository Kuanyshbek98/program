export default function ({
  $axios,
  redirect,
  $cookies
}, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    // timeout: 10000,
    headers: {
      common: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': 'http://185.125.90.11:8081',
        'Access-Control-Allow-Credentials': 'true'
      }

    }
  })

  // Set baseURL to something different
  api.setBaseURL('http://185.125.90.11:8081')
  // if ($cookies.get('cyber-token')) {
  api.setToken('Bearer 12|BX2Re9gwLRyPqKD2ZP6qbSczof0CUOyJBddarvdf')
  // }

  api.onError((error) => {
    if (error.response.status === 'ERR_CONNECTION_RESET') {
      redirect('/sorry')
    }
    if (error.response.status === 500) {
      redirect('/error/500')
    } else if (error.response.status === 401) {
      redirect('/error/401')
    } else if (error.response.status === 429) {
      redirect('/error/500')
      // eslint-disable-next-line no-empty
    } else if (error.response.status === 400) {

      // eslint-disable-next-line no-empty
    } else if (error.response.status === 404) {

    } else {
      redirect('/error/500')
    }
  })

  // Inject to context as $api
  inject('api', api)
}
