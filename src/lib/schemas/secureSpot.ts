import { z } from "zod";

export const secureSpotSchema = z.object({
  firstName: z.string().nonempty("First Name is required."),
  lastName: z.string().nonempty("Last Name is required."),
  email: z.string().email("Invalid email address."),
  companyName: z.string().nonempty("Company name is required."),
  stage: z.string().nonempty("Stage is required."),
  industry: z.string().nonempty("Industry is required."),
  ideaDescription: z
    .string()
    .nonempty("Idea description is required.")
    .min(10, "Description should be at least 10 characters."),
});

export type SecureSpotData = z.infer<typeof secureSpotSchema>;
