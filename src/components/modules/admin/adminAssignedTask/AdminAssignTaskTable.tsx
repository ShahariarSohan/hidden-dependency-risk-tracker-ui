
"use client"

import ManagementTable from "@/components/shared/ManagementTable";



import { adminAssignedTaskColumns } from "./AdminAssignedTaskColumns";
import { ITask } from "@/types/task.interface";




interface TeamsTableProps {
  assignedTasks: ITask[];
}

const AdminAssignedTaskTable = ({ assignedTasks }: TeamsTableProps) => {
  return (
    <>
      <ManagementTable
        data={assignedTasks}
        columns={adminAssignedTaskColumns}
        getRowKey={(assignedTask) => assignedTask.id!}
        emptyMessage="No teams found"
      />
    </>
  );
};

export default AdminAssignedTaskTable;
