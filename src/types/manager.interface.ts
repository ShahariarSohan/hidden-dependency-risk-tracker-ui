export interface IManager {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  assignedTasks?: string[];
  createdAt: Date;
  updatedAt: Date;
}
