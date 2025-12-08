"use client";

import StatusBadgeCell from "@/components/shared/cell/StatusBadgeCell";
import InfoRow from "@/components/shared/InfoRow";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { formatDateTime, getInitials } from "@/lib/formatters";
import { ActiveStatus } from "@/types/status.interface";
import { ISystem } from "@/types/system.interface";
import { ITask } from "@/types/task.interface";

import {
  Server,
  Users,
  Calendar,
  ListChecks,
  ShieldAlert,
  Building,
} from "lucide-react";

interface ISystemViewDialogProps {
  open: boolean;
  onClose: () => void;
  system: ISystem | null;
}

const SystemViewDetailDialog = ({
  open,
  onClose,
  system,
}: ISystemViewDialogProps) => {
  if (!system) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-5xl max-h-[90vh] flex flex-col p-0">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>System Details</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* System Info Header */}
          <div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6
            bg-linear-to-br from-purple-50 to-violet-50
            dark:from-purple-950 dark:to-violet-950
            rounded-lg mb-6"
          >
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <AvatarFallback className="text-2xl">
                {getInitials(system.name)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl font-bold mb-1">{system.name}</h2>

              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <Badge
                  variant={
                    system.status === ActiveStatus.INACTIVE
                      ? "destructive"
                      : "default"
                  }
                  className="text-sm"
                >
                  {system.status === ActiveStatus.INACTIVE
                    ? "Inactive"
                    : "Active"}
                </Badge>

                <Badge
                  variant="secondary"
                  className="text-sm flex items-center gap-1"
                >
                  <Server className="h-3 w-3" />
                  System
                </Badge>

                <Badge
                  variant="outline"
                  className="text-sm flex items-center gap-1"
                >
                  <ShieldAlert className="h-3 w-3" />
                  Criticality: {system.criticality}
                </Badge>
              </div>

              {system.description && (
                <p className="text-sm mt-3 text-muted-foreground px-6 sm:px-0">
                  {system.description}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-6">
            {/* Team Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-lg">Associated Team</h3>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                {system.team ? (
                  <div
                    className="flex flex-col md:flex-row justify-between
                    bg-white dark:bg-black/20 p-3 rounded-lg shadow-sm border"
                  >
                    <div>
                      <p className="font-medium text-lg">{system.team.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Team ID: {system.teamId}
                      </p>
                    </div>

                    <StatusBadgeCell isActive={system.team.status} />
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No team assigned to this system.
                  </p>
                )}
              </div>
            </div>

            <Separator />

            {/* Tasks */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ListChecks className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-lg">System Tasks</h3>
              </div>

              <div className="space-y-4 bg-muted/50 p-4 rounded-lg">
                {system.tasks && system.tasks.length > 0 ? (
                  system.tasks.map((task: ITask) => (
                    <div
                      key={task.id}
                      className="flex flex-col md:flex-row justify-between
                        bg-white dark:bg-black/20 p-3 rounded-lg shadow-sm border"
                    >
                      <div>
                        <p className="font-medium text-lg">{task.title}</p>
                        <p className="text-sm text-muted-foreground">
                          Priority: {task.priority}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Status: {task.status}
                        </p>
                      </div>

                      {task.employee && (
                        <div className="text-right">
                          <p className="font-medium">{task.employee.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Assigned Employee
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No tasks created for this system.
                  </p>
                )}
              </div>
            </div>

            <Separator />

            {/* Metadata */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-orange-600" />
                <h3 className="font-semibold text-lg">System Metadata</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <InfoRow
                  label="Created On"
                  value={formatDateTime(system.createdAt)}
                />
                <InfoRow
                  label="Last Updated"
                  value={formatDateTime(system.updatedAt)}
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SystemViewDetailDialog;
