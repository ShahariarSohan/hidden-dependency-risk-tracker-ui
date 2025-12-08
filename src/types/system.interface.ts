import { ActiveStatus } from "./status.interface";
import { ITask } from "./task.interface";
import { ITeam } from "./team.interface";

export interface ISystem {
  id: string;
  name: string;
  description?: string | null;
  criticality: number;
  status:ActiveStatus;
  createdAt: string;
  updatedAt: string;

  // Foreign key
  teamId?: string | null;

  // Relations
  team?: ITeam | null;
  tasks?: ITask[];
}
