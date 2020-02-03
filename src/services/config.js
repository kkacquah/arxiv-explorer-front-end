import axios from 'axios'

export default {
  instance: axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    params: {
      id: 37880978,
      updateTime: -1
    }
  })
}
