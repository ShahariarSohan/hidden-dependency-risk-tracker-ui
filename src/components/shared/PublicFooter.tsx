export default function PublicFooter() {
  return (
    <footer className="border-t" style={{ background: "var(--hero-gradient)" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-[var(--hero-foreground)]/75">
          {/* 1. HDRT Summary */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-3">HDRT</h3>
            <p className="leading-relaxed">
              Hidden Dependency Risk Tracker — a platform built to identify,
              measure, and reduce operational risks caused by hidden team or
              system dependencies.
            </p>
          </div>

          {/* 2. What We Provide */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">
              What We Provide
            </h3>
            <ul className="space-y-1 text-sm text-[var(--hero-foreground)]/75">
              <li>Risk Scoring</li>
              <li>Dependency Mapping</li>
              <li>Team Visibility</li>
              <li>System Insights</li>
              <li>Reliability Tracking</li>
            </ul>
          </div>

          {/* 3. Why HDRT Matters */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Why It Matters</h3>
            <ul className="space-y-1 text-sm text-[var(--hero-foreground)]/75">
              <li>Identify Blind Spots</li>
              <li>Prevent Failures</li>
              <li>Improve Decision Making</li>
              <li>Strengthen Operations</li>
              <li>Enhance Transparency</li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Contact</h3>
            <p className="leading-relaxed">
              Email: sohanshahariar4@gmail.com Phone: +8801622143630 Address:
              Chawkbazar,Chattogram, Bangladesh Availability: 24/7
            </p>
          </div>
        </div>

        <div className="mt-12 border-t pt-4 text-center text-sm text-[var(--hero-foreground)]/75">
          © {new Date().getFullYear()} ShahariarSohan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
