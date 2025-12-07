"use client";

import DateCell from "@/components/shared/cell/DateCell";
import StatusBadgeCell from "@/components/shared/cell/StatusBadgeCell";
import UserInfoCell from "@/components/shared/cell/UserInfoCell";
import { IColumn } from "@/components/shared/ManagementTable";

import { IManager } from "@/types/manager.interface";

export const managerColumns: IColumn<IManager>[] = [
  {
    header: "Manager",
    accessor: (manager) => (
      <UserInfoCell name={manager.name} email={manager.email} />
    ),
    sortKey: "name",
  },
  {
    header: "Contact",
    accessor: (manager) => (
      <div className="flex flex-col">
        <span className="text-sm">{manager.contactNumber}</span>
      </div>
    ),
  },
  {
    header: "Status",
    accessor: (manager) => <StatusBadgeCell isActive={manager.status} />,
  },
  {
    header: "Joined",
    accessor: (manager) => <DateCell date={manager.createdAt} />,
    sortKey: "createdAt",
  },
];
