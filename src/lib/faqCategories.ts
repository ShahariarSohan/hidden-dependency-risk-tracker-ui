import { HelpCircle, Shield, Users, BarChart3, Zap } from "lucide-react";

export const faqCategories = [
  {
    icon: HelpCircle,
    title: "General",
    color: "red",
    faqs: [
      {
        question: "What is HDRT?",
        answer:
          "HDRT (Hidden Dependency Risk Tracker) is a backend-focused risk analysis platform designed to help organizations visualize and mitigate hidden operational risks. It detects over-dependencies on critical employees, teams, or systems, enabling proactive decision-making and ensuring business continuity.",
      },
      {
        question: "Who should use HDRT?",
        answer:
          "HDRT is ideal for enterprises and organizations that prioritize risk visibility, operational efficiency, and proactive management. It's particularly valuable for IT departments, operations teams, HR, and executive leadership who need to identify and mitigate organizational dependencies.",
      },
      {
        question:
          "How does HDRT differ from traditional risk management tools?",
        answer:
          "Unlike traditional risk assessment tools that identify problems after they occur, HDRT makes hidden risks visible early through real-time monitoring and predictive analytics. It focuses specifically on dependency risks across people, teams, and systems rather than general project or financial risks.",
      },
    ],
  },
  {
    icon: BarChart3,
    title: "Features & Functionality",
    color: "blue",
    faqs: [
      {
        question: "How does HDRT calculate risk scores?",
        answer:
          "HDRT calculates risk scores using priority and criticality metrics for employees, teams, and systems. The algorithm considers factors like workload distribution, knowledge concentration, single points of failure, and system dependencies to generate comprehensive risk assessments.",
      },
      {
        question: "Can I customize the risk calculation metrics?",
        answer:
          "Yes, HDRT allows you to configure risk calculations based on your organization's unique priorities and critical systems. You can adjust weighting factors, define custom thresholds, and set organization-specific parameters to align with your risk management strategy.",
      },
      {
        question: "What kind of alerts does HDRT provide?",
        answer:
          "HDRT automatically generates proactive risk alerts when high-risk areas are detected. These include notifications for critical employee dependencies, over-concentrated workloads, single points of failure, and potential system vulnerabilities before they impact operations.",
      },
      {
        question: "Does HDRT integrate with existing tools?",
        answer:
          "HDRT is designed as a backend-focused platform that can aggregate data from your organization's existing systems. Integration capabilities depend on your specific setup and requirements, and can be customized during implementation.",
      },
    ],
  },
  {
    icon: Users,
    title: "User Management",
    color: "green",
    faqs: [
      {
        question: "What are the different user roles in HDRT?",
        answer:
          "HDRT provides role-based access with three primary levels: Admins (full system access and configuration), Managers (team-level insights and reporting), and Employees (personal task and workload visibility). Each role has tailored dashboards with appropriate data access.",
      },
      {
        question: "How does HDRT ensure data privacy?",
        answer:
          "HDRT implements role-based access control to ensure sensitive data is only accessible to authorized users. Data is encrypted in transit and at rest, and access logs are maintained for audit purposes. Privacy controls can be configured to meet your organization's compliance requirements.",
      },
      {
        question: "Can employees see their own risk scores?",
        answer:
          "Yes, employees can view their own workload and task information through their personal dashboard. However, comparative risk scores and team-wide analytics are restricted to managers and administrators to maintain appropriate data sensitivity.",
      },
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    color: "purple",
    faqs: [
      {
        question: "Is HDRT secure?",
        answer:
          "Yes, HDRT is built with enterprise-grade security. The platform uses encrypted data transmission, secure authentication mechanisms, role-based access controls, and regular security audits to protect your organizational data.",
      },
      {
        question: "Does HDRT comply with data protection regulations?",
        answer:
          "HDRT is designed with compliance in mind and can be configured to meet various data protection requirements including GDPR, CCPA, and other regional regulations. Specific compliance configurations can be tailored during implementation.",
      },
      {
        question: "Where is HDRT data stored?",
        answer:
          "HDRT data storage can be configured based on your organization's requirements and compliance needs. Options include cloud-based solutions with geographic restrictions or on-premises deployment for maximum control.",
      },
    ],
  },
  {
    icon: Zap,
    title: "Implementation & Support",
    color: "orange",
    faqs: [
      {
        question: "How long does it take to implement HDRT?",
        answer:
          "Implementation timeline varies based on organization size and complexity, but typically ranges from 2-8 weeks. This includes initial setup, data integration, user training, and customization to match your organizational structure.",
      },
      {
        question: "What kind of training is provided?",
        answer:
          "HDRT implementation includes comprehensive training for all user roles. This covers system navigation, dashboard interpretation, risk analysis, and action planning. Additional training materials and documentation are provided for ongoing reference.",
      },
      {
        question: "What support options are available?",
        answer:
          "HDRT offers multiple support channels including email support, dedicated account management for enterprise clients, comprehensive documentation, and ongoing system updates. Priority support tiers are available based on your service level agreement.",
      },
      {
        question: "Can HDRT scale with our organization?",
        answer:
          "Yes, HDRT is designed to scale with organizations of all sizes. The platform can accommodate growth in users, teams, and data volume without performance degradation, making it suitable for both mid-size companies and large enterprises.",
      },
    ],
  },
];
