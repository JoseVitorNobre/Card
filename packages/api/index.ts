// import { apiUrl } from '@config/index'
const apiUrl = 'http://localhost:3333'

import { BaseApi } from './BaseApi'

export const api = new BaseApi({
  baseURL: `${apiUrl}`,
  timeout: 3000
  // disableIncFetch: true
})

export interface ICommonResponse {
  success: boolean
  message?: string
}

export interface IResponsePaginate<T> extends ICommonResponse {
  pages?: number
  page?: number
  total: number
  data: T[]
}

export type Pagination<T = any> = {
  page?: number
  size?: number
  orderby?: keyof T
  order?: 'desc' | 'asc'
}
