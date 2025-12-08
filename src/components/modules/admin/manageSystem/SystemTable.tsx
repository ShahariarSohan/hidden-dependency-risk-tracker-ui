"use client";

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import ManagementTable from "@/components/shared/ManagementTable";

import {
  softDeleteSystem,
  updateSystemStatus,
} from "@/services/admin/manageSystem";

import { ISystem } from "@/types/system.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { systemColumns } from "./SystemColumns";
import SystemFormDialog from "./SystemFormDialog";
import SystemViewDetailDialog from "./SystemViewDialog";

import StatusToggleCell from "@/components/shared/cell/StatusToggleCell";
import { ActiveStatus } from "@/types/status.interface";

interface SystemsTableProps {
  systems: ISystem[];
}

const SystemsTable = ({ systems }: SystemsTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [deletingSystem, setDeletingSystem] = useState<ISystem | null>(null);
  const [viewingSystem, setViewingSystem] = useState<ISystem | null>(null);
  const [editingSystem, setEditingSystem] = useState<ISystem | null>(null);

  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (system: ISystem) => setViewingSystem(system);
  const handleEdit = (system: ISystem) => setEditingSystem(system);
  const handleDelete = (system: ISystem) => setDeletingSystem(system);

  const confirmDelete = async () => {
    if (!deletingSystem) return;

    setIsDeleting(true);
    const result = await softDeleteSystem(deletingSystem.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "System deleted successfully");
      setDeletingSystem(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete system");
    }
  };

  const handleStatusChange = async (
    id: string,
    status: ActiveStatus.ACTIVE | ActiveStatus.INACTIVE
  ) => {
    return await updateSystemStatus(id, status);
  };

  return (
    <>
      <ManagementTable
        data={systems}
        columns={systemColumns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        customActions={(row) => (
          <StatusToggleCell
            id={row.id}
            status={row.status}
            onSuccess={handleRefresh}
            handleStatusChange={handleStatusChange}
          />
        )}
        getRowKey={(system) => system.id}
        emptyMessage="No systems found"
      />

      {/* Create / Edit System Form */}
      <SystemFormDialog
        open={!!editingSystem}
        onClose={() => setEditingSystem(null)}
        onSuccess={() => {
          setEditingSystem(null);
          handleRefresh();
        }}
        system={editingSystem!}
      />

      {/* View System Details */}
      <SystemViewDetailDialog
        open={!!viewingSystem}
        onClose={() => setViewingSystem(null)}
        system={viewingSystem}
      />

      {/* Delete confirmation */}
      <DeleteConfirmationDialog
        open={!!deletingSystem}
        onOpenChange={(open) => !open && setDeletingSystem(null)}
        onConfirm={confirmDelete}
        title="Delete System"
        description={`Are you sure you want to delete system "${deletingSystem?.name}"? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default SystemsTable;
