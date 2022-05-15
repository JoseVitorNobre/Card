import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

// import { appName } from '@config/index'
const appName = 'api'

// import decamelcase from '~/helpers/decamelcase'

import type { ApiConfig, ResponseApi } from './types'
import { responseDto, responseError } from './utils'

export class BaseApi {
  public fetchId: number
  public readonly Api: AxiosInstance
  public readonly appName: string
  private readonly disableIncFetch: boolean
  private readonly enableRefreshToken: boolean

  constructor({ enableRefreshToken, disableIncFetch, ...options }: ApiConfig) {
    this.Api = Axios.create(options)
    this.appName = appName
    this.enableRefreshToken = !!enableRefreshToken
    this.disableIncFetch = !!disableIncFetch

    this.fetchId = 0

    this.setInterceptorRequest()
    this.setInterceptorResponse()
  }

  private setInterceptorRequest(): void {
    this.Api.interceptors.request.use(config => {
      // const token = this.getApiStorageData()?.token
      // if (token && config.headers) config.headers.Authorization = `Bearer ${token}`
      // console.log('REQUEST', `${config.baseURL}`, `${config.url}`);
      // if (config?.data) config.data = decamelcase(config.data);
      return config
    })
  }

  /**
   * Removido implementação de refresh token
   */
  private setInterceptorResponse() {
    this.Api.interceptors.response.use(responseDto, responseError)
  }

  private normalizeUrl(path?: string): string {
    const [base = '', query = ''] = `${path}`.split('?')
    const params = new URLSearchParams(query)
    if (!this.disableIncFetch) params.set('fetchId', `${this.fetchId}`)
    params.delete('fetchID')

    const q = new URLSearchParams(params)
    const hasProperties = !!Array.from(q.keys()).length

    const result = [base.replace(/^(.*)\/$/, '$1'), hasProperties ? q.toString() : ''].filter(
      f => !!f
    )

    return result.length > 1 ? result.join('?') : result[0]
  }

  // private getApiStorageData(): IApiStorageData {
  //   const { auth } = this.store.getState()
  //   return {
  //     token: auth?.token || '',
  //     refreshToken: auth?.refreshToken || ''
  //   }
  // }

  async getDefault<T = any>(path?: string, config?: AxiosRequestConfig): Promise<ResponseApi<T>> {
    this.fetchId += 1
    const url = this.normalizeUrl(path)
    const response = await this.Api.get(url, config)
    return response && response.data
  }

  async postDefault<T = any, P = any>(
    path: string,
    payload: P,
    config?: AxiosRequestConfig
  ): Promise<ResponseApi<T>> {
    this.fetchId += 1
    const url = this.normalizeUrl(path)
    const response = await this.Api.post(url, payload, config)

    return response && response.data
  }

  async putDefault<T = any, P = any>(
    path: string,
    payload: P,
    config?: AxiosRequestConfig
  ): Promise<ResponseApi<T>> {
    this.fetchId += 1
    const url = this.normalizeUrl(path)
    const response = await this.Api.put(url, payload, config)

    return response && response.data && response.data
  }

  async patchDefault<T = any, P = any>(
    path: string,
    payload: P,
    config?: AxiosRequestConfig
  ): Promise<ResponseApi<T>> {
    this.fetchId += 1
    const url = this.normalizeUrl(path)
    const response = await this.Api.patch(url, payload, config)
    return response && response.data
  }

  async deleteDefault<T = any>(path: string, config?: AxiosRequestConfig): Promise<ResponseApi<T>> {
    this.fetchId += 1
    const url = this.normalizeUrl(path)
    const response = await this.Api.delete(url, config)
    return response && response.data
  }
}
