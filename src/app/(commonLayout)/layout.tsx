import PublicNavbar from "@/components/shared/PublicNavbarClient";
import PublicFooter from "@/components/shared/PublicFooter";
import PublicNavbarServer from "@/components/shared/PublicNavbarServer";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicNavbarServer/>
      {children}
      <PublicFooter />
    </>
  );
};

export default CommonLayout;
