import AssignedTaskHeader from "@/components/modules/assignedTasks/AssignedTaskHeader";
import AssignedTaskTable from "@/components/modules/assignedTasks/AssignTaskTable";
import { getMyAssignedTaskById } from "@/services/assignedTasks/assignedTask";

const MyTaskPage = async () => {
  // Fetch assigned tasks
  const assignedTasksResult = await getMyAssignedTaskById();

  return (
    <div className="space-y-6">
      {/* Header */}
      <AssignedTaskHeader />

      {/* Assigned Tasks Table */}
      <AssignedTaskTable assignedTasks={assignedTasksResult?.data || []} />
    </div>
  );
};

export default MyTaskPage;
