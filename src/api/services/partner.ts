import { api } from '../config/axios'
import { PartnerFormData } from '../types/partner'

export const partnerService = {
  submitForm: async (data: PartnerFormData): Promise<{ success: boolean; message: string }> => {
    try {
      // await api.post('/parceiros-comerciais', data)
      console.log('Formulário enviado:', data)
      return { success: true, message: 'Cadastro enviado com sucesso!' }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      return {
        success: false,
        message: 'Erro ao enviar o cadastro. Tente novamente.'
      }
    }
  }
} 