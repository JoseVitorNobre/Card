import { AxiosError, AxiosResponse } from 'axios'
import camelcaseKeys from 'camelcase-keys'

import { ResponseApi } from './types'

export function responseDto(res: AxiosResponse): AxiosResponse {
  const axiosData = res && res?.data
  if (res?.config?.responseType === 'blob') {
    return res
  }

  const data: ResponseApi = {
    ...axiosData,
    success: !!(res?.status < 400),
    ...camelcaseKeys(axiosData, { deep: true })
  }

  return { ...res, data }
}

export function responseError(error?: AxiosError) {
  const response = error && error?.response
  let errorMessage = error ? `${error.code || error.message}` : 'TIMEOUT'
  if (error?.code) {
    errorMessage = ['ECONNABORTED'].includes(error?.code) ? 'Aplicativo Offline' : errorMessage
  }

  const data: any = { success: false, message: errorMessage }
  if (!response) {
    // msgWarning('Aplicativo offline 2');
    return Promise.resolve({ data })
  }

  return Promise.resolve(response)
}
