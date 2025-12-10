"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddEmployeeToTeamDialog from "./AddEmployeeToTeamDialog";


interface IAddEmployeeButtonProps {
  teamId: string;
  teamName: string;
}

export default function AddEmployeeButton({
  teamId,
  teamName,
}: IAddEmployeeButtonProps) {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);

  const handleSuccess = () => {
    // Refresh server component data without full page reload
    router.refresh();
  };

  return (
    <>
      <Button onClick={() => setShowDialog(true)}>
        <Plus className="h-4 w-4 mr-2" />
        Add Employee
      </Button>

      <AddEmployeeToTeamDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        onSuccess={handleSuccess}
        teamId={teamId}
        teamName={teamName}
      />
    </>
  );
}
