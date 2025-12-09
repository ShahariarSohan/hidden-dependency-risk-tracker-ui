/* eslint-disable @typescript-eslint/no-explicit-any */

import { IManager } from "@/types/manager.interface";
import { ITeam } from "@/types/team.interface";

// src/components/manager/ManagerSummary.tsx
export default function ManagerSummary({ manager, team }:{manager:IManager,team:ITeam}) {
  return (
    <div className="grid gap-4 rounded-2xl border bg-white p-6 shadow-sm">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">My Team Info</h1>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border bg-gray-50 p-4">
          <div className="text-xs font-medium text-gray-600">Manager</div>
          <div className="mt-1 font-semibold">{manager.name}</div>
          <div className="text-sm text-gray-700">{manager.email}</div>
          <div className="text-sm text-gray-700">{manager.contactNumber}</div>
        </div>

        <div className="rounded-xl border bg-gray-50 p-4">
          <div className="text-xs font-medium text-gray-600">Team</div>
          <div className="mt-1 font-semibold">{team.name}</div>
          <div className="text-sm text-gray-700">
            Status: <span className="font-medium">{team.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
