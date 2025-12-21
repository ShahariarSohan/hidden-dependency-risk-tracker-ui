/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IInputErrorState } from "@/lib/getInputFieldError";
import zodValidator from "@/lib/zodValidator";
import { contactDemoValidationSchema } from "@/zod/contact.validation";

const contactRequestDemo = async (
  _currentState: any,
  formData: FormData
): Promise<IInputErrorState | any> => {
  try {
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    // Validate using zodValidator
    if (zodValidator(payload, contactDemoValidationSchema).success === false) {
      return zodValidator(payload, contactDemoValidationSchema);
    }
    
    const validatedPayload = zodValidator(
      payload,
      contactDemoValidationSchema
    ).data;
      if (!validatedPayload) {
        return {
          success: false,
          message: "Provide required or valid input",
          formData: payload,
        };
      }
    // Simulate processing delay (remove API call as per requirement)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Demo: Return success response
    return {
      success: true,
      message: `Thank you ${
        validatedPayload.name
      }! We've received your  request and will contact you at ${
        validatedPayload.email
      } within 24 hours.`,
    };
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

export default contactRequestDemo;
