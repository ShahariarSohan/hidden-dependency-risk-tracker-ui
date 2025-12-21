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
import { Textarea } from "@/components/ui/textarea";
import contactRequestDemo from "@/services/contact/contactRequestDemo";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    contactRequestDemo,
    null
  );

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
    } else if (state && !state.success) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="text-(--hero-foreground)">
      <form action={formAction}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input id="name" name="name" placeholder="John Doe" required />
            <InputFieldError field="name" state={state} />
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Work Email</FieldLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="john@company.com"
              required
            />
            <InputFieldError field="email" state={state} />
          </Field>

          <Field>
            <FieldLabel htmlFor="company">Company Name</FieldLabel>
            <Input
              id="company"
              name="company"
              placeholder="Acme Corporation"
              required
            />
            <InputFieldError field="company" state={state} />
          </Field>

          

          <Field>
            <FieldLabel htmlFor="message">Message (Optional)</FieldLabel>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your needs..."
              rows={4}
            />
            <InputFieldError field="message" state={state} />
          </Field>

          <FieldGroup>
            <Field>
              <Button
                type="submit"
                className="text-white flex items-center gap-2"
                disabled={isPending}
              >
                {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                {isPending ? "Submitting" : "Submit"}
              </Button>

              <FieldDescription className="px-6 text-center flex items-center justify-center gap-1 text-(--hero-foreground)">
                Go back to{" "}
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldGroup>
      </form>
    </div>
  );
}
