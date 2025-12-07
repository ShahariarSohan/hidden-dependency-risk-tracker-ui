import { ActiveStatus } from "./status.interface";

export interface IManager {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  status?: ActiveStatus;
  assignedTasks?: string[];
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
