export interface IManager {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  assignedTasks?: string[];
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
