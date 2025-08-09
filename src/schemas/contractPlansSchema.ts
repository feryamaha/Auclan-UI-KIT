"use client";

import { z } from "zod";
import matriculas from "@/data/mockContracPlans/matriculas.json";

// Lista de matrículas válidas
const validMatriculas = matriculas.matriculas.map((m) => m.numero); // ["20250001", "20250002", "20250003"]

// Schema para validação da matrícula
export const matriculaSchema = z.object({
  matricula: z
    .string()
    .min(1, "Número da matrícula é obrigatório")
    .regex(/^\d+$/, "A matrícula deve conter apenas números")
    .refine((value) => validMatriculas.includes(value), {
      message: "Matrícula inválida. Use uma matrícula válida da lista.",
    }),
});

/* ---------------------- ADIÇÃO NOVA ---------------------- */
// Schema para dados iniciais do dependente (Step B2)
export const dependentInitialDataSchema = z.object({
  cpf: z
    .string()
    .min(14, "CPF inválido")
    .regex(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "Formato de CPF inválido (ex: 123.456.789-01)"
    ),
  nome: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  dataNascimento: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      "Data de nascimento inválida (use o formato AAAA-MM-DD)"
    ),
});
/* --------------------------------------------------------- */

// Schema para os dados do titular, contato, endereço, dependentes e termos
export const contractPlansSchema = z.object({
  holder: z
    .object({
      cpf: z
        .string()
        .length(11, "CPF deve ter exatamente 11 dígitos")
        .regex(/^\d+$/, "Apenas números permitidos"),
      beneficiaryName: z
        .string()
        .min(3, "Nome completo obrigatório (mínimo 3 caracteres)")
        .max(100)
        .regex(/^[\p{L}\s]+$/u, "Caracteres inválidos"),
      motherName: z
        .string()
        .min(3, "Nome da mãe obrigatório")
        .max(100)
        .regex(/^[\p{L}\s]+$/u, "Caracteres inválidos"),
      sex: z.string().min(1, "Sexo é obrigatório"),
      civilStatus: z.string().min(1, "Estado civil é obrigatório"),
      nomeConjuge: z
        .string()
        .min(3, "Nome do cônjuge deve ter no mínimo 3 caracteres")
        .max(100)
        .regex(/^[\p{L}\s]+$/u, "Caracteres inválidos")
        .optional(),
    })
    .refine(
      (data) => {
        if (
          data.sex.toLowerCase() === "feminino" &&
          data.civilStatus.toLowerCase() === "casado"
        ) {
          return z
            .string()
            .min(3, "Nome do cônjuge é obrigatório")
            .safeParse(data.nomeConjuge || "").success;
        }
        return true;
      },
      {
        message: "Obrigatório incluir nome do cônjuge para mulheres casadas",
        path: ["holder.nomeConjuge"],
      }
    ),
  contact: z
    .object({
      email: z
        .string()
        .min(1, "E-mail é obrigatório")
        .email("Formato de e-mail inválido"),
      emailConfirmation: z
        .string()
        .min(1, "Confirmação de e-mail é obrigatória")
        .email("Formato de e-mail inválido"),
      cellPhone: z
        .string()
        .min(1, "Celular é obrigatório")
        .regex(
          /^\(\d{2}\) 9\d{4}-\d{4}$/,
          "Formato de celular inválido (ex: (11) 99999-9999)"
        ),
      phone: z
        .string()
        .optional()
        .refine((value) => !value || /^\(\d{2}\) \d{4,5}-\d{4}$/.test(value), {
          message: "Formato de telefone inválido (ex: (11) 99999-9999)",
        }),
    })
    .refine((data) => data.email === data.emailConfirmation, {
      message: "Os e-mails não coincidem",
      path: ["contact.emailConfirmation"],
    }),
  location: z.object({
    cep: z
      .string()
      .min(1, "CEP é obrigatório")
      .regex(/^\d{5}-\d{3}$/, "Formato de CEP inválido (ex: 12345-678)"),
    address: z
      .string()
      .min(3, "Endereço é obrigatório (mínimo 3 caracteres)")
      .max(100)
      .regex(/^[\p{L}\s0-9]+$/u, "Caracteres inválidos"),
    number: z
      .string()
      .min(1, "Número é obrigatório")
      .regex(/^\d+$/, "Apenas números permitidos"),
    complement: z.string().optional(),
    state: z
      .string()
      .length(2, "Estado deve ter exatamente 2 letras (ex: SP)")
      .regex(/^[A-Z]{2}$/, "Estado deve conter apenas 2 letras maiúsculas"),
    city: z
      .string()
      .min(3, "Cidade é obrigatória (mínimo 3 caracteres)")
      .max(100)
      .regex(/^[\p{L}\s]+$/u, "Caracteres inválidos"),
  }),
  dependents: z
    .array(
      z.object({
        dependentName: z
          .string()
          .min(3, "Nome do dependente obrigatório (mínimo 3 caracteres)")
          .max(100)
          .regex(/^[\p{L}\s]+$/u, "Caracteres inválidos"),
        dependentCpf: z
          .string()
          .length(11, "CPF deve ter exatamente 11 dígitos")
          .regex(/^\d+$/, "Apenas números permitidos"),
        birthDate: z
          .string()
          .regex(
            /^\d{2}\/\d{2}\/\d{4}$/,
            "Data de nascimento inválida (ex: 01/01/2000)"
          ),
        motherName: z
          .string()
          .min(3, "Nome da mãe obrigatório")
          .max(100)
          .regex(/^[\p{L}\s]+$/u, "Caracteres inválidos"),
        sex: z
          .string()
          .min(1, "Sexo é obrigatório")
          .refine(
            (value) => ["Masculino", "Feminino", "Outro"].includes(value),
            {
              message: "Sexo inválido",
            }
          ),
        relationship: z
          .string()
          .min(1, "Relação com o titular é obrigatória")
          .refine(
            (value) =>
              ["Cônjuge", "Filho(a)", "Pai/Mãe", "Outro"].includes(value),
            {
              message: "Relação inválida",
            }
          ),
        rg: z
          .string()
          .min(7, "RG deve ter no mínimo 7 dígitos")
          .regex(/^\d+$/, "Apenas números permitidos")
          .optional(),
        orgaoEmissor: z
          .string()
          .min(3, "Órgão emissor é obrigatório")
          .regex(/^[\p{L}\s-]+$/u, "Caracteres inválidos")
          .optional(),
        cns: z
          .string()
          .length(15, "CNS deve ter exatamente 15 dígitos")
          .regex(/^\d+$/, "Apenas números permitidos")
          .optional(),
      })
    )
    .optional(),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: "Você deve aceitar os termos e condições",
  }),
});
