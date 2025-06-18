import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cnpjSchema, CnpjFormData, formatCnpj } from '../schemas/cnpj'
import { cnpjService } from '../services/cnpj'
import { CnpjApiResponse } from '../types/cnpj'

interface UseCnpjValidationReturn {
  register: ReturnType<typeof useForm<CnpjFormData>>['register']
  handleSubmit: ReturnType<typeof useForm<CnpjFormData>>['handleSubmit']
  errors: ReturnType<typeof useForm<CnpjFormData>>['formState']['errors']
  cnpjValue: string
  isLoading: boolean
  apiResponse: CnpjApiResponse | null
  handleCnpjChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  validarCnpj: (data: CnpjFormData) => Promise<CnpjApiResponse | null>
}

export function useCnpjValidation(): UseCnpjValidationReturn {
  const [apiResponse, setApiResponse] = useState<CnpjApiResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<CnpjFormData>({
    resolver: zodResolver(cnpjSchema),
    defaultValues: {
      cnpj: ''
    }
  })

  const cnpjValue = watch('cnpj')

  const validarCnpj = async (data: CnpjFormData): Promise<CnpjApiResponse | null> => {
    try {
      setIsLoading(true)
      const response = await cnpjService.validate(data.cnpj)
      setApiResponse(response)
      return response
    } catch (error) {
      console.error('Erro ao validar CNPJ:', error)
      setApiResponse(null)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatCnpj(e.target.value)
  }

  return {
    register,
    handleSubmit,
    errors,
    cnpjValue,
    isLoading,
    apiResponse,
    handleCnpjChange,
    validarCnpj
  }
} 