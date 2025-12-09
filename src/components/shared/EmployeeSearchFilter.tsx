import useDebounce from "@/hooks/useDebounce";
import { useEffect } from "react";

export default function EmployeeSearchFilter({
  value,
  onChange,
  placeholder = "Search employees...",
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}) {
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue,onChange]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="border rounded-md p-2 w-full"
    />
  );
}