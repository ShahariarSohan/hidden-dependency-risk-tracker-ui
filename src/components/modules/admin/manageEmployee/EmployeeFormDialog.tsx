"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import {
  addEmployeeToTeam,
  createEmployee,
  
} from "@/services/admin/manageEmployee";
import { getTeams } from "@/services/admin/manageTeam";

import { IEmployee } from "@/types/employee.interface";
import { ITeam } from "@/types/team.interface";

interface IEmployeeFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  employee?: IEmployee; // If passed → edit mode
}

const EmployeeFormDialog = ({
  open,
  onClose,
  onSuccess,
  employee,
}: IEmployeeFormDialogProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const isEdit = !!employee?.id;

  const [teams, setTeams] = useState<ITeam[]>([]);

  // Load teams only in edit mode
  useEffect(() => {
    if (!isEdit) return;

    const loadTeams = async () => {
      const res = await getTeams();
      if (res?.data) setTeams(res.data);
    };

    loadTeams();
  }, [isEdit]);

  const [state, formAction, isPending] = useActionState(
    isEdit
      ? addEmployeeToTeam.bind(null, employee?.id as string) // PATCH employee team
      : createEmployee,
    null
  );

  // Handle success and error
  useEffect(() => {
    if (state?.success) {
      toast.success(state.message || "Operation successful");
      formRef.current?.reset();
      onSuccess();
      onClose();
    } else if (state?.message && !state.success) {
      toast.error(state.message);
    }
  }, [state, onClose, onSuccess]);

  const handleClose = () => {
    formRef.current?.reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] flex flex-col p-0 bg-card">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>
            {isEdit ? "Add To Team" : "Create New Employee"}
          </DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          action={formAction}
          className="flex flex-col flex-1 min-h-0"
        >
          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
            {/* Create mode → show all employee fields */}
            {!isEdit && (
              <>
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    defaultValue={state?.formData?.name || ""}
                  />
                  <InputFieldError field="name" state={state} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="employee@example.com"
                    defaultValue={state?.formData?.email || ""}
                  />
                  <InputFieldError field="email" state={state} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="contactNumber">
                    Contact Number
                  </FieldLabel>
                  <Input
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="+1234567890"
                    defaultValue={state?.formData?.contactNumber || ""}
                  />
                  <InputFieldError field="contactNumber" state={state} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    defaultValue={state?.formData?.password || ""}
                  />
                  <InputFieldError field="password" state={state} />
                </Field>
              </>
            )}

            {/* Edit mode → only team select */}
            {isEdit && (
              <Field>
                <FieldLabel htmlFor="teamId">Assign to Team</FieldLabel>
                <select
                  id="teamId"
                  name="teamId"
                  className="border rounded-md p-2 w-full bg-card"
                  defaultValue={employee?.teamId || ""}
                >
                  <option value="">Select Team</option>
                  {teams.map((team) => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </select>
                <InputFieldError field="teamId" state={state} />
              </Field>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 px-6 py-4 border-t bg-card">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isPending}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isPending}>
              {isPending
                ? "Saving..."
                : isEdit
                ? "Add To Team"
                : "Create Employee"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeFormDialog;
