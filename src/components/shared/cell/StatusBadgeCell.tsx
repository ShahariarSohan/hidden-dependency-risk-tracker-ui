"use client";

import { Badge } from "@/components/ui/badge";
import { ActiveStatus } from "@/types/status.interface";

interface IStatusBadgeCellProps {
  isActive?: ActiveStatus;
  activeText?: string;
  inActiveText?: string;
}

export default function StatusBadgeCell({
  isActive,
  activeText = "Active",
  inActiveText = "Inactive",
}: IStatusBadgeCellProps) {
  return (
    <Badge
      // variant={isActive === ActiveStatus.ACTIVE ? "default" : "destructive"}
      className={isActive === ActiveStatus.ACTIVE ? "bg-green-600" : "bg-red-500"}
    >
      {isActive === ActiveStatus.ACTIVE ? activeText : inActiveText}
    </Badge>
  );
}
