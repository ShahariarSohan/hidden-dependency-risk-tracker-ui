import z from "zod";

export const loginValidationSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must not be more than 100 characters"),
});
