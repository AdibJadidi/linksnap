import z from "zod";

export const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  bio: z.string().max(100, "Bio must be at most 100 characters long"),
  avatarUrl: z.string().url("Invalid URL").or(z.literal("")),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
