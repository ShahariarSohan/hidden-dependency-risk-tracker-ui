import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer
      className="text-(--hero-foreground)"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="container mx-auto px-6  py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-red-400 mt-1" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm opacity-90">support@hdrt.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-red-400 mt-1" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-sm opacity-90">+880 1234 567 890</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-red-400 mt-1" />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-sm opacity-90">Chattogram, Bangladesh</p>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-red-400 mt-1" />
            <div>
              <p className="font-semibold">Availability</p>
              <p className="text-sm opacity-90">24/7 Enterprise Support</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm opacity-80">
          © {new Date().getFullYear()} HDRT — Building resilient teams
        </div>
      </div>
    </footer>
  );
}
