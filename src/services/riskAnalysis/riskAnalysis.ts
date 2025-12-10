/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/serverFetch";

export async function getEmployeeRisk() {
  try {
    const response = await serverFetch.get(`/riskAnalysis/employee-risk`);

    // Backend returns JSON
    const data = await response.json()
    return data;
  } catch (error: any) {
    console.error("Error fetching employee risk:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}
