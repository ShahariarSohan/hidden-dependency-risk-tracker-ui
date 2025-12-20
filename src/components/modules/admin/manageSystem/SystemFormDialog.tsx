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

import { createSystem, updateSystem } from "@/services/admin/manageSystem";
import { getTeams } from "@/services/admin/manageTeam";

import { ITeam } from "@/types/team.interface";
import { ISystem } from "@/types/system.interface";


interface ISystemFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  system?: ISystem;
}

const SystemFormDialog = ({
  open,
  onClose,
  onSuccess,
  system,
}: ISystemFormDialogProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const isEdit = !!system?.id;

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
    isEdit ? updateSystem.bind(null, system?.id as string) : createSystem,
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
          <DialogTitle>{isEdit ? "Edit System" : "Add New System"}</DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          action={formAction}
          className="flex flex-col flex-1 min-h-0"
        >
          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
            {/* System Name */}
            <Field>
              <FieldLabel htmlFor="name">System Name</FieldLabel>
              <Input
                id="name"
                name="name"
                placeholder="Enter system name"
                defaultValue={state?.formData?.name || system?.name || ""}
              />
              <InputFieldError field="name" state={state} />
            </Field>

            {/* Description */}
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Input
                id="description"
                name="description"
                placeholder="Enter a short description"
                defaultValue={
                  state?.formData?.description || system?.description || ""
                }
              />
              <InputFieldError field="description" state={state} />
            </Field>

            {/* Criticality (ONLY IN CREATE MODE) */}
            {!isEdit && (
              <Field>
                <FieldLabel htmlFor="criticality">Criticality (1–5)</FieldLabel>
                <select
                  id="criticality"
                  name="criticality"
                  className="border rounded-md p-2 w-full bg-card"
                  defaultValue={state?.formData?.criticality || "1"}
                >
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <option key={lvl} value={lvl}>
                      {lvl}
                    </option>
                  ))}
                </select>
                <InputFieldError field="criticality" state={state} />
              </Field>
            )}

            {/* Team Selection (ONLY IN EDIT MODE) */}
            {isEdit && (
              <Field>
                <FieldLabel htmlFor="teamId">Assign to Team</FieldLabel>
                <select
                  id="teamId"
                  name="teamId"
                  className="border rounded-md p-2 w-full bg-white"
                  defaultValue={system?.teamId || ""}
                >
                  <option value="">No Team</option>
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
                ? "Update System"
                : "Create System"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SystemFormDialog;
