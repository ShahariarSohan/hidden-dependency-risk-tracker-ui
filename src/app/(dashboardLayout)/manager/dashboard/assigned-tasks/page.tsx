import AssignedTaskHeader from "@/components/modules/assignedTasks/AssignedTaskHeader";
import AssignedTaskTable from "@/components/modules/assignedTasks/AssignTaskTable";
import { getMyAssignedTaskById } from "@/services/assignedTasks/assignedTask";

export default async function MyAssignedTasks() {
  const assignedTasksResult = await getMyAssignedTaskById();
  console.log(assignedTasksResult);

  return (
    <div className="space-y-6">
      {/* Header */}
      <AssignedTaskHeader />

      {/* Assigned Tasks Table */}
      <AssignedTaskTable assignedTasks={assignedTasksResult?.data || []} />
    </div>
  );
}
