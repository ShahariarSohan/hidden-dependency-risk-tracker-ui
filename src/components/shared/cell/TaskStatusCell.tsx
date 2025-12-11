import { Badge } from "@/components/ui/badge";
import { TaskStatus } from "@/types/status.interface";


interface ITaskStatusCellProps {
  status: TaskStatus;
  pendingText?: string;
  inProgressText?: string;
  completedText?: string;
  cancelledText?: string;
}

export default function TaskStatusCell({
  status,
  pendingText = "Pending",
  inProgressText = "In Progress",
  completedText = "Completed",
}: ITaskStatusCellProps) {
  // Map each status to a color & label
  const statusConfig: Record<TaskStatus, { label: string; className: string }> =
    {
      [TaskStatus.PENDING]: {
        label: pendingText,
        className: "bg-yellow-500 text-white",
      },
      [TaskStatus.IN_PROGRESS]: {
        label: inProgressText,
        className: "bg-blue-600 text-white",
      },
      [TaskStatus.COMPLETED]: {
        label: completedText,
        className: "bg-green-600 text-white",
      },
    };

  const { label, className } = statusConfig[status];

  return <Badge className={className}>{label}</Badge>;
}
