import { IAdmin } from "./admin.interface";
import { IEmployee } from "./employee.interface";
import { IManager } from "./manager.interface";
import { ISystem } from "./system.interface";

export interface ITask {
  id: string;
  title: string;
  description?: string | null;

  status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
  priority: number;

  // Foreign keys
  employeeId: string;
  systemId: string;
  assignedByManagerId?: string | null;
  assignedByAdminId?: string | null;

  // Relations
  employee?: IEmployee;
  system?: ISystem;
  assignedByManager?: IManager | null;
  assignedByAdmin?: IAdmin | null;

  completedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}
