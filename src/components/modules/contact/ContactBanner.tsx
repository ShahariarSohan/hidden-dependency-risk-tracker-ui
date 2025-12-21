import { MessageSquare, Shield, TrendingUp, Users } from "lucide-react";

export default function ContactBanner() {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-center p-10 min-h-screen">
      <div className="text-center max-w-2xl relative">
        {/* Email envelope-inspired shape */}
        <div className="relative">
          {/* Envelope flap shadow */}
          <div
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-full h-32 opacity-30 blur-xl"
            style={{
              background: "linear-gradient(to bottom, #dc2626, transparent)",
              clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
            }}
          ></div>

          {/* Top envelope flap */}
          <div
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-full h-24 border-x-2 border-t-2 border-red-900/40 z-20"
            style={{
              background:
                "linear-gradient(to bottom, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98))",
              clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
              boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Flap accent line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
          </div>

          {/* Main envelope body */}
          <div
            className="relative backdrop-blur-xl p-12 pt-16 border-2 border-red-900/40 z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)",
              borderRadius: "0 0 8px 8px",
              boxShadow:
                "0 30px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            }}
          >
            {/* Envelope seal/stamp area */}
            <div className="absolute top-6 right-6 w-16 h-16 border-2 border-red-500/30 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 border border-red-500/20 rounded-full"></div>
            </div>

            <div className="flex justify-center items-center mb-8 mt-4">
              <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border-2 border-red-900/40 shadow-2xl">
                <MessageSquare className="h-20 w-20 text-red-500" />
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-4 text-white tracking-tight">
              Get Started with HDRT
            </h2>
            <p className="text-lg mb-10 text-gray-300 leading-relaxed max-w-xl mx-auto">
              Discover how HDRT can help your organization identify and mitigate
              hidden operational risks. Our team is ready to show you the power
              of proactive dependency management.
            </p>

            <div className="space-y-4 text-left max-w-xl mx-auto">
              {[
                {
                  Icon: Shield,
                  title: "Risk Identification",
                  desc: "Automatically detect critical dependencies across teams and systems",
                },
                {
                  Icon: Users,
                  title: "Team Analytics",
                  desc: "Visualize knowledge distribution and identify single points of failure",
                },
                {
                  Icon: TrendingUp,
                  title: "Actionable Insights",
                  desc: "Get clear metrics and recommendations to reduce organizational risk",
                },
              ].map(({ Icon, title, desc }, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-4 p-5 bg-slate-800/40 hover:bg-slate-800/60 transition-all duration-300 border border-slate-700/50 hover:border-red-900/50 rounded-lg"
                >
                  <div className="p-3 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-red-900/30 shadow-lg">
                    <Icon className="h-6 w-6 text-red-500 flex-shrink-0" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-white text-lg">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-red-900/30">
              <p className="text-sm text-gray-400 font-medium">
                Join leading organizations using HDRT to build more resilient
                teams
              </p>
            </div>

            {/* Bottom envelope seal */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-gradient-to-b from-red-900/40 to-red-900/20 rounded-b-full border-x border-b border-red-900/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
