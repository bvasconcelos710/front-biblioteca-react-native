import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string({ required_error: "Campo vazio" })
      .trim()
      .min(3, "Nome deve ter no minimo 3 caracteres"),
    matricula: z
      .string({ required_error: "Campo vazio" })
      .min(5, "Matricula deve ter no minimo 5 caracteres"),
    email: z
      .string({ required_error: "Campo vazio" })
      .trim()
      .email("E-mail inválido"),
    category: z
      .string({ required_error: "Campo vazio" })
      .min(5, "Categoria deve ter no minimo 5 caracteres")
      .max(10, "Categoria deve ter no máximo 10 caracteres"),
    phone: z
      .string({ required_error: "Campo vazio" })
      .min(8, "Telefone deve ter no minimo 8 dígitos"),
    password: z
      .string({ required_error: "Campo vazio" })
      .trim()
      .min(6, "A senha deve ter pelo menos 6 dígitos"),
    passwordConfirm: z.string({ required_error: "Campo vazio" }).trim(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas não são iguais",
    path: ["passwordConfirm"],
  });

export type IRegisterUser = z.infer<typeof signUpSchema>;
