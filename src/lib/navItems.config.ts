
import { UserRole } from "@/types/userRole.interface";
import { getDefaultDashboardRoute } from "./auth.util";
import { INavSection } from "@/types/dashboard.interface";


export const getCommonNavItems = (role: UserRole) => {
  const defaultDashboard = getDefaultDashboardRoute(role);
  return [
    {
      items: [
        {
          title: "Risk Dashboard",
          href: defaultDashboard,
          icon: "Activity",
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
        title: "Team Risks",
        href: "/admin/dashboard/team-risk",
        icon: "Users",
        roles: [UserRole.ADMIN],
      },
      {
        title: "Employee Risks",
        href: "/admin/dashboard/employee-risk",
        icon: "UserCheck",
        roles: [UserRole.ADMIN],
      },
      {
        title: "System Risks",
        href: "/admin/dashboard/system-risk",
        icon: "Server",
        roles: [UserRole.ADMIN],
      },
    ],
  },

  // --- ORGANIZATION & TASKS ---
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
        icon: "ServerCog",
        roles: [UserRole.ADMIN],
      },
    ],
  },
  //--- TASK MANAGEMENT ---

  {
    title: "Tasks",
    items: [
      {
        title: "All Tasks",
        href: "/admin/dashboard/tasks",
        icon: "ClipboardList",
        roles: [UserRole.ADMIN],
      },
      {
        title: "Assigned Tasks",
        href: "/admin/dashboard/assigned-tasks",
        icon: "ClipboardList",
        roles: [UserRole.ADMIN],
      },
    ],
  },

  // --- USER MANAGEMENT ---
  {
    title: "User Management",
    items: [
      {
        title: "Employees",
        href: "/admin/dashboard/employees",
        icon: "Users",
        roles: [UserRole.ADMIN],
      },
      {
        title: "Managers",
        href: "/admin/dashboard/managers",
        icon: "UserCog",
        roles: [UserRole.ADMIN],
      }
    ],
  },
  {
    title: "Profile",
    items: [
      {
        title: "My Profile",
        href: "/my-profile",
        icon: "User",
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE],
      },
    ],
  },
];

export const managerNavItems: INavSection[] = [
  {
    title: "Team Risk Analysis",
    items: [
      // {
      //   title: "Team Risks",
      //   href: "/manager/dashboard/team-risk",
      //   icon: "Users",
      //   roles: [UserRole.MANAGER],
      // },
      {
        title: "Employee Risks",
        href: "/manager/dashboard/team-employee-risk",
        icon: "UserCheck",
        roles: [UserRole.MANAGER],
      },
    ],
  },
  {
    title: " Tasks & Team",
    items: [
      {
        title: "Assigned Tasks",
        href: "/manager/dashboard/assigned-tasks",
        icon: "ClipboardCheck",
        roles: [UserRole.MANAGER],
      },
      {
        title: "My Team",
        href: "/manager/dashboard/my-team",
        icon: "Users",
        roles: [UserRole.MANAGER],
      },
    ],
  },
  {
    title: "Profile",
    items: [
      {
        title: "My Profile",
        href: "/my-profile",
        icon: "User",
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE],
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
        href: "/employee/dashboard/my-tasks",
        icon: "ClipboardList",
        roles: [UserRole.EMPLOYEE],
      },
      {
        title: "My Teams",
        href: "/employee/dashboard/my-teams",
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
        href: "/my-profile",
        icon: "User",
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE],
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
