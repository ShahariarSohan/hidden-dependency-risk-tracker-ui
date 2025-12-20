"use client";

import { Button } from "@/components/ui/button";
import { TaskStatus } from "@/types/status.interface";
import { Loader2, ChevronDown } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

interface Props {
  id: string;
  status: TaskStatus;
  onSuccess?: () => void;
  handleStatusChange: (
    id: string,
    status: TaskStatus
  ) => Promise<{ success: boolean; message?: string }>;
}

const statusLabels: Record<TaskStatus, string> = {
  PENDING: "Pending",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
};

const statusColors: Record<TaskStatus, string> = {
  PENDING: "bg-yellow-400 text-gray-900 hover:bg-yellow-500",
  IN_PROGRESS: "bg-blue-500 text-gray-900 hover:bg-blue-600",
  COMPLETED: "bg-green-500 text-gray-900 hover:bg-green-600",
};

export default function TaskStatusButton({
  id,
  status,
  onSuccess,
  handleStatusChange,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const handleSelect = (newStatus: TaskStatus) => {
    if (newStatus === status) return; // no change
    startTransition(async () => {
      const result = await handleStatusChange(id, newStatus);

      if (result.success) {
        toast.success("Task status updated successfully");
        onSuccess?.();
      } else {
        toast.error(result.message || "Failed to update task status");
      }
      setOpen(false);
    });
  };

  return (
    <div className="relative inline-block">
      <Button
        size="sm"
        className={`flex items-center gap-1 ${statusColors[status]}`}
        onClick={() => setOpen(!open)}
        disabled={isPending}
      >
        {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
        {statusLabels[status]}
        <ChevronDown className="h-4 w-4" />
      </Button>

      {open && (
        <div className="absolute z-10 mt-1 w-max rounded-md border bg-card shadow-lg">
          {Object.values(TaskStatus).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleSelect(s)}
              className={`block px-4 py-2 text-left w-full hover:bg-primary ${
                s === status
                  ? "font-semibold underline"
                  : "text-(--hero-foreground)"
              }`}
              disabled={isPending}
            >
              {statusLabels[s]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
