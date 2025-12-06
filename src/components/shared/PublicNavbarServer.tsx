import PublicNavbarClient from "@/components/shared/PublicNavbarClient";
import { getCookie } from "../../lib/tokenHandlers";

export default async function PublicNavbarServer() {
  const accessToken = await getCookie("accessToken");
  console.log("from getAccessToken function", accessToken);
  return <PublicNavbarClient accessToken={accessToken}></PublicNavbarClient>;
}
