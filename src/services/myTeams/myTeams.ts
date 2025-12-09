/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

import { serverFetch } from "@/lib/serverFetch";

export async function getMyTeams() {
  try {
    const response = await serverFetch.get(`/team/my-teams`);
    return await response.json();
  } catch (error: any) {
    console.error("Get my teams error:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}
