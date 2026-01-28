/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/serverFetch";
import zodValidator from "@/lib/zodValidator";
import { ActiveStatus } from "@/types/status.interface";

import { updateStatusZodSchema } from "@/zod/status.validation";
import {
  createSystemZodSchema,
  updateSystemSchema,
} from "@/zod/system.validation";

/**
 * CREATE SYSTEM
 * API: POST /system
 * Only creates: name, description?, criticality?, teamId?
 */
export async function createSystem(_prevState: any, formData: FormData) {
  const payload = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    criticality: formData.get("criticality")
      ? Number(formData.get("criticality"))
      : 1,
    teamId: formData.get("teamId") as string,
  };

  const validation = zodValidator(payload, createSystemZodSchema);

  if (!validation.success && validation.errors) {
    return {
      success: false,
      message: "Provide required or valid input",
      errors: validation.errors,
      formData: payload,
    };
  }

  if (!validation.data) {
    return {
      success: false,
      message: "Provide required or valid input",
      formData: payload,
    };
  }

  try {
    const response = await serverFetch.post("/system", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validation.data),
    });

    return await response.json();
  } catch (error: any) {
    console.error("Create system error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to create system",
      formData: payload,
    };
  }
}

/**
 * GET SYSTEMS
 * API: GET /system?query
 */
export async function getSystems(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/system${queryString ? `?${queryString}` : ""}`
    );
    return await response.json();
  } catch (error: any) {
    console.error("Get systems error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

/**
 * UPDATE SYSTEM STATUS
 * API: PATCH /system/status/:id
 */
export async function updateSystemStatus(
  id: string,
  status: ActiveStatus.ACTIVE | ActiveStatus.INACTIVE
) {
  const payload = { status };

  const validation = zodValidator(payload, updateStatusZodSchema);

  if (!validation.success && validation.errors) {
    return {
      success: false,
      message: "Provide required or valid input",
      errors: validation.errors,
      formData: payload,
    };
  }

  try {
    const response = await serverFetch.patch(`/system/status/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validation.data),
    });

    return await response.json();
  } catch (error: any) {
    console.error("Update system status error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to update system status",
      formData: payload,
    };
  }
}

/**
 * GET SYSTEM BY ID
 * API: GET /system/:id
 */
export async function getSystemById(id: string) {
  try {
    const response = await serverFetch.get(`/system/${id}`);
    return await response.json();
  } catch (error: any) {
    console.error("Get system by id error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

/**
 * UPDATE SYSTEM (only name, description, criticality, teamId)
 * API: PATCH /system/:id
 */
export async function updateSystem(
  id: string,
  _prevState: any,
  formData: FormData
) {
  let payload;
  if (formData.get("teamId") === "") {
    payload = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
    };
  } else {
    payload = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      teamId: formData.get("teamId") as string,
    };
  }

  const validation = zodValidator(payload, updateSystemSchema);

  if (!validation.success && validation.errors) {
    return {
      success: false,
      message: "Provide required or valid input",
      errors: validation.errors,
      formData: payload,
    };
  }
  if (!validation.data) {
    return {
      success: false,
      message: "Provide required or valid input",
      formData: payload,
    };
  }

  try {
    const response = await serverFetch.patch(`/system/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validation.data),
    });

    return await response.json();
  } catch (error: any) {
    console.error("Update system error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to update system",
      formData: payload,
    };
  }
}

/**
 * SOFT DELETE SYSTEM
 * API: DELETE /system/soft/:id
 */
export async function softDeleteSystem(id: string) {
  try {
    const response = await serverFetch.delete(`/system/soft-delete/${id}`);
    return await response.json();
  } catch (error: any) {
    console.error("Soft delete system error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

/**
 * HARD DELETE SYSTEM
 * API: DELETE /system/:id
 */
export async function deleteSystem(id: string) {
  try {
    const response = await serverFetch.delete(`/system/${id}`);
    return await response.json();
  } catch (error: any) {
    console.error("Delete system error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}
