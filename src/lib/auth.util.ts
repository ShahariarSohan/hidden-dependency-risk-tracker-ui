import { UserRole } from "@/types/userRole.interface";




export type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};
export const authRoutes = [
  "/login",
  "/forget-password",
];
export const commonProtectedRoute: RouteConfig = {
  exact: ["/my-profile", "/settings", "/change-password", "/reset-password"],
  patterns: [],
};
export const adminProtectedRoute: RouteConfig = {
  patterns: [/^\/admin/],
  exact: [],
};
export const managerProtectedRoute: RouteConfig = {
  patterns: [/^\/manager/],
  exact: [],
};
export const employeeProtectedRoute: RouteConfig = {
  patterns: [/^\/employee/],
  exact: [],
};
export const isAuthRoute = (pathname: string) => {
  return authRoutes.some((route) => route === pathname);
};
export const isRouteMatches = (pathname: string, routes: RouteConfig): boolean => {
  if (routes.exact.includes(pathname)) {
    return true;
  }
  return routes.patterns.some((pattern: RegExp) => pattern.test(pathname));
};
export const getRouteOwner = (pathname: string): "ADMIN"|"MANAGER"|"EMPLOYEE"|"COMMON" | null => {
  if (isRouteMatches(pathname, commonProtectedRoute)) {
    return "COMMON";
  }
  if (isRouteMatches(pathname, adminProtectedRoute)) {
    return "ADMIN";
  }
  if (isRouteMatches(pathname, managerProtectedRoute)) {
    return "MANAGER";
  }
  if (isRouteMatches(pathname, employeeProtectedRoute)) {
    return "EMPLOYEE";
  }
  return null;
};
export const getDefaultDashboardRoute = (role: UserRole): string => {
  if (role === UserRole.ADMIN) {
    return "/admin/dashboard";
  }
  if (role === UserRole.MANAGER) {
    return "/manager/dashboard";
  }
  if (role === UserRole.EMPLOYEE) {
    return "/employee/dashboard";
  }
  return "/";
};
export const validRedirectForRole= (redirectPath: string ,userRole:UserRole) => {
    const routeOwner = getRouteOwner(redirectPath)
if (routeOwner === null || routeOwner === "COMMON") {
        return true
    }
    if (routeOwner===userRole) {
        return true
    }
    return false;
}