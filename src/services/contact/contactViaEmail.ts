/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IInputErrorState } from "@/lib/getInputFieldError";
import { serverFetch } from "@/lib/serverFetch";
import zodValidator from "@/lib/zodValidator";
import { ContactSchema } from "@/zod/contact.validation";


const contactViaEmail = async (
  _currentState: any,
  formData: FormData
): Promise<IInputErrorState | any> => {
  try {
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // Validate using zodValidator
    const validationResult = zodValidator(payload, ContactSchema);

    if (!validationResult.success) {
      return validationResult;
    }

    const validatedPayload = validationResult.data;
    if (!validatedPayload) {
        return {
          success: false,
          message: "Provide required or valid input",
          formData: payload,
        };
      }
    try {
      const response = await serverFetch.post("/contact/send", {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedPayload),
      });

      return await response.json();
    } catch (error: any) {
      console.error("Contact via email error:", error);
      return {
        success: false,
        message:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Failed to submit request",
        formData: payload,
      };
    }
  } catch (err: any) {
    console.log(err);

    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? err.message
          : "Failed to submit request"
      }`,
    };
  }
};

export default contactViaEmail;
