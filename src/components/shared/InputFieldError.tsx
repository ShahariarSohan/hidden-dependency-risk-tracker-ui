import getInputFieldError, { IInputErrorState } from "@/lib/getInputFieldError";
import { FieldDescription } from "../ui/field";

interface IInputFieldErrorProps {
  field: string;
  state?: IInputErrorState | null;
}

export default function InputFieldError({
  field,
  state,
}: IInputFieldErrorProps) {
  const errorMessage = getInputFieldError(field, state);

  if (!errorMessage) return null;

  return (
    <FieldDescription className="text-red-600">{errorMessage}</FieldDescription>
  );
}
