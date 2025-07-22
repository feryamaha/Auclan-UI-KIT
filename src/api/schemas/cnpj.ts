//src/api/schemas/cnpj.ts

import { z } from 'zod'

export const cnpjSchema = z.object({
  cnpj: z
    .string()
    .min(1, 'CNPJ é obrigatório')
    .refine((cnpj) => {
      const cleanCnpj = cnpj.replace(/\D/g, '')
      return cleanCnpj.length === 14
    }, 'CNPJ deve ter 14 dígitos')
})

export type CnpjFormData = z.infer<typeof cnpjSchema>

export const formatCnpj = (value: string) => {
  const numbers = value.replace(/\D/g, '')
  if (numbers.length <= 2) return numbers
  if (numbers.length <= 5) return `${numbers.slice(0, 2)}.${numbers.slice(2)}`
  if (numbers.length <= 8) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`
  if (numbers.length <= 12) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8)}`
  return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`
} 