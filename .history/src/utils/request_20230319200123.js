import axios from 'axios'
export const baseURL = 'http://big-event-vue-api-t.itheima.net'
const request = axios.create({
  baseURL
})

export default request
