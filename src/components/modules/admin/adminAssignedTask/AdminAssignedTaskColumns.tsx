"use client";

import DateCell from "@/components/shared/cell/DateCell";

import EntityInfoCell from "@/components/shared/cell/EntityInfoCell";
import { IColumn } from "@/components/shared/ManagementTable";
import { ITask } from "@/types/task.interface";

import TaskStatusCell from "@/components/shared/cell/TaskStatusCell";

export const adminAssignedTaskColumns: IColumn<ITask>[] = [
  {
    header: "AssignedTask",
    accessor: (task) => <EntityInfoCell name={task.title} />,
    
  },
  {
    header: "Priority",
    accessor: (task) => (
      <span className="font-medium text-sm">Level {task.priority}</span>
    ),
    
  },
  {
    header: "Status",
    accessor: (task) => <TaskStatusCell status={task.status} />,
  },
  {
    header: "Created",
    accessor: (task) => <DateCell date={task.createdAt} />,
  },
];
