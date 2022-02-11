import axios from 'axios'

const api = axios.create({
  baseURL: 'https://blog-api-sqlite-novo.herokuapp.com/',
  // baseURL: 'http://localhost:8000/',
})

export default api
