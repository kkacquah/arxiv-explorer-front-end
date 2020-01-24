import axios from 'axios'

export default {
  instance: axios.create({
    baseURL: 'https://thawing-garden-39429.herokuapp.com',
    timeout: 10000,
    params: {
      id: 37880978,
      updateTime: -1
    }
  })
}
