import z from "zod";

export const updateMyProfileZodSchema = z.object({
  name: z.string().min(3, "Name must be minimum 3 characters").optional(),
  contactNumber: z
    .string({
      error: "Contact number is required!",
    })
    .regex(/^\d{11}$/, "Contact number must be exactly 11 digits")
    .optional(),
});
