export interface CnpjApiResponse {
  status: string
  data: {
    RetornoCnpj: {
      msg: {
        TempoConsulta: string
        Resultado: string
        ResultadoTXT: string
        Creditos: string
      }
      DadosEmpresa: {
        Cnpj: string
        Tipo: string
        CapitalSocial: string
        NomeEmpresa: string
        NomeFantasia: string
        DataAbertura: string
        SituacaoCadastral: string
        DataSituacaoCadastral: string
        MotivoSituacaoCadastral: string
        SituacaoEspecial: string
        DataSituacaoEspecial: string
        AtividadePrincipal: string
        AtividadeSecundarias: string[]
        NaturezaJuridica: string
      }
      EnderecoEmpresa: {
        Logradouro: string
        Numero: string
        Complemento: string
        Bairro: string
        Municipio: string
        UF: string
        Cep: string
        Telefone: string
        Email: string
      }
      DadosResponsavel: {
        CpfResponsavel: string
        NomeResponsavel: string
      }
      QuadroSocios: {
        Socios: string[]
      }
    }
  }
} 