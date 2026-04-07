import { UserRole } from "./userRole.interface";

export enum AuditLogAction {
  TASK_CREATED = "TASK_CREATED",
  TASK_IN_PROGRESS = "TASK_IN_PROGRESS",
  TASK_COMPLETED = "TASK_COMPLETED",
  TASK_CANCELLED = "TASK_CANCELLED",
}

export interface IAuditLog {
  id: string;
  action: AuditLogAction;
  details: string;
  userId: string;
  entityId?: string;
  createdAt: string;
  user: {
    email: string;
    role: UserRole;
  };
}
