
//src/api/schemas/formHelpSchemas.ts 
import { z } from "zod";

export const formHelpSchema = z.object({
  userName: z.string().optional(), // Opcional, qualquer string ou undefined
  email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, "Telefone inválido (10 ou 11 dígitos)")
    .min(1, "Telefone é obrigatório"),
  message: z.string().optional(), // Opcional, qualquer string ou undefined
});

export type FormHelpData = z.infer<typeof formHelpSchema>;