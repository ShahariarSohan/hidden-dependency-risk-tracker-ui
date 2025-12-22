
"use client"

import { Button } from "@/components/ui/button";
import logoutUser from "@/services/auth/logoutUser";


export default function LogoutButton() {
    const handleLogout = async () => {
        await logoutUser()
    }
  return (
    <Button className="w-fit" variant="destructive" onClick={handleLogout}>
      Logout
    </Button>
  );
  
}