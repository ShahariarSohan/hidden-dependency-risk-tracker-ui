/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/serverFetch";
import zodValidator from "@/lib/zodValidator";
import { ActiveStatus } from "@/types/status.interface";
import { updateStatusZodSchema } from "@/zod/status.validation";
import { addToTeamSchema } from "@/zod/team.validation";
import { createManagerZodSchema } from "@/zod/user.validation";



// CREATE MANAGER
export async function createManager(_prevState: any, formData: FormData) {
  const validationPayload = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    contactNumber: formData.get("contactNumber") as string,
    password: formData.get("password") as string,
  };

  const validatedPayload = zodValidator(
    validationPayload,
    createManagerZodSchema
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

  try {
    const response = await serverFetch.post("/user/manager", {
      body: JSON.stringify(backendPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to create manager",
      formData: validationPayload,
    };
  }
}

// GET ALL MANAGERS
export async function getManagers(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/manager${queryString ? `?${queryString}` : ""}`
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
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

// UPDATE MANAGER STATUS
export async function updateManagerStatus(id: string, status: ActiveStatus) {
  const validationPayload = { status };

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

  try {
    const response = await serverFetch.patch(`/manager/status/${id}`, {
      body: JSON.stringify(backendPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
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

// GET MANAGER BY ID
export async function getManagerById(id: string) {
  try {
    const response = await serverFetch.get(`/manager/${id}`);
    const result = await response.json();
    return result;
  } catch (error: any) {
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

// SOFT DELETE MANAGER
export async function softDeleteManager(id: string) {
  try {
    const response = await serverFetch.delete(`/manager/soft-delete/${id}`);
    const result = await response.json();
    return result;
  } catch (error: any) {
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

export async function addManagerToTeam(
  managerId: string,
  _prevState: any,
  formData: FormData
) {
   const payload = { teamId: formData.get("teamId") as string };
   if (payload.teamId === "") {
     return { message: "Must select at least a team" };
   }
  // Validate payload
  const validation = zodValidator(payload, addToTeamSchema);

  if (!validation.success || !validation.data) {
    return {
      success: false,
      message: "Validation failed",
      errors: validation.errors,
      formData: payload,
    };
  }

  try {
    const response = await serverFetch.patch(
      `/manager/add-to-team/${managerId}`,
      {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      }
    );

    return await response.json();
  } catch (error: any) {
    console.error("Add manager to team error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to add manager to team",
      formData: payload,
    };
  }
}
