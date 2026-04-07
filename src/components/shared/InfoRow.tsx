import { ReactNode } from "react";

export default function InfoRow({ label, value }: { label: string; value?: ReactNode }) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-sm font-medium">{value || "N/A"}</p>
    </div>
  );
}
