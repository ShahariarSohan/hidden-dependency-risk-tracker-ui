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
import { ITeam } from "@/types/team.interface";
import { Calendar, Mail, Phone, Shield, Users, Server } from "lucide-react";

interface ITeamViewDialogProps {
  open: boolean;
  onClose: () => void;
  team: ITeam | null;
}

const TeamViewDetailDialog = ({
  open,
  onClose,
  team,
}: ITeamViewDialogProps) => {
  if (!team) return null;
  

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-5xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Team Details</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* Team Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-lg mb-6">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <AvatarFallback className="text-2xl">
                {getInitials(team?.name || "")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl font-bold mb-1">{team?.name}</h2>

              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <Badge
                  variant={
                    team?.status === ActiveStatus.INACTIVE
                      ? "destructive"
                      : "default"
                  }
                  className="text-sm"
                >
                  {team?.status === ActiveStatus.INACTIVE
                    ? "Inactive"
                    : "Active"}
                </Badge>

                <Badge variant="secondary" className="text-sm">
                  <Users className="h-3 w-3 mr-1" />
                  Team
                </Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Employees */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-lg">Team Members</h3>
              </div>

              <div className="space-y-4 bg-muted/50 p-4 rounded-lg">
                {team.employees && team.employees.length > 0 ? (
                  team.employees.map((emp) => (
                    <div
                      key={emp.id}
                      className="flex flex-col md:flex-row justify-between bg-white dark:bg-black/20 p-3 rounded-lg shadow-sm border"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>
                            {getInitials(emp.name)}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <p className="font-medium text-lg">{emp.name}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Mail className="h-3 w-3" /> {emp.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-3 md:mt-0">
                        <InfoRow
                          label="Contact"
                          value={emp.contactNumber || "Not provided"}
                        />
                        <StatusBadgeCell isActive={emp.status!} />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No members assigned to this team.
                  </p>
                )}
              </div>
            </div>

            <Separator />

            {/* Systems */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Server className="h-5 w-5 text-purple-600" />
                <h3 className="font-semibold text-lg">Associated Systems</h3>
              </div>

              <div className="space-y-4 bg-muted/50 p-4 rounded-lg">
                {team.systems && team.systems.length > 0 ? (
                  team.systems.map((sys) => (
                    <div
                      key={sys.id}
                      className="flex flex-col md:flex-row justify-between bg-white dark:bg-black/20 p-3 rounded-lg shadow-sm border"
                    >
                      <div>
                        <p className="font-medium text-lg">{sys.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Criticality Level: {sys.criticality}
                        </p>
                      </div>

                      <StatusBadgeCell isActive={sys.status!} />
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No systems assigned to this team.
                  </p>
                )}
              </div>
            </div>

            <Separator />

            {/* Metadata */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-orange-600" />
                <h3 className="font-semibold text-lg">Team Metadata</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
                <InfoRow
                  label="Created On"
                  value={formatDateTime(team.createdAt)}
                />
                <InfoRow
                  label="Last Updated"
                  value={formatDateTime(team.updatedAt)}
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamViewDetailDialog;
