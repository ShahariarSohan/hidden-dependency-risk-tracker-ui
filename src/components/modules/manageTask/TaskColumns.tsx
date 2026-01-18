"use client";

import DateCell from "@/components/shared/cell/DateCell";
import EntityInfoCell from "@/components/shared/cell/EntityInfoCell";
import TaskStatusCell from "@/components/shared/cell/TaskStatusCell";

import { IColumn } from "@/components/shared/ManagementTable";
import { ITask } from "@/types/task.interface";

export const TasksColumns: IColumn<ITask>[] = [
  {
    header: "Task",
    accessor: (task) => <EntityInfoCell name={task.title} />,
    sortKey: "name",
  },

  {
    header: "Priority",
    accessor: (task) => (
      <span className="font-medium text-sm">Level {task.priority}</span>
    ),
    sortKey: "priority",
  },
  {
    header: "Work Weight",
    accessor: (task) => (
      <span className="font-medium text-sm text-blue-600 dark:text-blue-400">
        {task.workWeight || 1}
      </span>
    ),
    sortKey: "workWeight",
  },

  {
    header: "Status",
    accessor: (task) => <TaskStatusCell status={task.status} />,
    
  },


  {
    header: "Created",
    accessor: (task) => <DateCell date={task.createdAt} />,
    sortKey: "createdAt",
  },
];
