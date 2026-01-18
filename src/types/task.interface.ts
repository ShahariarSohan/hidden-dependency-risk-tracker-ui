import { IAdmin } from "./admin.interface";
import { IEmployee } from "./employee.interface";
import { IManager } from "./manager.interface";
import { TaskStatus } from "./status.interface";
import { ISystem } from "./system.interface";

export interface ITask {
  id: string;
  title: string;
  description?: string | null;

  status: TaskStatus;
  priority: number;
  workWeight: number;

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
   
  dueDate: string;
  completedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}
