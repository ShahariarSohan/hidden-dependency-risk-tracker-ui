/* eslint-disable react/no-unescaped-entities */
import ContactBanner from "@/components/modules/contact/ContactBanner";
import ContactForm from "@/components/modules/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* Left Side: Contact Banner */}
      <ContactBanner />

      {/* Right Side: Contact Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md dark:bg-gray-900 rounded-lg shadow-lg p-6 ">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-primary dark:text-(--hero-foreground) mb-2">
              Contact with us
            </h1>
            <p className="text-(--hero-foreground)">
              Interested in HDRT? Share your details.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
