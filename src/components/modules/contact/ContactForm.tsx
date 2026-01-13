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
import contactRequestDemo from "@/services/contact/contactViaEmail";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import contactViaEmail from "@/services/contact/contactViaEmail";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    contactViaEmail,
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
            <Input id="name" name="name" placeholder="your name or company name" required />
            <InputFieldError field="name" state={state} />
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Your Email</FieldLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="your@gmail.com"
              required
            />
            <InputFieldError field="email" state={state} />
          </Field>
          <Field>
            <FieldLabel htmlFor="subject">Subject</FieldLabel>
            <Input
              id="subject"
              type="text"
              name="subject"
              placeholder="Write your subject"
              required
            />
            <InputFieldError field="subject" state={state} />
          </Field>
          <Field>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Textarea
              id="message"
              name="message"
              placeholder="Write your message..."
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
