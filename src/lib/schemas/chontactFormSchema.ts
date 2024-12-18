import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name must be 50 characters or less" }),
  email: z.string().email({ message: "Invalid email address" }),
  details: z
    .string()
    .min(10, { message: "Details must be at least 10 characters" })
    .max(500, { message: "Details must be 500 characters or less" }),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;

export default contactFormSchema;
