import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import getUserInfo from "@/services/auth/getUserInfo";
import { IUserInfo } from "@/types/user.interface";
import { UserRole } from "@/types/userRole.interface";

const AssignedTaskHeader = async () => {
  const userInfo = (await getUserInfo()) as IUserInfo;
  return (
    <ManagementPageHeader
      title={
        userInfo.role === UserRole.ADMIN
          ? "Assigned Tasks"
          : userInfo.role === UserRole.MANAGER
          ? "Assigned Tasks"
          : UserRole.EMPLOYEE && "My Tasks"
      }
      description={
        userInfo.role === UserRole.ADMIN
          ? "View tasks assigned to employees"
          : userInfo.role === UserRole.MANAGER
          ? "View tasks assigned to employees"
          : UserRole.EMPLOYEE && "View your task assigned By manager and admin"
      }
    />
  );
};

export default AssignedTaskHeader;
