

import { Avatar } from "@/components/ui/avatar";
import { getInitials } from "@/lib/formatters";

interface IEntityInfoCellProps {
  name: string;
}

export default function EntityInfoCell({ name }: IEntityInfoCellProps) {
  if (name === "N/A") {
    return <p className="font-medium">{name}</p>
  }
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary font-semibold">
          {getInitials(name)}
        </div>
      </Avatar>

      <p className="font-medium">{name}</p>
    </div>
  );
}
