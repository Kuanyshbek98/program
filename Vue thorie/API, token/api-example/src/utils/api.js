import axios from 'axios'
import Cookies from 'js-cookie'

const service = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 60*24*60
})



service.interceptors.request.use(
  config => {
    config.headers['Accept'] = 'application/json'
    config.headers['Authorization'] = 'Bearer ' + Cookies.get('clagme-tk')
    return config
  },
  error => {
    alert(error) // for debug
    return Promise.reject(error)
  }
)

export default service;
