

import { IAdmin } from "./admin.interface";
import { IEmployee } from "./employee.interface";
import { IManager } from "./manager.interface";
import { UserRole } from "./userRole.interface";


export interface IUserInfo {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: "ACTIVE" | "INACTIVE" | "DELETED";
  admin?: IAdmin;
  manager?: IManager;
  employee?: IEmployee;
  createdAt: string;
  updatedAt: string;
}
