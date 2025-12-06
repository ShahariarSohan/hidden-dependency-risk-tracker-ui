/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { ActiveStatus } from "@/types/activeStatus.interface";


const getStatusBadge = (status: ActiveStatus) => {
  const statusConfig: Record<
    ActiveStatus,
    { variant: any; label: string; className?: string }
  > = {
    [ActiveStatus.ACTIVE]: {
      variant: "default",
      label: "Active",
      className: "bg-green-500 hover:bg-green-600",
    },
    [ActiveStatus.INACTIVE]: {
      variant: "secondary",
      label: "In Progress",
    },
  
    [ActiveStatus.DELETED]: {
      variant: "destructive",
      label: "Canceled",
    },
  };

  const config = statusConfig[status];
  return (
    <Badge variant={config.variant} className={config.className}>
      {config.label}
    </Badge>
  );
};
export default getStatusBadge;