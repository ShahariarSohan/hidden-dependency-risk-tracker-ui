import AdminAssignedTaskHeader from "@/components/modules/admin/adminAssignedTask/AdminAssignedTaskHeader";
import AdminAssignedTaskTable from "@/components/modules/admin/adminAssignedTask/AdminAssignTaskTable";
import { getMyAssignedTaskById } from "@/services/admin/manageTask";


const AdminAssignedTaskPage = async () => {
  // Fetch assigned tasks
  const assignedTasksResult = await getMyAssignedTaskById();
  console.log(assignedTasksResult)

  return (
    <div className="space-y-6">
      {/* Header */}
      <AdminAssignedTaskHeader />

      {/* Assigned Tasks Table */}
      <AdminAssignedTaskTable assignedTasks={assignedTasksResult?.data || []} />
    </div>
  );
};

export default AdminAssignedTaskPage;
