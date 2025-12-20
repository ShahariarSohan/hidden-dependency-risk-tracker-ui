"use client";

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
import { createTeam, updateTeamByName } from "@/services/admin/manageTeam";


import { ITeam } from "@/types/team.interface";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";

interface ITeamFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  team?: ITeam;
}

const TeamFormDialog = ({
  open,
  onClose,
  onSuccess,
  team,
}: ITeamFormDialogProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const isEdit = !!team?.id;
  

  const [state, formAction, isPending] = useActionState(
    isEdit ? updateTeamByName.bind(null, team?.id as string) : createTeam,
    null
  );

  // Handle success/error
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
          <DialogTitle>{isEdit ? "Edit Team" : "Add New Team"}</DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          action={formAction}
          className="flex flex-col flex-1 min-h-0"
        >
          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
            {/* Name Field */}
            <Field>
              <FieldLabel htmlFor="name">Team Name</FieldLabel>
              <Input
                id="name"
                name="name"
                placeholder="Enter team name"
                defaultValue={state?.formData?.name || team?.name || ""}
              />
              <InputFieldError field="name" state={state} />
            </Field>
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
              {isPending ? "Saving..." : isEdit ? "Update Team" : "Create Team"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TeamFormDialog;
