import axios from 'axios'

const api = axios.create({
  baseURL: 'https://blog-api-sqlite.herokuapp.com/',
})

export default api
