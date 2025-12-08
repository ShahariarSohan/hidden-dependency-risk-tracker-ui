import { IEmployee } from "./employee.interface";
import { ActiveStatus } from "./status.interface";
import { ISystem } from "./system.interface";

export interface ITeam {
  id: string;
  name: string;
  status: ActiveStatus;
  createdAt: string;
  updatedAt: string;

  // Relations
  employees?: IEmployee[]; // optional because many endpoints don't return nested data
  systems?: ISystem[];
}
