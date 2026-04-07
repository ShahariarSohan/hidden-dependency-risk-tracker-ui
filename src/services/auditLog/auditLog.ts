"use server";

import { serverFetch } from "@/lib/serverFetch";

export async function getAuditLogs(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/audit${queryString ? `?${queryString}` : ""}`
    );
    return await response.json();
  } catch (error: any) {
    console.error("Get audit logs error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong fetching audit logs",
    };
  }
}
