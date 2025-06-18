import { api } from '../config/axios'
import { CnpjApiResponse } from '../types/cnpj'

export const cnpjService = {
  validate: async (cnpj: string): Promise<CnpjApiResponse> => {
    const response = await api.post('/credenciamento/consulta-cnpj', { cnpj })
    return response.data
  },

  check: async (cnpj: string): Promise<CnpjApiResponse> => {
    const response = await api.get(`/cnpj/${cnpj}`)
    return response.data
  }
} 