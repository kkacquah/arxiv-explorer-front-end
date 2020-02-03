import axios from 'axios'

export default {
  instance: axios.create({
    baseURL: process.env.REACT_APP_API_GATEWAY_ENDPOINT,
    timeout: 10000,
    params: {
      id: 37880978,
      updateTime: -1
    }
  })
}
