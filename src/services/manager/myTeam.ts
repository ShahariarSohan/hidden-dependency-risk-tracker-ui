/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/serverFetch";

export async function getMyTeamOverview() {
  try {
    const response = await serverFetch.get(
      `/manager/my-team`
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