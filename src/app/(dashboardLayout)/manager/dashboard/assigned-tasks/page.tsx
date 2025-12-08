import AssignedTaskHeader from "@/components/modules/assignedTask/AssignedTaskHeader";
import AssignedTaskTable from "@/components/modules/assignedTask/AssignTaskTable";
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