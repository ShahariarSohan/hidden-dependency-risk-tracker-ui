/* eslint-disable @typescript-eslint/no-explicit-any */

"use server"
import { serverFetch } from "@/lib/serverFetch";

export async function getMyAssignedTaskById() {
  try {
    const response = await serverFetch.get(`/task/my-assigned-tasks`);
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