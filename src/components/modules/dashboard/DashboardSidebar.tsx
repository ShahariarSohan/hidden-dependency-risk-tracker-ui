
import { IUserInfo } from "@/types/user.interface";
import DashboardSidebarContent from "./DashboardSidebarContent";

import { INavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoute } from "@/lib/auth.util";

import { getNavItemsByRole } from "@/lib/navItems.config";
import getUserInfo from "@/services/auth/getUserInfo";
import { UserRole } from "@/types/userRole.interface";

export default async function DashboardSidebar() {
  const userInfo = (await getUserInfo()) as IUserInfo
  const navItems: INavSection[] = getNavItemsByRole(userInfo.role as UserRole)
  const dashboardHome=getDefaultDashboardRoute(userInfo.role as UserRole)
  return <DashboardSidebarContent userInfo={userInfo} navItems={navItems} dashboardHome={dashboardHome}></DashboardSidebarContent>
}