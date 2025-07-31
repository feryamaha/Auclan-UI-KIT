import { z } from "zod";

export const formSchema = z.object({
  matricula: z
    .string()
    .length(8, "A matrícula deve ter 8 dígitos")
    .regex(/^\d+$/, "A matrícula deve conter apenas números"),
  holder: z.object({
    cpf: z
      .string()
      .min(1, "CPF é obrigatório")
      .regex(
        /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,
        "CPF deve ter 11 dígitos (ex: 123.456.789-01)"
      ),
    beneficiaryName: z.string().min(1, "Nome do beneficiário é obrigatório"),
    motherName: z.string().min(1, "Nome da mãe é obrigatório"),
    sex: z.string().min(1, "Sexo é obrigatório"),
    civilStatus: z.string().min(1, "Estado civil é obrigatório"),
  }),
  contact: z
    .object({
      email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
      confirmEmail: z
        .string()
        .email("E-mail de confirmação inválido")
        .min(1, "Confirmação de e-mail é obrigatória"),
      celular: z
        .string()
        .min(1, "Celular é obrigatório")
        .regex(
          /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
          "Celular inválido (ex: (11) 99999-9999)"
        ),
      telefone: z
        .string()
        .regex(
          /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$|^$/,
          "Telefone inválido (ex: (11) 99999-9999)"
        )
        .optional(),
    })
    .refine((data) => data.email === data.confirmEmail, {
      message: "Os e-mails devem ser iguais",
      path: ["confirmEmail"],
    }),
  address: z.object({
    cep: z
      .string()
      .min(1, "CEP é obrigatório")
      .regex(/^\d{5}-?\d{3}$/, "CEP inválido (ex: 12345-678)"),
    address: z.string().min(1, "Endereço é obrigatório"),
    number: z.string().min(1, "Número é obrigatório"),
    complement: z.string().optional(),
    state: z.string().min(1, "Estado é obrigatório"),
    city: z.string().min(1, "Cidade é obrigatório"),
  }),
  dependents: z
    .array(
      z.object({
        cpf: z
          .string()
          .min(1, "CPF é obrigatório")
          .regex(
            /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,
            "CPF inválido (ex: 123.456.789-01)"
          ),
        fullName: z.string().min(1, "Nome completo é obrigatório"),
        birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
        motherName: z.string().min(1, "Nome da mãe é obrigatório"),
        sex: z.string().min(1, "Sexo é obrigatório"),
        parentesco: z.string().min(1, "Parentesco é obrigatório"),
        rg: z.string().min(1, "RG é obrigatório"),
        orgaoEmissor: z.string().min(1, "Órgão emissor é obrigatório"),
        cns: z.string().min(1, "CNS é obrigatório"),
      })
    )
    .optional(),
  terms: z
    .boolean()
    .refine((val) => val === true, "Você deve aceitar os termos"),
});

export type FormData = z.infer<typeof formSchema>;
