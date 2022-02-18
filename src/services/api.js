import axios from 'axios'

const api = axios.create({
  baseURL: 'https://new-blog-api-ultimo.herokuapp.com/',
  // baseURL: 'http://localhost:8000/',
})

export default api
