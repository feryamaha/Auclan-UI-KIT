// src/api/schemas/formHelpSchema.ts

import { z } from "zod";

export const formHelpSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/, "Nome deve conter apenas letras"),
  email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .regex(/^\d+$/, "Telefone deve conter apenas números"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

export type FormHelpData = z.infer<typeof formHelpSchema>;
