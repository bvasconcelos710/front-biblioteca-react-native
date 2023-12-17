import { z } from "zod";

export const signInSchema = z.object({
  matricula: z
    .string({ required_error: "Campo vazio" })
    .min(5, "Matricula deve ter no minimo 5 caracteres"),
  password: z
    .string({ required_error: "Campo vazio" })
    .trim()
    .min(6, "A senha deve ter pelo menos 6 dígitos"),
});

export type ILoginUser = z.infer<typeof signInSchema>;
