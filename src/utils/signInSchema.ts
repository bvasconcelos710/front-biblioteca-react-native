import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Campo vazio" })
    .trim()
    .email("E-mail inválido"),
  password: z
    .string({ required_error: "Campo vazio" })
    .trim()
    .min(6, "A senha deve ter pelo menos 6 dígitos"),
});

export type ILoginUser = z.infer<typeof signInSchema>;
