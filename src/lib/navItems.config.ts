
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
  // --- RISK SECTION (TOP 4 ITEMS) ---
  {
    title: "Risk Analysis",
    items: [
      {
        title: "Risk Dashboard",
        href: "/admin/dashboard/risk",
        icon: "Activity",
        roles: [UserRole.ADMIN],
      },
      {
        title: "Team Risks",
        href: "/admin/dashboard/risk/team",
        icon: "Users",
        roles: [UserRole.ADMIN],
      },
      {
        title: "Employee Risks",
        href: "/admin/dashboard/risk/employee",
        icon: "UserCheck",
        roles: [UserRole.ADMIN],
      },
      {
        title: "System Risks",
        href: "/admin/dashboard/risk/system",
        icon: "Server",
        roles: [UserRole.ADMIN],
      },
    ],
  },

  // --- ORGANIZATION & TASKS ---
  {
    title: "Organization & Tasks",
    items: [
      {
        title: "Tasks",
        href: "/admin/dashboard/tasks",
        icon: "ClipboardList",
        roles: [UserRole.ADMIN],
      },
      {
        title: "Teams",
        href: "/admin/dashboard/teams",
        icon: "Group",
        roles: [UserRole.ADMIN],
      },
      {
        title: "Systems",
        href: "/admin/dashboard/systems",
        icon: "ServerCog",
        roles: [UserRole.ADMIN],
      },
    ],
  },

  // --- USER MANAGEMENT ---
  {
    title: "User Management",
    items: [
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
