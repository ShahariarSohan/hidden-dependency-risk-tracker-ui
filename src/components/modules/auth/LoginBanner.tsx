import { ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function LoginBanner() {
  return (
    <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-700 text-white p-10">
      <div className="text-center max-w-lg">
        {/* HDRT Logo */}
        <div className="flex justify-center items-center mb-6">
          <ShieldAlert className="h-20 w-20 text-red-500" />
        </div>

        {/* HDRT Description */}
        <h2 className="text-3xl font-bold mb-4">Welcome to HDRT</h2>
        <p className="text-lg mb-6">
          Hidden Dependency Risk Tracker (HDRT) helps organizations identify
          operational risks caused by over-dependence on employees, teams, or
          critical systems. Make informed decisions with clear metrics and risk
          dashboards.
        </p>

        {/* Optional call to action */}
        <p className="text-sm opacity-80">
          Please login to access your personalized risk dashboard and management
          tools.
        </p>
      </div>
    </div>
  );
}
