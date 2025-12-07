/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/serverFetch";
import zodValidator from "@/lib/zodValidator";
import { ActiveStatus } from "@/types/status.interface";
import { updateStatusZodSchema } from "@/zod/status.validation";

import { createEmployeeZodSchema } from "@/zod/user.validation";

export async function createEmployee(_prevState: any, formData: FormData) {
  // Build validation payload
  const validationPayload = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    contactNumber: formData.get("contactNumber") as string,
    password: formData.get("password") as string,
  };

  const validatedPayload = zodValidator(
    validationPayload,
    createEmployeeZodSchema
  );

  if (!validatedPayload.success && validatedPayload.errors) {
    return {
      success: validatedPayload.success,
      message: "Validation failed",
      formData: validationPayload,
      errors: validatedPayload.errors,
    };
  }

  if (!validatedPayload.data) {
    return {
      success: false,
      message: "Validation failed",
      formData: validationPayload,
    };
  }
  const backendPayload = {
    password: validatedPayload.data.password,
    name: validatedPayload.data.name,
    email: validatedPayload.data.email,
    contactNumber: validatedPayload.data.contactNumber,
  };
  console.log(backendPayload);
  try {
    const response = await serverFetch.post("/user/employee", {
      body: JSON.stringify(backendPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Create Employee error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to create employee",
      formData: validationPayload,
    };
  }
}

export async function getEmployees(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/employee${queryString ? `?${queryString}` : ""}`
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
}

export async function updateEmployeeStatus(
  id: string,
  status: ActiveStatus.ACTIVE | ActiveStatus.INACTIVE
) {
  // Build validation payload
  const validationPayload = {
    status,
  };

  const validatedPayload = zodValidator(
    validationPayload,
    updateStatusZodSchema
  );

  if (!validatedPayload.success && validatedPayload.errors) {
    return {
      success: validatedPayload.success,
      message: "Validation failed",
      formData: validationPayload,
      errors: validatedPayload.errors,
    };
  }

  if (!validatedPayload.data) {
    return {
      success: false,
      message: "Validation failed",
      formData: validationPayload,
    };
  }
  const backendPayload = {
    status: validatedPayload.data.status,
  };
  console.log(backendPayload);
  try {
    const response = await serverFetch.patch(`/employee/status/${id}`, {
      body: JSON.stringify(backendPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Create Employee error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to update status",
      formData: validationPayload,
    };
  }
}
export async function getEmployeeById(id: string) {
  try {
    const response = await serverFetch.get(`/employee/${id}`);
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
}

// export async function updateEmployee(
//   id: string,
//   _prevState: any,
//   formData: FormData
// ) {
//   const validationPayload: any = {
//     name: formData.get("name") as string,
//     contactNumber: formData.get("contactNumber") as string,
//   };

//   /*
//     // Server-side validation
//         const validation = updateAdminZodSchema.safeParse(validationPayload);
//         if (!validation.success) {
//             const errors = validation.error.issues.map((err: any) => ({
//                 field: err.path[0] as string,
//                 message: err.message,
//             }));
//             return {
//                 success: false,
//                 message: "Validation failed",
//                 formData: validationPayload,
//                 errors,
//             };
//         }
//     */

//   const validation = zodValidator(validationPayload, updateAdminZodSchema);
//   if (!validation.success && validation.errors) {
//     return {
//       success: validation.success,
//       message: "Validation failed",
//       formData: validationPayload,
//       errors: validation.errors,
//     };
//   }
//   if (!validation.data) {
//     return {
//       success: false,
//       message: "Validation failed",
//       formData: validationPayload,
//     };
//   }

//   try {
//     const response = await serverFetch.patch(`/admin/${id}`, {
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(validation.data),
//     });

//     const result = await response.json();
//     return result;
//   } catch (error: any) {
//     console.error("Update admin error:", error);
//     return {
//       success: false,
//       message:
//         process.env.NODE_ENV === "development"
//           ? error.message
//           : "Failed to update admin",
//       formData: validationPayload,
//     };
//   }
// }

export async function softDeleteEmployee(id: string) {
  try {
    const response = await serverFetch.delete(`/employee/soft-delete/${id}`);
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
}

// export async function deleteEmployee(id: string) {
//   try {
//     const response = await serverFetch.delete(`/employee/${id}`);
//     const result = await response.json();
//     return result;
//   } catch (error: any) {
//     console.log(error);
//     return {
//       success: false,
//       message: `${
//         process.env.NODE_ENV === "development"
//           ? error.message
//           : "Something went wrong"
//       }`,
//     };
//   }
// }
