import ContactFooter from "@/components/modules/contact/ContactFooter";
import PublicNavbarServer from "@/components/shared/PublicNavbarServer";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicNavbarServer></PublicNavbarServer>
      {children}
      <ContactFooter />
    </>
  );
};

export default ContactLayout;
