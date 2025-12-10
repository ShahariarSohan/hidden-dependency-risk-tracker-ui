

import { formatDateTime } from "@/lib/formatters";



interface IDateCellProps {
  date?: string | Date;
}

export default function DateCell({ date }: IDateCellProps) {
  if (date === "N/A") {
   return <span className="text-sm">{date}</span>;
  }
  return <span className="text-sm">{formatDateTime(date!)}</span>;
}