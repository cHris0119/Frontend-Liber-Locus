import { getEnvVariables } from '../helpers'
import axios from 'axios'

const { VITE_API_URL } = getEnvVariables

const booksApi = axios.create({
  baseURL: VITE_API_URL
})

export default booksApi
