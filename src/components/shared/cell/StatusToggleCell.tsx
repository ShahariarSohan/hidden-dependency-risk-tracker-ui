/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";

import { toast } from "sonner";
import { ActiveStatus } from "@/types/status.interface";

interface Props {
  id: string;
  status: ActiveStatus;
  onSuccess?: () => void;
  handleStatusChange: any;
}

export default function StatusToggleCell({ id, status, onSuccess,handleStatusChange }: Props) {
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    const newStatus =
      status === ActiveStatus.ACTIVE
        ? ActiveStatus.INACTIVE
        : ActiveStatus.ACTIVE;

    startTransition(async () => {
      const result = await handleStatusChange(id, newStatus);

      if (result.success) {
        toast.success("Status updated successfully");
        onSuccess?.();
      } else {
        toast.error(result.message || "Failed to update status");
      }
    });
  };

  return (
    <Button
      size="sm"
      className="h-6 rounded-sm "
      variant={status === ActiveStatus.ACTIVE ? "destructive" : "default"}
      onClick={handleToggle}
      disabled={isPending}
    >
      {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
      {status === ActiveStatus.ACTIVE ? "Inactive" : "Active"}
    </Button>
  );
}
