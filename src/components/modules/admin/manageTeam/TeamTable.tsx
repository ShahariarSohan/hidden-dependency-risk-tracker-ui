"use client";

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import ManagementTable from "@/components/shared/ManagementTable";
import { softDeleteTeam, updateTeamStatus } from "@/services/admin/manageTeam";

import { ITeam } from "@/types/team.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { teamColumns } from "./TeamColumns";
import TeamFormDialog from "./TeamFormDialog";

import StatusToggleCell from "@/components/shared/cell/StatusToggleCell";
import { ActiveStatus } from "@/types/status.interface";
import TeamViewDetailDialog from "./TeamViewDialog";

interface TeamsTableProps {
  teams: ITeam[];
}

const TeamsTable = ({ teams }: TeamsTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [deletingTeam, setDeletingTeam] = useState<ITeam | null>(null);
  const [viewingTeam, setViewingTeam] = useState<ITeam | null>(null);
  const [editingTeam, setEditingTeam] = useState<ITeam | null>(null);

  const [isDeleting, setIsDeleting] = useState(false);
  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (team: ITeam) => {
    setViewingTeam(team);
  };
  const handleEdit = (team: ITeam) => {
    setEditingTeam(team);
  };
  const handleDelete = (team: ITeam) => {
    setDeletingTeam(team);
  };

  const confirmDelete = async () => {
    if (!deletingTeam) return;

    setIsDeleting(true);
    const result = await softDeleteTeam(deletingTeam.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Team deleted successfully");
      setDeletingTeam(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete team");
    }
  };

  const handleStatusChange = async (
    id: string,
    status: ActiveStatus.ACTIVE | ActiveStatus.INACTIVE
  ) => {
    return await updateTeamStatus(id, status);
  };

  return (
    <>
      <ManagementTable
        data={teams}
        columns={teamColumns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        customActions={(row) => (
          <StatusToggleCell
            id={row.id}
            status={row.status!}
            onSuccess={handleRefresh}
            handleStatusChange={handleStatusChange}
          />
        )}
        getRowKey={(team) => team.id!}
        emptyMessage="No teams found"
      />

      {/* Create / Edit Team Form Dialog */}
      <TeamFormDialog
        open={!!editingTeam}
        onClose={() => setEditingTeam(null)}
        onSuccess={() => {
          setEditingTeam(null);
          handleRefresh();
        }}
        team={editingTeam!}
      />

      {/* View Team Details */}
      <TeamViewDetailDialog
        open={!!viewingTeam}
        onClose={() => setViewingTeam(null)}
        team={viewingTeam}
      />

      {/* Delete Confirm Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingTeam}
        onOpenChange={(open) => !open && setDeletingTeam(null)}
        onConfirm={confirmDelete}
        title="Delete Team"
        description={`Are you sure you want to delete ${deletingTeam?.name}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default TeamsTable;
