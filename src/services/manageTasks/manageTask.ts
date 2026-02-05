/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/serverFetch";
import zodValidator from "@/lib/zodValidator";
import { TaskStatus } from "@/types/status.interface";
import {
  createTaskZodSchema,
  updateTaskStatusZodSchema,
  updateTaskZodSchema,
} from "@/zod/task.validation";


export async function createTask(_prevState: any, formData: FormData) {
  const payload = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    priority: formData.get("priority") ? Number(formData.get("priority")) : 1,
    workWeight: formData.get("workWeight") ? Number(formData.get("workWeight")) : 1,
    employeeId: formData.get("employeeId") as string,
    systemId: formData.get("systemId") as string,
  };
  const validation = zodValidator(payload, createTaskZodSchema);

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
    const response = await serverFetch.post("/task", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validation.data),
    });

    return await response.json();
  } catch (error: any) {
    console.error("Create task error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to create task",
      formData: payload,
    };
  }
}


export async function getTasks(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/task${queryString ? `?${queryString}` : ""}`
    );
    return await response.json();
  } catch (error: any) {
    console.error("Get tasks error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}
export async function getMyTasks(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/task/my-tasks${queryString ? `?${queryString}` : ""}`
    );
    return await response.json();
  } catch (error: any) {
    console.error("Get tasks error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

export async function getTaskById(id: string) {
  try {
    const response = await serverFetch.get(`/task/${id}`);
    return await response.json();
  } catch (error: any) {
    console.error("Get task by id error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}


export async function updateTask(
  id: string,
  _prevState: any,
  formData: FormData
) {
  const payload: any = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    priority: formData.get("priority") ? Number(formData.get("priority")) : 1,
    workWeight: formData.get("workWeight") ? Number(formData.get("workWeight")) : 1,
    dueDate: formData.get("dueDate")
      ? String(formData.get("dueDate"))
      : undefined,
  };
  console.log(payload)
  const validation = zodValidator(payload, updateTaskZodSchema);

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
    const response = await serverFetch.patch(`/task/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validation.data),
    });

    return await response.json();
  } catch (error: any) {
    console.error("Update task error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to update task",
      formData: payload,
    };
  }
}

/**
 * OPTIONAL: UPDATE TASK STATUS
 * API: PATCH /task/status/:id
 */
export async function updateTaskStatus(id: string, status: TaskStatus) {
  const payload = { status };

  const validation = zodValidator(payload, updateTaskStatusZodSchema);

  if (!validation.success && validation.errors) {
    return {
      success: false,
      message: "Provide required or valid input",
      errors: validation.errors,
      formData: payload,
    };
  }

  try {
    const response = await serverFetch.patch(`/task/status/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validation.data),
    });

    return await response.json();
  } catch (error: any) {
    console.error("Update task status error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to update task status",
      formData: payload,
    };
  }
}

/**
 * OPTIONAL: SOFT DELETE TASK
 * API: DELETE /task/soft/:id
 */
export async function softDeleteTask(id: string) {
  try {
    const response = await serverFetch.delete(`/task/soft-delete/${id}`);
    return await response.json();
  } catch (error: any) {
    console.error("Soft delete task error:", error);
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
 * OPTIONAL: HARD DELETE TASK
 * API: DELETE /task/:id
 */
export async function deleteTask(id: string) {
  try {
    const response = await serverFetch.delete(`/task/${id}`);
    return await response.json();
  } catch (error: any) {
    console.error("Delete task error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}
