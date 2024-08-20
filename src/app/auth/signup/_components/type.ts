import { z } from "zod"


export const SignupSchema = z
    .object({
        fullname: z.string().min(1, "Fullname is required"),
        email: z.string().email("Invalid email address"),
        zipCode: z.string().regex(/^\d+$/, "Zip code must be a number"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        confirmPassword: z
            .string()
            .min(8, "Confirm password must be at least 8 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });


export type SignupFormData = z.infer<typeof SignupSchema>;