import { IEmployee } from "@/types/employee.interface";

// src/components/manager/TeamEmployeesTable.tsx
export default function TeamEmployeesTable({ employees }:{ employees:IEmployee[]}) {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Team Employees</h2>
        <p className="text-sm text-gray-600">Total: {employees.length}</p>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-gray-600">
            <tr>
              <th className="py-2 pr-4 font-medium">Name</th>
              <th className="py-2 pr-4 font-medium">Email</th>
              <th className="py-2 pr-4 font-medium">Contact</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e: IEmployee) => (
              <tr key={e.id} className="border-t">
                <td className="py-2 pr-4">{e.name}</td>
                <td className="py-2 pr-4">{e.email}</td>
                <td className="py-2 pr-4">{e.contactNumber}</td>
              </tr>
            ))}
            {employees.length === 0 && (
              <tr className="border-t">
                <td className="py-4 text-gray-500" colSpan={3}>
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
