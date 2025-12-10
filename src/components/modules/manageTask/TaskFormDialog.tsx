/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/immutability */
"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

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

import { createTask, updateTask } from "@/services/manageTasks/manageTask";

import { getSystems } from "@/services/admin/manageSystem";

import { IEmployee } from "@/types/employee.interface";
import { ISystem } from "@/types/system.interface";
import { ITask } from "@/types/task.interface";
import { queryStringFormatter } from "@/lib/formatters";
import { getEmployees } from "@/services/admin/manageEmployee";

import TaskSearchableSelect from "@/components/shared/TaskSearchableSelect";

interface ITaskFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  task?: ITask;
}

// ============================================
// SEARCHABLE SELECT COMPONENT (REUSABLE)
// ============================================

// ============================================
// CUSTOM HOOK: useDebounceSearch
// ============================================
function useDebounceSearch<T>(
  searchTerm: string,
  open: boolean,
  fetchFunction: (query: string) => Promise<any>,
  minChars: number = 2
) {
  const [items, setItems] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!open) return;

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (searchTerm.length < minChars) {
      setItems([]);
      return;
    }

    setIsLoading(true);

    debounceTimer.current = setTimeout(async () => {
      try {
        const query = queryStringFormatter({
          searchTerm,
          limit: "20",
          page: "1",
        });
        const res = await fetchFunction(query);

        if (res?.success && res?.data) {
          setItems(res.data);
        } else {
          setItems([]);
        }
      } catch (error) {
        toast.error("Failed to load data");
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [searchTerm, open, fetchFunction, minChars]);

  return { items, isLoading, setItems };
}

// ============================================
// MAIN COMPONENT
// ============================================
const TaskFormDialog = ({
  open,
  onClose,
  onSuccess,
  task,
}: ITaskFormDialogProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const isEdit = !!task?.id;

  // Employee state
  const [selectedEmployee, setSelectedEmployee] = useState<IEmployee | null>(
    null
  );
  const [employeeSearch, setEmployeeSearch] = useState("");

  // System state
  const [selectedSystem, setSelectedSystem] = useState<ISystem | null>(null);
  const [systemSearch, setSystemSearch] = useState("");

  // Date state
  const [dueDate, setDueDate] = useState<string>(
    task?.dueDate ? task.dueDate.split("T")[0] : ""
  );

  // Use custom hook for debounced search
  const {
    items: employees,
    isLoading: isLoadingEmployees,
    setItems: setEmployees,
  } = useDebounceSearch<IEmployee>(employeeSearch, open, getEmployees);

  const {
    items: systems,
    isLoading: isLoadingSystems,
    setItems: setSystems,
  } = useDebounceSearch<ISystem>(systemSearch, open, getSystems);

  // Form action state
  const [state, formAction, isPending] = useActionState(
    isEdit ? updateTask.bind(null, task?.id as string) : createTask,
    null
  );

  // Pre-populate for edit mode
  useEffect(() => {
    if (isEdit && task) {
      if (task.employee) setSelectedEmployee(task.employee);
      if (task.system) setSelectedSystem(task.system);
      if (task.dueDate) setDueDate(task.dueDate.split("T")[0]);
    }
  }, [isEdit, task]);

  // Handle success/error
  useEffect(() => {
    if (state?.success) {
      toast.success(state.message || "Task saved successfully");
      handleClose();
      onSuccess();
    } else if (state?.message && !state.success) {
      toast.error(state.message);
    }
  }, [state, onSuccess]);

  // Close handler
  const handleClose = () => {
    formRef.current?.reset();
    setSelectedEmployee(null);
    setEmployeeSearch("");
    setEmployees([]);
    setSelectedSystem(null);
    setSystemSearch("");
    setSystems([]);
    setDueDate(task?.dueDate ? task.dueDate.split("T")[0] : "");
    onClose();
  };

  // Form validation
  const handleSubmit = async (formData: FormData) => {
    // Validate due date
    if (
      dueDate &&
      task?.createdAt &&
      new Date(dueDate) < new Date(task.createdAt)
    ) {
      toast.error("Due date cannot be earlier than task creation date");
      return;
    }

    // Add hidden fields
    if (selectedEmployee) {
      formData.append("employeeId", selectedEmployee.id);
    }
    if (selectedSystem) {
      formData.append("systemId", selectedSystem.id);
    }
    if (dueDate) {
      formData.append("dueDate", dueDate);
    }

    // Call server action
    formAction(formData);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>{isEdit ? "Edit Task" : "Create New Task"}</DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          action={handleSubmit}
          className="flex flex-col flex-1 min-h-0"
        >
          <div className="flex-1 overflow-y-auto px-6 space-y-5 pb-4">
            {/* Title */}
            <Field>
              <FieldLabel htmlFor="title">Task Title</FieldLabel>
              <Input
                id="title"
                name="title"
                placeholder="Enter a clear and concise task title"
                defaultValue={state?.formData?.title || task?.title || ""}
                disabled={isPending}
              />
              <InputFieldError field="title" state={state} />
            </Field>

            {/* Description */}
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <textarea
                id="description"
                name="description"
                placeholder="Provide detailed information about the task..."
                defaultValue={
                  state?.formData?.description || task?.description || ""
                }
                disabled={isPending}
                rows={3}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
              />
              <InputFieldError field="description" state={state} />
            </Field>

            {/* Priority (Create Mode Only) */}
            {!isEdit && (
              <Field>
                <FieldLabel htmlFor="priority">Priority Level</FieldLabel>
                <select
                  id="priority"
                  name="priority"
                  className="border rounded-md p-2 w-full bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                  defaultValue={state?.formData?.priority || "3"}
                  disabled={isPending}
                >
                  <option value="1">1 - Lowest</option>
                  <option value="2">2 - Low</option>
                  <option value="3">3 - Medium</option>
                  <option value="4">4 - High</option>
                  <option value="5">5 - Critical</option>
                </select>
                <InputFieldError field="priority" state={state} />
              </Field>
            )}
            {!isEdit && (
              <Field>
                <FieldLabel>Assign to Employee</FieldLabel>
                <TaskSearchableSelect
                  items={employees}
                  selectedItem={selectedEmployee}
                  searchTerm={employeeSearch}
                  isLoading={isLoadingEmployees}
                  onSearchChange={setEmployeeSearch}
                  onSelect={setSelectedEmployee}
                  onClear={() => setSelectedEmployee(null)}
                  placeholder="Search by name or email (min 2 characters)..."
                  emptyMessage="No employees found. Try a different search term."
                  disabled={isPending || (isEdit && !!task?.employee)}
                  color="blue"
                  renderItem={(emp: IEmployee) => (
                    <>
                      <p className="font-medium text-sm text-gray-900 truncate">
                        {emp.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {emp.email}
                      </p>
                    </>
                  )}
                  renderSelected={(emp: IEmployee) => (
                    <>
                      <p className="font-semibold text-sm text-gray-900">
                        {emp.name}
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5">
                        {emp.email}
                      </p>
                      {emp.id && (
                        <p className="text-xs text-gray-500 mt-1">
                          ID: {emp.id}
                        </p>
                      )}
                    </>
                  )}
                />
                <InputFieldError field="employeeId" state={state} />
              </Field>
            )}

            {!isEdit && (
              <Field>
                <FieldLabel>Assign to System</FieldLabel>
                <TaskSearchableSelect
                  items={systems}
                  selectedItem={selectedSystem}
                  searchTerm={systemSearch}
                  isLoading={isLoadingSystems}
                  onSearchChange={setSystemSearch}
                  onSelect={setSelectedSystem}
                  onClear={() => setSelectedSystem(null)}
                  placeholder="Search system name (min 2 characters)..."
                  emptyMessage="No systems found. Try a different search term."
                  disabled={isPending}
                  color="green"
                  renderItem={(sys: ISystem) => (
                    <p className="font-medium text-sm text-gray-900 truncate">
                      {sys.name}
                    </p>
                  )}
                  renderSelected={(sys: ISystem) => (
                    <>
                      <p className="font-semibold text-sm text-gray-900">
                        {sys.name}
                      </p>
                      {sys.description && (
                        <p className="text-xs text-gray-600 mt-0.5">
                          {sys.description}
                        </p>
                      )}
                    </>
                  )}
                />
                <InputFieldError field="systemId" state={state} />
              </Field>
            )}

            {/* Due Date (Edit Mode Only) */}
            {isEdit && (
              <Field>
                <FieldLabel htmlFor="dueDate">Due Date</FieldLabel>
                <Input
                  id="dueDate"
                  name="dueDate"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  disabled={isPending}
                  min={task?.createdAt?.split("T")[0]}
                />
                <InputFieldError field="dueDate" state={state} />
                {task?.createdAt && (
                  <p className="text-xs text-gray-500 mt-1">
                    Task created on:{" "}
                    {new Date(task.createdAt).toLocaleDateString()}
                  </p>
                )}
              </Field>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isEdit ? "Updating..." : "Creating..."}
                </>
              ) : isEdit ? (
                "Update Task"
              ) : (
                "Create Task"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TaskFormDialog;
