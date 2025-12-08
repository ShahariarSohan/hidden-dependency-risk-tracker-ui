/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/serverFetch";
import zodValidator from "@/lib/zodValidator";
import { ActiveStatus } from "@/types/status.interface";
import { updateStatusZodSchema } from "@/zod/status.validation";
import { teamZodSchema } from "@/zod/team.validation";


/**
 * CREATE TEAM
 * API: POST /team
 */
export async function createTeam(_prevState: any, formData: FormData) {
  // Build validation payload
  const validationPayload = {
    name: formData.get("name") as string,
  };

  const validatedPayload = zodValidator(validationPayload, teamZodSchema);

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

  try {
    const response = await serverFetch.post("/team", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedPayload.data),
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Create team error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to create team",
      formData: validationPayload,
    };
  }
}

/**
 * GET ALL TEAMS
 * API: GET /team?queryParams
 */
export async function getTeams(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/team${queryString ? `?${queryString}` : ""}`
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}
export async function updateTeamStatus(
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
    const response = await serverFetch.patch(`/team/status/${id}`, {
      body: JSON.stringify(backendPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("update team status error:", error);
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
/**
 * GET TEAM BY ID
 * API: GET /team/:id
 */
export async function getTeamById(id: string) {
  try {
    const response = await serverFetch.get(`/team/${id}`);
    const result = await response.json();
    
    return result;
  } catch (error: any) {
    console.log(error);
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
 * UPDATE TEAM
 * API: PATCH /team/:id
 * Only updates: name
 */
export async function updateTeamByName(
  id: string,
  _prevState: any,
  formData: FormData
) {
  const validationPayload: any = {
    name: formData.get("name") as string,
  };
  console.log(validationPayload)

  const validation = zodValidator(validationPayload, teamZodSchema);
  console.log("validation data",validation.data)
  if (!validation.success && validation.errors) {
    return {
      success: validation.success,
      message: "Validation failed",
      formData: validationPayload,
      errors: validation.errors,
    };
  }

  if (!validation.data) {
    return {
      success: false,
      message: "Validation failed",
      formData: validationPayload,
    };
  }
 

  try {
    const response = await serverFetch.patch(`/team/name/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validation.data),
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Update team error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to update team",
      formData: validationPayload,
    };
  }
}

/**
 * SOFT DELETE TEAM
 * API: DELETE /team/soft/:id
 */
export async function softDeleteTeam(id: string) {
  try {
    const response = await serverFetch.delete(`/team/soft-delete/${id}`);
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
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
 * HARD DELETE TEAM
 * API: DELETE /team/:id
 */
export async function deleteTeam(id: string) {
  try {
    const response = await serverFetch.delete(`/team/${id}`);
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}
