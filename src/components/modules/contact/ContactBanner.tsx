import { MessageSquare, Shield, TrendingUp, Users } from "lucide-react";

export default function ContactBanner() {
  return (
    <div
      className="flex flex-1 items-center justify-center text-(--hero-foreground) p-10 lg:min-h-screen"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* 🔑 Make this a full-height flex column */}
      <div className="text-center max-w-lg h-full flex flex-col">
        <div>
          <div className="flex justify-center items-center mb-6">
            <MessageSquare className="h-20 w-20 text-red-500" />
          </div>

          <h2 className="text-3xl font-bold mb-4">Get Started with HDRT</h2>
          <p className="text-lg mb-8">
            Discover how HDRT can help your organization identify and mitigate
            hidden operational risks. Our team is ready to show you the power of
            proactive dependency management.
          </p>

          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Risk Identification</h3>
                <p className="text-sm opacity-90">
                  Automatically detect critical dependencies across teams and
                  systems
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Team Analytics</h3>
                <p className="text-sm opacity-90">
                  Visualize knowledge distribution and identify single points of
                  failure
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <TrendingUp className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Actionable Insights</h3>
                <p className="text-sm opacity-90">
                  Get clear metrics and recommendations to reduce organizational
                  risk
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm opacity-80 mt-8">
            Join leading organizations using HDRT to build more resilient teams
          </p>
        </div>
      </div>
    </div>
  );
}
