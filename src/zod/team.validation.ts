import { z } from "zod";

export const teamZodSchema = z.object({
  name: z.string().min(3, "Name must be minimum 3 characters"),
});

export const addToTeamSchema = z.object({
  teamId: z.string().nonempty("Team is required"),
});