import axios from 'axios'

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_API
})

// TODO: create interceptor messages

export default client