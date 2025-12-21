// app/learn-more/page.tsx



export default function AboutPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About HDRT</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          HDRT (Hidden Dependency Risk Tracker) is a{" "}
          <span className="font-bold">backend-focused risk analysis platform</span> designed to
          help organizations visualize and mitigate hidden operational risks. By
          detecting over-dependencies on critical employees, teams, or systems,
          HDRT enables proactive decision-making and ensures business continuity
          before problems arise.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Why HDRT Exists</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          In modern organizations, hidden dependencies on certain employees,
          teams, or systems can create significant risks. Traditional risk
          assessments often identify problems **after they occur**, leading to
          downtime, operational delays, and business impact. HDRT was developed
          to **make these hidden risks visible early**, providing structured
          metrics and insights so organizations can act proactively.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          HDRT aggregates data from your organization, calculates **risk
          scores** for employees, teams, and systems, and presents this
          information in a comprehensive dashboard. Organizations can now
          monitor high-risk areas and strategically mitigate dependency risks
          before they escalate.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Key Features</h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Comprehensive Risk Scoring
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              HDRT calculates risk scores for employees, teams, and systems
              using priority and criticality metrics, enabling organizations to
              quantify hidden dependencies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Proactive Risk Alerts
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Automatically detect high-risk areas and generate alerts before
              issues affect operations, helping leadership take preventive
              measures.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Detailed Risk Dashboards
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Visualize risks in real-time with dashboards that highlight
              employees, teams, or systems with elevated dependency scores.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Filtering & Sorting</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Easily filter and search through employees, tasks, and systems.
              Sort based on risk level, priority, or criticality for faster
              decision-making.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Customizable Metrics</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Configure risk calculations based on your organization’s unique
              priorities and critical systems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Role-Based Access</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Different dashboards for Admins, Managers, and Employees ensure
              that sensitive data is accessible only to authorized roles.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Benefits of HDRT
        </h2>
        <ul className="space-y-6 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed list-disc list-inside">
          <li>
            Reduce operational risk by identifying hidden dependencies early.
          </li>
          <li>
            Improve team and employee productivity by balancing workloads.
          </li>
          <li>Enable strategic decision-making with data-driven insights.</li>
          <li>
            Minimize downtime caused by unplanned absences or system failures.
          </li>
          <li>Boost organizational resilience and continuity planning.</li>
          <li>
            Gain full visibility into the operational health of your
            organization.
          </li>
        </ul>
      </section>

      {/* Footer Note */}
      <section className="py-16 px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          HDRT is designed for enterprises and organizations that prioritize
          **risk visibility, operational efficiency, and proactive management**.
          By making hidden dependencies visible, HDRT empowers teams to act
          before risks turn into critical issues.
        </p>
      </section>
    </main>
  );
}
