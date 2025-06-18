import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { PartnerFormData } from '../types/partner'
import { partnerService } from '../services/partner'
import { cnpjService } from '../services/cnpj'
import { CnpjApiResponse } from '../types/cnpj'

export const usePartnerForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [cnpjValidated, setCnpjValidated] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isValid }
  } = useForm<PartnerFormData>({
    mode: 'onChange'
  })

  const usarEnderecoFiscal = watch('usarEnderecoFiscal')
  const cnpj = watch('cnpj')
  const controllers = watch('controllers') || []

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const setStep = (step: number) => {
    if (step <= currentStep || cnpjValidated) {
      setCurrentStep(step)
    }
  }

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return cnpj.length > 0
      case 2:
        return !!(
          watch('nomeFantasia') &&
          watch('inscricaoEstadual') &&
          watch('telefone') &&
          watch('email')
        )
      case 3:
        return controllers.length > 0
      case 4:
        return !!(
          watch('cep') &&
          watch('estado') &&
          watch('cidade') &&
          watch('bairro') &&
          watch('rua') &&
          watch('numero')
        )
      case 5:
        return !!(
          watch('nomeTitular') &&
          watch('banco') &&
          watch('agencia') &&
          watch('contaCorrente')
        )
      case 6:
        return true
      default:
        return false
    }
  }

  const validateCnpj = async () => {
    try {
      const response = await cnpjService.check(cnpj)
      handleCnpjSuccess(response)
      return true
    } catch (error) {
      console.error('Erro ao validar CNPJ:', error)
      return false
    }
  }

  const handleCnpjSuccess = (data: CnpjApiResponse) => {
    const nomeEmpresa = data.data.RetornoCnpj.DadosEmpresa.NomeEmpresa
    const cnpjValue = data.data.RetornoCnpj.DadosEmpresa.Cnpj

    setValue('cnpj', cnpjValue, { shouldValidate: true })
    setValue(
      'nomeFantasia',
      data.data.RetornoCnpj.DadosEmpresa.NomeFantasia || nomeEmpresa,
      { shouldValidate: true }
    )

    const endereco = data.data.RetornoCnpj.EnderecoEmpresa
    if (endereco) {
      setValue('cep', endereco.Cep, { shouldValidate: true })
      setValue('estado', endereco.UF, { shouldValidate: true })
      setValue('cidade', endereco.Municipio, { shouldValidate: true })
      setValue('bairro', endereco.Bairro, { shouldValidate: true })
      setValue('rua', endereco.Logradouro, { shouldValidate: true })
      setValue('numero', endereco.Numero, { shouldValidate: true })
      setValue('complemento', endereco.Complemento, { shouldValidate: true })
      setValue('telefone', endereco.Telefone, { shouldValidate: true })
      setValue('email', endereco.Email, { shouldValidate: true })
    }

    setCnpjValidated(true)
  }

  const submitForm = async (data: PartnerFormData) => {
    return partnerService.submitForm(data)
  }

  return {
    currentStep,
    cnpjValidated,
    register,
    handleSubmit,
    control,
    errors,
    isValid,
    usarEnderecoFiscal,
    cnpj,
    controllers,
    nextStep,
    prevStep,
    setStep,
    validateStep,
    validateCnpj,
    submitForm
  }
} 