"use client";

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import ManagementTable from "@/components/shared/ManagementTable";
import {
  softDeleteManager,
  updateManagerStatus,
} from "@/services/admin/manageManager";

import { IManager } from "@/types/manager.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { managerColumns } from "./ManagerColumns";
import ManagerFormDialog from "./ManagerFormDialog";
import ManagerViewDetailDialog from "./ManagerViewDetailDialog";
import StatusToggleCell from "@/components/shared/cell/StatusToggleCell";
import { ActiveStatus } from "@/types/status.interface";

interface ManagersTableProps {
  managers: IManager[];
}

const ManagersTable = ({ managers }: ManagersTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [deletingManager, setDeletingManager] = useState<IManager | null>(null);
  const [viewingManager, setViewingManager] = useState<IManager | null>(null);
  const [editingManager, setEditingManager] = useState<IManager | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (manager: IManager) => setViewingManager(manager);
  const handleDelete = (manager: IManager) => setDeletingManager(manager);
  const handleEdit = (manager: IManager) => setEditingManager(manager);

  const confirmDelete = async () => {
    if (!deletingManager) return;

    setIsDeleting(true);
    const result = await softDeleteManager(deletingManager.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Manager deleted successfully");
      setDeletingManager(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete manager");
    }
  };

  const handleStatusChange = async (
    id: string,
    status: ActiveStatus.ACTIVE | ActiveStatus.INACTIVE
  ) => {
    return await updateManagerStatus(id, status);
  };

  return (
    <>
      <ManagementTable
        data={managers}
        columns={managerColumns}
        onView={handleView}
        onEdit={handleEdit} // <-- added edit
        onDelete={handleDelete}
        customActions={(row) => (
          <StatusToggleCell
            id={row.id}
            status={row.status!}
            onSuccess={handleRefresh}
            handleStatusChange={handleStatusChange}
          />
        )}
        getRowKey={(manager) => manager.id!}
        emptyMessage="No managers found"
      />

      {/* Edit Manager Form Dialog */}
      <ManagerFormDialog
        open={!!editingManager}
        onClose={() => setEditingManager(null)}
        onSuccess={() => {
          setEditingManager(null);
          handleRefresh();
        }}
        manager={editingManager!} // <-- pass manager for edit mode
      />

      {/* View Manager Detail Dialog */}
      <ManagerViewDetailDialog
        open={!!viewingManager}
        onClose={() => setViewingManager(null)}
        manager={viewingManager}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingManager}
        onOpenChange={(open) => !open && setDeletingManager(null)}
        onConfirm={confirmDelete}
        title="Delete Manager"
        description={`Are you sure you want to delete ${deletingManager?.name}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default ManagersTable;
