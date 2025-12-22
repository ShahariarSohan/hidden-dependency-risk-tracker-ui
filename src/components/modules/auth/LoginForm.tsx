/* eslint-disable react-hooks/set-state-in-effect */

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import loginUser from "@/services/auth/loginUser";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, Shield, User, Users } from "lucide-react";
import { DEMO_CREDENTIALS } from "@/lib/demoCredentials";

/**
 * Demo credentials for quick testing
 * These should match real accounts in your database
 */

type DemoRole = keyof typeof DEMO_CREDENTIALS;

interface LoginFormProps {
  redirect?: string;
}

export default function LoginForm({ redirect }: LoginFormProps) {
  // Server action state management
  const [state, formAction, isPending] = useActionState(loginUser, null);

  // Controlled form inputs - Enterprise standard approach
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Track which demo button was clicked
  const [demoRole, setDemoRole] = useState<DemoRole | null>(null);

  // Handle authentication errors
  useEffect(() => {
    if (state && !state.success) {
      toast.error(state.message);
      setDemoRole(null); // Reset demo role on error
    }
  }, [state]);

  /**
   * Handle demo credential button clicks
   * Pre-fills the form with role-specific credentials
   */
  const handleDemoLogin = (role: DemoRole) => {
    setDemoRole(role);
    setEmail(DEMO_CREDENTIALS[role].email);
    setPassword(DEMO_CREDENTIALS[role].password);
  };

  return (
    <div className="text-(--hero-foreground)">
      <form action={formAction}>
        {/* Hidden redirect field */}
        {redirect && <Input type="hidden" name="redirect" value={redirect} />}

        <FieldGroup>
          {/* Email Field */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isPending}
            />
            <InputFieldError field="email" state={state} />
          </Field>

          {/* Password Field */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isPending}
            />
            <InputFieldError field="password" state={state} />
          </Field>

          <FieldGroup>
            <Field>
              {/* Primary Login Button */}
              <Button
                type="submit"
                className="text-white flex items-center gap-2"
                disabled={isPending}
              >
                {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                {isPending ? "Logging in..." : "Login"}
              </Button>

              {/* Demo Credentials Section */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-800">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">
                  Quick Demo Login
                </p>

                {/* Demo Role Buttons - Responsive Grid */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Admin Demo Button */}
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => handleDemoLogin("admin")}
                    disabled={isPending}
                  >
                    <Shield className="h-4 w-4 text-red-500" />
                    <span>Admin</span>
                  </Button>

                  {/* Manager Demo Button */}
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => handleDemoLogin("manager")}
                    disabled={isPending}
                  >
                    <Users className="h-4 w-4 text-blue-500" />
                    <span>Manager</span>
                  </Button>

                  {/* Employee Demo Button */}
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => handleDemoLogin("employee")}
                    disabled={isPending}
                  >
                    <User className="h-4 w-4 text-green-500" />
                    <span>Employee</span>
                  </Button>
                </div>

                {/* Helper Text */}
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
                  Click a role above to auto-fill credentials, then press Login
                </p>
              </div>

              {/* Footer Link */}
              <FieldDescription className="px-6 text-center flex items-center justify-center gap-1 text-(--hero-foreground)">
                Go back to <Link href="/">Home</Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldGroup>
      </form>
    </div>
  );
}
