export interface IEmployee {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  teamId?: string;
  createdAt: Date;
  updatedAt: Date;
  tasks?: {
    id: string;
    title: string;
    priority: number;
    status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
    systemId: string;
  }[];
}
