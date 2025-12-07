import { ActiveStatus } from "@/types/status.interface";
import z from "zod";


export const updateStatusZodSchema = z.object({
  status: z.enum([ActiveStatus.ACTIVE, ActiveStatus.INACTIVE]),
});
