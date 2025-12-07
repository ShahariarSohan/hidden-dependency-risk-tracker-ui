import { ActiveStatus, TaskStatus } from "./status.interface";

export interface IEmployee {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  teamId?: string;
  status?: ActiveStatus;
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
  tasks?: {
    id: string;
    title: string;
    priority: number;
    status: TaskStatus
    systemId: string;
  }[];
}
