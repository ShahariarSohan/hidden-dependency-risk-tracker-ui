"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Loader2, User, X } from "lucide-react";

import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";



import { IEmployee } from "@/types/employee.interface";
import { queryStringFormatter } from "@/lib/formatters";
import { addEmployeeToTeam, getEmployees } from "@/services/admin/manageEmployee";

interface IAddEmployeeToTeamDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  teamId: string;
  teamName: string;
  employeeId?: string; // Optional: pre-selected employee
}

const AddEmployeeToTeamDialog = ({
  open,
  onClose,
  onSuccess,
  teamId,
  teamName,
  employeeId,
}: IAddEmployeeToTeamDialogProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const debounceTimer = useRef<NodeJS.Timeout>();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<IEmployee | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoadingEmployees, setIsLoadingEmployees] = useState(false);

  // Debounced search for employees
  useEffect(() => {
    if (!open) return;

    // Clear previous timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // If search term is less than 2 characters, clear results
    if (searchTerm.length < 2) {
      setEmployees([]);
      return;
    }

    setIsLoadingEmployees(true);

    // Set new timer for debounced search
    debounceTimer.current = setTimeout(async () => {
      try {
        // Build search params object
        const searchParamsObj: {
          [key: string]: string | string[] | undefined;
        } = {
          searchTerm: searchTerm,
          limit: "20",
          page: "1",
        };

        // Use your queryStringFormatter
        const queryString = queryStringFormatter(searchParamsObj);
         console.log(queryString)
          const res = await getEmployees(queryString);
          console.log(res)

        if (res?.success && res?.data) {
          setEmployees(res.data);
        } else {
          setEmployees([]);
        }
      } catch (error) {
        toast.error("Failed to load employees");
        setEmployees([]);
      } finally {
        setIsLoadingEmployees(false);
      }
    }, 500); // 500ms debounce delay

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [open, searchTerm]);

  // Handle pre-selected employee
  useEffect(() => {
    if (employeeId && employees.length > 0) {
      const employee = employees.find((emp) => emp.id === employeeId);
      if (employee) {
        setSelectedEmployee(employee);
      }
    }
  }, [employeeId, employees]);

  const [state, formAction, isPending] = useActionState(
    selectedEmployee
      ? addEmployeeToTeam.bind(null, selectedEmployee.id)
      : async () => ({ success: false, message: "Please select an employee" }),
    null
  );

  // Handle success and error
  useEffect(() => {
    if (state?.success) {
      toast.success(state.message || "Employee added to team successfully");
      formRef.current?.reset();
      onSuccess();
      handleClose();
    } else if (state?.message && !state.success) {
      toast.error(state.message);
    }
  }, [state, onSuccess]);

  const handleClose = () => {
    formRef.current?.reset();
    setSelectedEmployee(null);
    setSearchTerm("");
    setEmployees([]);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Add Employee to {teamName}</DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          action={formAction}
          className="flex flex-col flex-1 min-h-0"
        >
          {/* Hidden input for teamId */}
          <input type="hidden" name="teamId" value={teamId} />

          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
            {/* Employee Search & Selection */}
            <Field>
              <FieldLabel>Search & Select Employee</FieldLabel>

              <div className="space-y-3">
                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by name, email, or employee ID (min 2 characters)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isPending}
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Loading State */}
                {isLoadingEmployees && (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">
                      Searching employees...
                    </span>
                  </div>
                )}

                {/* Selected Employee Display */}
                {selectedEmployee && (
                  <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-gray-900">
                            {selectedEmployee.name}
                          </p>
                          <p className="text-xs text-gray-600 mt-0.5">
                            {selectedEmployee.email}
                          </p>
                          {selectedEmployee.id && (
                            <p className="text-xs text-gray-500 mt-1">
                              ID: {selectedEmployee.id}
                            </p>
                          )}
                         
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedEmployee(null)}
                        className="h-8 w-8 p-0 flex-shrink-0"
                        disabled={isPending}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Employee List */}
                {!isLoadingEmployees &&
                  !selectedEmployee &&
                  employees.length > 0 && (
                    <div className="border rounded-lg divide-y max-h-80 overflow-y-auto">
                      {employees.map((employee) => (
                        <button
                          key={employee.id}
                          type="button"
                          onClick={() => setSelectedEmployee(employee)}
                          className="w-full p-3 hover:bg-gray-50 transition-colors text-left flex items-center gap-3"
                          disabled={isPending}
                        >
                          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <User className="h-5 w-5 text-gray-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm text-gray-900 truncate">
                              {employee.name}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                              {employee.email}
                            </p>
                           
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                {/* Empty State */}
                {!isLoadingEmployees &&
                  !selectedEmployee &&
                  employees.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      <User className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                      <p className="text-sm">
                        {searchTerm && searchTerm.length >= 2
                          ? "No employees found. Try a different search term."
                          : "Start typing (min 2 characters) to search for employees..."}
                      </p>
                    </div>
                  )}
              </div>

              <InputFieldError field="employee" state={state} />
            </Field>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending || !selectedEmployee}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Adding...
                </>
              ) : (
                "Add to Team"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEmployeeToTeamDialog;
