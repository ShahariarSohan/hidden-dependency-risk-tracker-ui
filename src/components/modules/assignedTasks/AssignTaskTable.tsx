
"use client"

import ManagementTable from "@/components/shared/ManagementTable";




import { ITask } from "@/types/task.interface";
import { assignedTaskColumns } from "./AssignedTaskColumns";




interface TeamsTableProps {
  assignedTasks: ITask[];
}

const AssignedTaskTable = ({ assignedTasks }: TeamsTableProps) => {
  return (
    <>
      <ManagementTable
        data={assignedTasks}
        columns={assignedTaskColumns}
        getRowKey={(assignedTask) => assignedTask.id!}
        emptyMessage="No tasks found"
      />
    </>
  );
};

export default AssignedTaskTable;
