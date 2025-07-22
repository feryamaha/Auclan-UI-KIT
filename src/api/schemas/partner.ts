//src/api/schemas/partners.ts 

import { z } from 'zod'
import { PartnerFormData } from '../types/partner'

export const partnerSchema = z.object({
  cnpj: z.string().min(1, 'CNPJ é obrigatório'),
  nomeFantasia: z.string().min(1, 'Nome fantasia é obrigatório'),
  inscricaoEstadual: z.string().min(1, 'Inscrição estadual é obrigatória'),
  principaisRamos: z.string().optional(),
  locaisFiliais: z.string().optional(),
  susep: z.string().optional(),
  dataHabilitacao: z.string().optional(),
  principaisSeguradoras: z.string().optional(),
  telefone: z.string().min(1, 'Telefone é obrigatório'),
  celular: z.string().optional(),
  email: z.string().email('Email inválido').min(1, 'Email é obrigatório'),
  site: z.string().optional(),
  cep: z.string().min(1, 'CEP é obrigatório'),
  estado: z.string().min(1, 'Estado é obrigatório'),
  cidade: z.string().min(1, 'Cidade é obrigatória'),
  bairro: z.string().min(1, 'Bairro é obrigatório'),
  rua: z.string().min(1, 'Rua é obrigatória'),
  numero: z.string().min(1, 'Número é obrigatório'),
  complemento: z.string().optional(),
  usarEnderecoFiscal: z.boolean(),
  enderecoCorrespondencia: z.object({
    cep: z.string().min(1, 'CEP é obrigatório'),
    estado: z.string().min(1, 'Estado é obrigatório'),
    cidade: z.string().min(1, 'Cidade é obrigatória'),
    bairro: z.string().min(1, 'Bairro é obrigatório'),
    rua: z.string().min(1, 'Rua é obrigatória'),
    numero: z.string().min(1, 'Número é obrigatório'),
    complemento: z.string().optional()
  }).optional(),
  nomeTitular: z.string().min(1, 'Nome do titular é obrigatório'),
  banco: z.string().min(1, 'Banco é obrigatório'),
  agencia: z.string().min(1, 'Agência é obrigatória'),
  contaCorrente: z.string().min(1, 'Conta corrente é obrigatória'),
  cidadeBanco: z.string().optional(),
  operacao: z.string().optional(),
  controllers: z.array(z.object({
    nome: z.string().min(1, 'Nome é obrigatório'),
    cpf: z.string().min(1, 'CPF é obrigatório'),
    cargo: z.string().min(1, 'Cargo é obrigatório')
  })).min(1, 'Pelo menos um controller é obrigatório'),
  attachments: z.object({
    addressProof: z.any().nullable(),
    rgProof: z.any().nullable(),
    bankProof: z.any().nullable(),
    cpfProof: z.any().nullable(),
    susep: z.any().nullable(),
    socialContract: z.any().nullable(),
    logo: z.any().nullable(),
    unionFee: z.any().nullable()
  })
})

export type PartnerFormSchema = z.infer<typeof partnerSchema> 