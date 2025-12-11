/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/serverFetch";

export async function getEmployeeOwnRisk() {
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
export async function getTeamRisk() {
  try {
    const response = await serverFetch.get(`/riskAnalysis/my-team`);

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


export async function getEmployeesRisk(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/riskAnalysis/employee${queryString ? `?${queryString}` : ""}`
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
export async function getSystemsRisk(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/riskAnalysis/system${queryString ? `?${queryString}` : ""}`
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
export async function getTeamsRisk(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/riskAnalysis/team${queryString ? `?${queryString}` : ""}`
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