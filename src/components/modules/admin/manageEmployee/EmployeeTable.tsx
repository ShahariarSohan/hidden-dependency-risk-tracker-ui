"use client";

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import ManagementTable from "@/components/shared/ManagementTable";
import { softDeleteEmployee } from "@/services/admin/manageEmployee";


import { IEmployee } from "@/types/employee.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { employeeColumns } from "./EmployeeColumns";
import EmployeeFormDialog from "./EmployeeFormDialog";
import EmployeeViewDetailDialog from "./EmployeeViewDetailDialog";


interface EmployeesTableProps {
  employees: IEmployee[];
}

const EmployeesTable = ({ employees }: EmployeesTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [deletingEmployee, setDeletingEmployee] = useState<IEmployee | null>(
    null
  );
  const [viewingEmployee, setViewingEmployee] = useState<IEmployee | null>(
    null
  );
  const [editingEmployee, setEditingEmployee] = useState<IEmployee | null>(
    null
  );
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (employee: IEmployee) => {
    setViewingEmployee(employee);
  };

  const handleEdit = (employee: IEmployee) => {
    setEditingEmployee(employee);
  };

  const handleDelete = (employee: IEmployee) => {
    setDeletingEmployee(employee);
  };

  const confirmDelete = async () => {
    if (!deletingEmployee) return;

    setIsDeleting(true);
    const result = await softDeleteEmployee(deletingEmployee.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Employee deleted successfully");
      setDeletingEmployee(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete employee");
    }
  };

  return (
    <>
      <ManagementTable
        data={employees}
        columns={employeeColumns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        getRowKey={(employee) => employee.id!}
        emptyMessage="No employees found"
      />

      {/* Edit Employee Form Dialog */}
      <EmployeeFormDialog
        open={!!editingEmployee}
        onClose={() => setEditingEmployee(null)}
        onSuccess={() => {
          setEditingEmployee(null);
          handleRefresh();
        }}
      />

      {/* View Employee Detail Dialog */}
      <EmployeeViewDetailDialog
        open={!!viewingEmployee}
        onClose={() => setViewingEmployee(null)}
        employee={viewingEmployee}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingEmployee}
        onOpenChange={(open) => !open && setDeletingEmployee(null)}
        onConfirm={confirmDelete}
        title="Delete Employee"
        description={`Are you sure you want to delete ${deletingEmployee?.name}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default EmployeesTable;
