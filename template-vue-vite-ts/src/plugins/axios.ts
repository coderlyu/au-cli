import axios, { AxiosResponse } from 'axios'
import qs from 'qs'
import _sign from '../utils/_sign'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  transformRequest: [function (data) {
    const d = qs.stringify(data)
    return d
  }]
})

request.interceptors.request.use(
  config => {
    if (config.method?.toLowerCase() === 'post') {
      _sign(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default request
