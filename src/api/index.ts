import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.example.com', // 设置请求的基础URL
  timeout: 5000, // 设置请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
