"use client";



import DateCell from "@/components/shared/cell/DateCell";
import StatusBadgeCell from "@/components/shared/cell/StatusBadgeCell";
import UserInfoCell from "@/components/shared/cell/UserInfoCell";
import { IColumn } from "@/components/shared/ManagementTable";

import { IEmployee } from "@/types/employee.interface";

export const employeeColumns: IColumn<IEmployee>[] = [
  {
    header: "Employee",
    accessor: (employee) => (
      <UserInfoCell
        name={employee.name}
        email={employee.email}
      />
    ),
    sortKey: "name",
  },
  {
    header: "Contact",
    accessor: (employee) => (
      <div className="flex flex-col">
        <span className="text-sm">{employee.contactNumber}</span>
      </div>
    ),
  },
  {
    header: "Status",
    accessor: (employee) => <StatusBadgeCell isDeleted={employee.isDeleted} />,
  },
  {
    header: "Joined",
    accessor: (employee) => <DateCell date={employee.createdAt} />,
    sortKey: "createdAt",
  },
];
