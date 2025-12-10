"use client";

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import ManagementTable from "@/components/shared/ManagementTable";

import {
  softDeleteTask,
  updateTaskStatus,
} from "@/services/manageTasks/manageTask"; // make sure to create these

import { ITask } from "@/types/task.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import TaskStatusButton from "@/components/shared/TaskStatusButton";
import { TaskStatus } from "@/types/status.interface";
import { TasksColumns } from "./TaskColumns";
import TaskFormDialog from "./TaskFormDialog";
import TaskViewDialog from "./TaskViewDialog";

interface TasksTableProps {
  tasks: ITask[];
}

const TasksTable = ({ tasks }: TasksTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [deletingTask, setDeletingTask] = useState<ITask | null>(null);
  const [viewingTask, setViewingTask] = useState<ITask | null>(null);
  const [editingTask, setEditingTask] = useState<ITask | null>(null);

  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (task: ITask) => setViewingTask(task);
  const handleEdit = (task: ITask) => setEditingTask(task);
  const handleDelete = (task: ITask) => setDeletingTask(task);

  const confirmDelete = async () => {
    if (!deletingTask) return;

    setIsDeleting(true);
    const result = await softDeleteTask(deletingTask.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Task deleted successfully");
      setDeletingTask(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete task");
    }
  };

  const handleStatusChange = async (id: string, status: TaskStatus) => {
    return await updateTaskStatus(id, status);
  };

  return (
    <>
      <ManagementTable
        data={tasks}
        columns={TasksColumns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        customActions={(row) => (
          <TaskStatusButton
            id={row.id}
            status={row.status}
            onSuccess={handleRefresh}
            handleStatusChange={handleStatusChange}
          />
        )}
        getRowKey={(task) => task.id}
        emptyMessage="No tasks found"
      />

      {/* Create / Edit Task Form */}
      <TaskFormDialog
        open={!!editingTask}
        onClose={() => setEditingTask(null)}
        onSuccess={() => {
          setEditingTask(null);
          handleRefresh();
        }}
        task={editingTask!}
      />

      {/* View Task Details */}
      <TaskViewDialog
        open={!!viewingTask}
        onClose={() => setViewingTask(null)}
        task={viewingTask}
      />

      {/* Delete confirmation */}
      <DeleteConfirmationDialog
        open={!!deletingTask}
        onOpenChange={(open) => !open && setDeletingTask(null)}
        onConfirm={confirmDelete}
        title="Delete Task"
        description={`Are you sure you want to delete task "${deletingTask?.title}"? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default TasksTable;
