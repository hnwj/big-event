import request from '@/utils/request'

// 注册接口
export const regAPI = (data) => {
  return request({
    url: '/api/reg',
    method: 'post',
    data
  })
}

// 登录接口
export const loginAPI = (data) => {
  return request({
    url: '/api/login',
    data,
    method: 'post'
  })
}