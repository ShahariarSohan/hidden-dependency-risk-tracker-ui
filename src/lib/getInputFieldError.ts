/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IInputErrorState {
  success: boolean;
  errors: {
    field: string;
    message: string;
  }[];
}

export const getInputFieldError = (
  fieldName: string,
  state?: IInputErrorState | null
): string | null => {
  if (!state?.errors?.length) return null;

  const error = state.errors.find((err) => err.field === fieldName);
  return error?.message ?? null;
};

export default getInputFieldError;
