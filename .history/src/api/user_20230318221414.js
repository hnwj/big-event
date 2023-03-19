import request from '@/utils/request'

// 注册接口
export const regAPI = (data) => {
  return request({
    url: '/api/reg',
    data
  })
}