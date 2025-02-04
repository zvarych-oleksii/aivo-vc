import {z} from "zod";

export const sendEmailSchema = z.object({
    email: z.string().email("Please enter valid email address."),
});

export type SendEmailData = z.infer<typeof sendEmailSchema>;