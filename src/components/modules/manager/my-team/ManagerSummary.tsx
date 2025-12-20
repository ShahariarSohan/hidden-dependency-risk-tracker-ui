/* eslint-disable @typescript-eslint/no-explicit-any */

import { IManager } from "@/types/manager.interface";
import { ITeam } from "@/types/team.interface";

// src/components/manager/ManagerSummary.tsx
export default function ManagerSummary({ manager, team }:{manager:IManager,team:ITeam}) {
  return (
    <div className="grid gap-4 rounded-2xl border bg-card p-6 shadow-lg">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">My Team Info</h1>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border bg-card p-4">
          <div className="text-xs font-medium text-(--hero-foreground)">Manager</div>
          <div className="mt-1 font-semibold">{manager.name}</div>
          <div className="text-sm text-(--hero-foreground)">{manager.email}</div>
          <div className="text-sm text-(--hero-foreground)">{manager.contactNumber}</div>
        </div>

        <div className="rounded-xl border bg-card p-4">
          <div className="text-xs font-medium text-(--hero-foreground)">Team</div>
          <div className="mt-1 font-semibold">{team.name}</div>
          <div className="text-sm text-(--hero-foreground)">
            Status: <span className="font-medium">{team.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
