

import LoginForm from "@/components/modules/auth/LoginForm";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginBanner from "@/components/modules/auth/LoginBanner";

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ redirect?: string }>;
}) {
  const params = (await searchParams) || {};

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left Side: HDRT Logo & Info */}
      <LoginBanner></LoginBanner>
      {/* Right Side: Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <Card className="w-full max-w-md shadow-lg text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Login
            </CardTitle>
            <CardDescription className="text-(--hero-foreground)">
              Enter your email and password to access your HDRT dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm redirect={params?.redirect} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
