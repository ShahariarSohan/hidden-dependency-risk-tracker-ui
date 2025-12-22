import PublicNavbarClient from "@/components/shared/PublicNavbarClient";
import { getCookie } from "../../lib/tokenHandlers";
import getUserInfo from "@/services/auth/getUserInfo";
import { getDefaultDashboardRoute } from "@/lib/auth.util";
import { IUserInfo } from "@/types/user.interface";
import { UserRole } from "@/types/userRole.interface";

export default async function PublicNavbarServer() {
  const accessToken = await getCookie("accessToken");
  const userInfo = (await getUserInfo()) as IUserInfo;
  const dashboardPath = accessToken
    ? getDefaultDashboardRoute(userInfo.role as UserRole)
    : "";

  return (
    <PublicNavbarClient
      accessToken={accessToken}
      dashboardPath={dashboardPath}
    ></PublicNavbarClient>
  )
}
