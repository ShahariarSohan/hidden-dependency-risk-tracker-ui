
import { UserRole } from "@/types/userRole.interface";
import { getDefaultDashboardRoute } from "./auth.util";
import { INavSection } from "@/types/dashboard.interface";


export const getCommonNavItems = (role: UserRole) => {
  const defaultDashboard = getDefaultDashboardRoute(role);
  return [
    {
      items: [
        {
          title: "Dashboard",
          href: defaultDashboard,
          icon: "LayoutDashboard",
          roles: [UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.MANAGER],
        },
        {
          title: "My Profile",
          href: "/my-profile",
          icon: "User",
          roles: [UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.MANAGER],
        },
      ],
    },
    // {
    //   title: "Settings",
    //   items: [
    //     {
    //       title: "Change Password",
    //       href: "/change-password",
    //       icon: "Settings",
    //       roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE],
    //     },
    //   ],
    // },
  ];
};
export const adminNavItems: INavSection[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Admins",
        href: "/admin/dashboard/admins",
        icon: "Shield",
        roles: [UserRole.ADMIN],
      },
      {
        title: "Managers",
        href: "/admin/dashboard/managers",
        icon: "UserCog",
        roles: [UserRole.ADMIN],
      },
      {
        title: "Employees",
        href: "/admin/dashboard/employees",
        icon: "Users",
        roles: [UserRole.ADMIN],
      },
    ],
  },

  {
    title: "Organization",
    items: [
      {
        title: "Teams",
        href: "/admin/dashboard/teams",
        icon: "Group",
        roles: [UserRole.ADMIN],
      },
      {
        title: "Systems",
        href: "/admin/dashboard/systems",
        icon: "Server",
        roles: [UserRole.ADMIN],
      },
    ],
  },

  {
    title: "Tasks & Risks",
    items: [
      {
        title: "All Tasks",
        href: "/admin/dashboard/tasks",
        icon: "ClipboardList",
        roles: [UserRole.ADMIN],
      },
      {
        title: "Risk Analysis",
        href: "/admin/dashboard/risk-analysis",
        icon: "AlertTriangle",
        roles: [UserRole.ADMIN],
      },
    ],
  },
];
export const managerNavItems: INavSection[] = [
  {
    title: "Team Dashboard",
    items: [
      {
        title: "Overview",
        href: "/manager/dashboard",
        icon: "LayoutDashboard",
        roles: [UserRole.MANAGER],
      },
      {
        title: "My Team",
        href: "/manager/dashboard/team",
        icon: "Users",
        roles: [UserRole.MANAGER],
      },
      {
        title: "Team Tasks",
        href: "/manager/dashboard/tasks",
        icon: "ClipboardCheck",
        roles: [UserRole.MANAGER],
      },
      {
        title: "Risk Report",
        href: "/manager/dashboard/risk-analysis",
        icon: "AlertTriangle",
        roles: [UserRole.MANAGER],
      },
    ],
  },

  {
    title: "Systems",
    items: [
      {
        title: "All Systems",
        href: "/manager/dashboard/systems",
        icon: "Server",
        roles: [UserRole.MANAGER],
      },
    ],
  },
];

export const employeeNavItems: INavSection[] = [
  {
    title: "My Work",
    items: [
      {
        title: "My Tasks",
        href: "/dashboard/my-tasks",
        icon: "ClipboardList",
        roles: [UserRole.EMPLOYEE],
      },
      {
        title: "Assigned Systems",
        href: "/dashboard/my-systems",
        icon: "Server",
        roles: [UserRole.EMPLOYEE],
      },
    ],
  },

  {
    title: "Profile",
    items: [
      {
        title: "My Profile",
        href: "/dashboard/profile",
        icon: "User",
        roles: [UserRole.EMPLOYEE],
      },
    ],
  },
];



export const getNavItemsByRole = (role: UserRole): INavSection[] => {
  const commonNavItems = getCommonNavItems(role);
  switch (role) {
    case UserRole.ADMIN:
      return [...commonNavItems, ...adminNavItems];
    case UserRole.MANAGER:
      return [...commonNavItems, ...managerNavItems];
    case UserRole.EMPLOYEE:
      return [...commonNavItems, ...employeeNavItems];
    default:
      return [];
  }
};
