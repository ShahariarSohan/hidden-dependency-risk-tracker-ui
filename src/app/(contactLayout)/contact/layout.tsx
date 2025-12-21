import ContactFooter from "@/components/modules/contact/ContactFooter";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ContactFooter />
    </>
  );
};

export default ContactLayout;
