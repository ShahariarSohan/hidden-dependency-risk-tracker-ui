"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import InfoRow from "@/components/shared/InfoRow";
import { formatDateTime, getInitials } from "@/lib/formatters";
import { ITask } from "@/types/task.interface";
import { TaskStatus } from "@/types/status.interface";

import { Calendar, User, Server, ListChecks } from "lucide-react";

interface ITaskViewDialogProps {
  open: boolean;
  onClose: () => void;
  task: ITask | null;
}

const TaskViewDialog = ({ open, onClose, task }: ITaskViewDialogProps) => {
  if (!task) return null;
 
  const statusLabels: Record<TaskStatus, string> = {
    PENDING: "Pending",
    IN_PROGRESS: "In Progress",
    COMPLETED: "Completed",
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-5xl max-h-[90vh] flex flex-col p-0">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Task Details</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
          {/* Task Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-purple-50 dark:bg-purple-950 rounded-lg">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <AvatarFallback className="text-2xl">
                {getInitials(task.title)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl font-bold mb-1">{task.title}</h2>

              <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-2">
                <Badge
                  variant="secondary"
                  className="text-sm not-last-of-type:flex items-center gap-1"
                >
                  <ListChecks className="h-3 w-3" /> Task
                </Badge>

                <Badge
                  variant="outline"
                  className="text-sm flex items-center gap-1"
                >
                  Priority: {task.priority}
                </Badge>

                <Badge
                  variant={
                    task.status === TaskStatus.COMPLETED
                      ? "destructive"
                      : "default"
                  }
                  className="text-sm"
                >
                  {statusLabels[task.status]}
                </Badge>
              </div>
             <div>
               Assigned By:{" "}
             <span>
               {task.assignedByAdmin?.name ?? task.assignedByManager?.name ?? "N/A"}
             </span>
              </div>
              {task.description && (
                <p className="text-sm mt-3 text-muted-foreground px-6 sm:px-0">
                  {task.description}
                </p>
              )}
            </div>
          </div>

          <Separator />

          {/* Assigned Employee */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-lg">Assigned Employee</h3>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              {task.employee ? (
                <div className="flex flex-col md:flex-row justify-between bg-white dark:bg-black/20 p-3 rounded-lg shadow-sm border">
                  <div>
                    <p className="font-medium text-lg">{task.employee.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {task.employee.email}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No employee assigned.
                </p>
              )}
            </div>
          </div>

          <Separator />

          {/* Associated System */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Server className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-lg">Associated System</h3>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              {task.system ? (
                <div className="flex flex-col md:flex-row justify-between bg-white dark:bg-black/20 p-3 rounded-lg shadow-sm border">
                  <div>
                    <p className="font-medium text-lg">{task.system.name}</p>
                    <p className="text-sm text-muted-foreground">
                      System ID: {task.systemId}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No system assigned.
                </p>
              )}
            </div>
          </div>

          <Separator />

          {/* Dates */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold text-lg">Task Dates</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
              <InfoRow
                label="Created At"
                value={formatDateTime(task.createdAt)}
              />
              <InfoRow label="Due Date" value={formatDateTime(task.dueDate)} />
              {task.completedAt && (
                <InfoRow
                  label="Completed At"
                  value={formatDateTime(task.completedAt)}
                />
              )}
              <InfoRow
                label="Last Updated"
                value={formatDateTime(task.updatedAt)}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskViewDialog;
