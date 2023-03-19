import request from '@/utils/request'
export const regAPI = (data) => {
  return request({
    url: '/api/reg',
    data
  })


}