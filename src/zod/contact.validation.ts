import { z } from "zod";

export const contactDemoValidationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),

  email: z.email("Please enter a valid email address"),

  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(200, "Company name cannot exceed 200 characters"),



  message: z
    .string()
    .max(1000, "Message cannot exceed 1000 characters")
    .optional(),
});
