import { z } from "zod";

export const AddUserSchema = z.object({
  id: z.string(),
  email: z.string().email("Invalid email address"),
  firstname: z.string(),
  middlename: z.string(),
  lastname: z.string(),
  phone: z.number(),
  role: z.string(),
  password: z.string().min(5, "Password must be at least 5 characters long."),
  branchId: z.string(),
});
export type TAddUserSchema = z.infer<typeof AddUserSchema>;


