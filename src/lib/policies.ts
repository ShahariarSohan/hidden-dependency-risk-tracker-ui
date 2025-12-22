import {
  Shield,
  Lock,
  Eye,
  FileText,
  Scale,
  
} from "lucide-react";


export const policies = [
  {
    icon: Shield,
    title: "Privacy Policy",
    color: "red",
    lastUpdated: "December 2024",
    sections: [
      {
        heading: "Information We Collect",
        content:
          "HDRT collects organizational data necessary to provide risk analysis services, including employee information, team structures, task assignments, and system dependencies. We collect this data through integrations with your existing systems and through direct user input within the platform.",
      },
      {
        heading: "How We Use Your Information",
        content:
          "Your data is used exclusively to calculate risk scores, generate insights, and provide dashboard visualizations. We analyze patterns in workload distribution, knowledge concentration, and system dependencies to identify potential risks. Your data is never sold to third parties or used for purposes outside of providing our services.",
      },
      {
        heading: "Data Storage and Security",
        content:
          "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We implement role-based access controls to ensure data is only accessible to authorized personnel. Data centers are SOC 2 Type II compliant and feature multiple layers of physical and digital security.",
      },
      {
        heading: "Data Retention",
        content:
          "We retain your data for as long as your account is active and for a period of 90 days after account closure to facilitate potential reactivation. Historical risk data may be retained longer for trend analysis purposes with identifying information removed.",
      },
      {
        heading: "Your Rights",
        content:
          "You have the right to access, correct, or delete your personal data at any time. You can export your data in standard formats, request deletion of specific information, and opt-out of certain data processing activities. Contact our privacy team to exercise these rights.",
      },
    ],
  },
  {
    icon: FileText,
    title: "Terms of Service",
    color: "blue",
    lastUpdated: "December 2024",
    sections: [
      {
        heading: "Service Agreement",
        content:
          "By using HDRT, you agree to these Terms of Service. HDRT provides risk analysis and dependency tracking services on a subscription basis. We reserve the right to modify features, pricing, and terms with 30 days notice to active subscribers.",
      },
      {
        heading: "Acceptable Use",
        content:
          "You agree to use HDRT only for lawful business purposes related to organizational risk management. Prohibited activities include attempting to reverse engineer the platform, using it to harm others, violating any applicable laws, or exceeding your subscription's usage limits.",
      },
      {
        heading: "Account Responsibilities",
        content:
          "You are responsible for maintaining the security of your account credentials, the accuracy of data you provide, compliance with applicable data protection laws, and ensuring your team members use the platform appropriately.",
      },
      {
        heading: "Service Level Agreement",
        content:
          "HDRT commits to 99.9% uptime for our production environment, measured monthly. Scheduled maintenance windows are excluded from this calculation. We provide advance notice for planned maintenance and work to minimize service disruptions.",
      },
      {
        heading: "Limitation of Liability",
        content:
          "HDRT provides risk analysis tools and insights, but ultimate risk management decisions remain your responsibility. We are not liable for business decisions made based on our platform's recommendations or for indirect, consequential, or punitive damages.",
      },
    ],
  },
  {
    icon: Lock,
    title: "Security Policy",
    color: "green",
    lastUpdated: "December 2024",
    sections: [
      {
        heading: "Security Infrastructure",
        content:
          "HDRT is built on enterprise-grade security infrastructure. Our systems undergo regular security audits, penetration testing, and vulnerability assessments. We maintain SOC 2 Type II compliance and follow industry best practices for secure software development.",
      },
      {
        heading: "Access Controls",
        content:
          "We implement multi-layered access controls including role-based permissions, two-factor authentication options, session management with automatic timeouts, IP whitelisting capabilities, and comprehensive audit logging of all system access.",
      },
      {
        heading: "Data Protection Measures",
        content:
          "All data transmissions use TLS 1.3 encryption. Data at rest is encrypted using AES-256. Database access is restricted and monitored. Regular automated backups are encrypted and stored in geographically distributed locations. We maintain disaster recovery procedures with defined recovery time objectives.",
      },
      {
        heading: "Incident Response",
        content:
          "We maintain a comprehensive incident response plan that includes immediate containment procedures, forensic analysis capabilities, customer notification protocols, and remediation processes. Security incidents are reviewed to prevent future occurrences.",
      },
      {
        heading: "Employee Security",
        content:
          "All HDRT employees undergo background checks and security training. Access to customer data is limited to personnel who require it for their role. We maintain strict data handling policies and non-disclosure agreements with all team members.",
      },
    ],
  },
  {
    icon: Scale,
    title: "Compliance Policy",
    color: "purple",
    lastUpdated: "December 2024",
    sections: [
      {
        heading: "Regulatory Compliance",
        content:
          "HDRT is designed to help organizations maintain compliance with various data protection and privacy regulations. Our platform can be configured to meet requirements under GDPR, CCPA, HIPAA (for healthcare clients), and other regional data protection laws.",
      },
      {
        heading: "GDPR Compliance",
        content:
          "For European Union clients, HDRT acts as a data processor. We provide data processing agreements (DPAs), maintain records of processing activities, support data subject access requests, and implement appropriate technical and organizational measures as required by GDPR.",
      },
      {
        heading: "Data Processing Agreement",
        content:
          "We offer Data Processing Agreements (DPAs) to all enterprise clients. Our DPAs outline data processing terms, security commitments, sub-processor information, and procedures for handling data subject requests in compliance with applicable regulations.",
      },
      {
        heading: "Audit and Certification",
        content:
          "HDRT undergoes regular third-party audits and maintains current certifications including SOC 2 Type II. Audit reports are available to enterprise customers under NDA. We participate in continuous compliance monitoring and improvement programs.",
      },
      {
        heading: "International Data Transfers",
        content:
          "When data transfers occur across international borders, we use approved transfer mechanisms such as Standard Contractual Clauses (SCCs) and ensure adequate data protection safeguards are in place. Data residency options are available for clients with specific geographic requirements.",
      },
    ],
  },
  {
    icon: Eye,
    title: "Cookie Policy",
    color: "orange",
    lastUpdated: "December 2024",
    sections: [
      {
        heading: "What Are Cookies",
        content:
          "Cookies are small text files stored on your device when you visit our website. We use cookies to provide essential functionality, improve user experience, analyze platform usage, and maintain security. You can control cookie preferences through your browser settings.",
      },
      {
        heading: "Types of Cookies We Use",
        content:
          "Essential cookies enable core functionality like authentication and session management. Analytics cookies help us understand how users interact with HDRT to improve our services. Preference cookies remember your settings and customizations. All cookies have defined expiration periods.",
      },
      {
        heading: "Third-Party Cookies",
        content:
          "We use limited third-party services that may set cookies, including authentication providers and analytics platforms. These third parties are carefully vetted and required to maintain appropriate security and privacy standards. We do not use advertising cookies.",
      },
      {
        heading: "Managing Cookie Preferences",
        content:
          "You can control cookie settings through your browser or our cookie preference center. Disabling certain cookies may limit platform functionality. Essential cookies required for authentication and security cannot be disabled while using HDRT.",
      },
      {
        heading: "Cookie Duration",
        content:
          "Session cookies are deleted when you close your browser. Persistent cookies remain until expiration or manual deletion. Authentication cookies typically expire after 30 days of inactivity. Analytics cookies expire after 13 months in compliance with GDPR recommendations.",
      },
    ],
  },
];
