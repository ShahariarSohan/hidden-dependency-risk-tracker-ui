import { ISystem } from "@/types/system.interface";

// src/components/manager/TeamSystemsTable.tsx
export default function TeamSystemsTable({ systems }: {systems:ISystem[]}) {
  return (
    <section className="rounded-2xl border  p-6 shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Team Systems</h2>
        <p className="text-sm ">Total: {systems.length}</p>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left ">
            <tr>
              <th className="py-2 pr-4 font-medium">Name</th>
              <th className="py-2 pr-4 font-medium">Criticality</th>
            </tr>
          </thead>
          <tbody>
            {systems.map((s: ISystem) => (
              <tr key={s.id} className="border-t">
                <td className="py-2 pr-4">{s.name}</td>
                <td className="py-2 pr-4">{s.criticality}</td>
              </tr>
            ))}
            {systems.length === 0 && (
              <tr className="border-t">
                <td className="py-4 " colSpan={2}>
                  No systems found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
