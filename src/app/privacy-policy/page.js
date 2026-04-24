const jumpLinks = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-it", label: "How We Use It" },
  { id: "data-sharing", label: "Data Sharing" },
  { id: "your-rights", label: "Your Rights" },
  { id: "contact", label: "Contact" },
];

const policySections = [
  {
    id: "information-we-collect",
    number: "1",
    title: "Information We Collect",
    blocks: [
      {
        heading: "1.1 Information You Provide",
        paragraph:
          "We may collect information that you voluntarily provide, including:",
        bullets: [
          "Name and email address",
          "Account login credentials",
          "Billing and payment details (processed via Stripe)",
          "Keywords and groups you configure for monitoring",
          "Support messages and communications",
        ],
      },
      {
        heading: "1.2 Information Collected Automatically",
        paragraph: "When you use NoblesseLeads, we may automatically collect:",
        bullets: [
          "IP address",
          "Browser type and device information",
          "Usage data (features used, leads captured, timestamps)",
          "Log files and diagnostic data",
        ],
      },
      {
        heading: "1.3 Chrome Extension Data",
        paragraph:
          "Our Chrome extension collects limited data necessary for lead monitoring functionality:",
        bullets: [
          "Facebook group posts matching your configured keywords",
          "Extension usage events (lead detection, replies sent)",
        ],
      },
      {
        heading: "Important:",
        bullets: [
          "We do not read private messages",
          "We do not sell or share browsing history",
          "We do not collect passwords for Facebook or other platforms",
        ],
      },
    ],
  },
  {
    id: "how-we-use-it",
    number: "2",
    title: "How We Use Your Information",
    blocks: [
      {
        paragraph: "We use collected data to:",
        bullets: [
          "Provide lead monitoring, detection, and CRM features",
          "Authenticate users and manage accounts",
          "Process payments and subscriptions",
          "Generate AI-powered reply suggestions",
          "Improve performance, features, and reliability",
          "Communicate updates, alerts, and support responses",
          "Prevent fraud, abuse, and unauthorized access",
        ],
      },
    ],
  },
  {
    id: "facebook-third-party-platforms",
    number: "3",
    title: "Facebook & Third-Party Platforms",
    blocks: [
      {
        paragraph:
          "NoblesseLeads integrates with third-party platforms such as Facebook. You acknowledge that:",
        bullets: [
          "Your interactions with Facebook are governed by Facebook's Privacy Policy and Terms",
          "NoblesseLeads is not responsible for how third parties collect or use your data",
          "We do not control Facebook's data practices",
        ],
      },
      {
        paragraph:
          "Note: NoblesseLeads is not affiliated with Meta Platforms, Inc.",
      },
    ],
  },
  {
    id: "cookies-tracking-technologies",
    number: "4",
    title: "Cookies & Tracking Technologies",
    blocks: [
      {
        paragraph: "We may use cookies and similar technologies to:",
        bullets: [
          "Maintain sessions and authentication",
          "Analyze usage patterns",
          "Improve user experience",
        ],
      },
      {
        paragraph:
          "You can control cookies through your browser settings. Disabling cookies may affect functionality.",
      },
    ],
  },
  {
    id: "data-sharing",
    number: "5",
    title: "Data Sharing & Disclosure",
    blocks: [
      {
        paragraph: "We do not sell your personal data.",
      },
      {
        paragraph: "We may share information only with:",
        bullets: [
          "Trusted service providers (hosting, analytics, Stripe for payments)",
          "OpenAI for AI reply generation (when using BYOK or our API key)",
          "Legal authorities when required by law",
          "Successors in the event of a merger or acquisition",
        ],
      },
      {
        paragraph:
          "All service providers are contractually obligated to protect your data.",
      },
    ],
  },
  {
    id: "data-retention",
    number: "6",
    title: "Data Retention",
    blocks: [
      {
        paragraph: "We retain personal data only for as long as necessary to:",
        bullets: [
          "Provide the Service and maintain your lead history",
          "Comply with legal obligations",
          "Resolve disputes",
          "Enforce agreements",
        ],
      },
      {
        paragraph:
          "You may request deletion of your account and associated data at any time.",
      },
    ],
  },
  {
    id: "data-security",
    number: "7",
    title: "Data Security",
    blocks: [
      {
        paragraph: "We implement industry-standard security measures including:",
        bullets: [
          "Encrypted connections (HTTPS/SSL)",
          "Secure access controls and authentication",
          "Limited internal data access",
        ],
      },
      {
        paragraph:
          "Disclaimer: No method of transmission or storage is 100% secure. Use the Service at your own risk.",
      },
    ],
  },
  {
    id: "your-rights",
    number: "8",
    title: "Your Rights",
    blocks: [
      {
        paragraph: "Depending on your location, you may have the right to:",
        bullets: [
          "Access your personal data",
          "Correct inaccurate information",
          "Request deletion of your data",
          "Object to or restrict processing",
          "Export your lead data",
        ],
      },
      {
        paragraph:
          "To exercise these rights, contact us at support@NoblesseLeads.io",
      },
    ],
  },
  {
    id: "childrens-privacy",
    number: "9",
    title: "Children's Privacy",
    blocks: [
      {
        paragraph: "NoblesseLeads is not intended for individuals under the age of 18.",
      },
      {
        paragraph:
          "We do not knowingly collect data from children. If you believe we have collected such data, contact us immediately.",
      },
    ],
  },
  {
    id: "international-users",
    number: "10",
    title: "International Users",
    blocks: [
      {
        paragraph:
          "If you access NoblesseLeads from outside your country, your information may be transferred to and processed in other jurisdictions where data protection laws may differ.",
      },
    ],
  },
  {
    id: "changes-to-this-policy",
    number: "11",
    title: "Changes to This Policy",
    blocks: [
      {
        paragraph:
          "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the Service after changes constitutes acceptance.",
      },
    ],
  },
  {
    id: "contact",
    number: "12",
    title: "Contact Us",
    blocks: [
      {
        paragraph:
          "If you have questions or concerns about this Privacy Policy, contact us:",
      },
      { paragraph: "Email" },
      { paragraph: "support@NoblesseLeads.io" },
      { paragraph: "Website NoblesseLeads.io" },
    ],
  },
];

export const metadata = {
  title: "Privacy Policy",
  description: "NoblesseLeads Privacy & Data Protection Policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_55%)]" />

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="space-y-6">
            <header className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
              <p className="mb-4 inline-flex items-center rounded-full border border-sky-300/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-sky-200 uppercase">
                Privacy & Data Protection
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Privacy Policy
              </h1>
              <p className="mt-3 text-sm text-slate-300">
                Last updated: January 12, 2026
              </p>
              <p className="mt-6 text-base leading-7 text-slate-200">
                NoblesseLeads (&quot;NoblesseLeads&quot;, &quot;we&quot;,
                &quot;our&quot;, or &quot;us&quot;) respects your
                privacy and is committed to protecting it. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our website, SaaS platform, and Chrome
                extension (collectively, the &quot;Service&quot;).
              </p>
              <p className="mt-4 text-base leading-7 text-slate-200">
                By using NoblesseLeads, you agree to the practices described in
                this Privacy Policy.
              </p>
            </header>

            <nav
              aria-label="Jump to section"
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
            >
              <p className="mb-3 text-sm font-medium text-slate-300">Jump to</p>
              <div className="flex flex-wrap gap-2">
                {jumpLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-sm text-slate-200 transition hover:border-sky-300/40 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="space-y-5">
              {policySections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900/55 p-6 sm:p-7"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-sky-200">
                      {section.number}
                    </span>
                    <h2 className="text-xl font-semibold text-white">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {section.blocks.map((block, index) => (
                      <div key={`${section.id}-block-${index}`} className="space-y-3">
                        {block.heading ? (
                          <h3 className="text-base font-semibold text-slate-100">
                            {block.heading}
                          </h3>
                        ) : null}

                        {block.paragraph ? (
                          <p className="text-sm leading-7 text-slate-200 sm:text-base">
                            {block.paragraph}
                          </p>
                        ) : null}

                        {block.bullets ? (
                          <ul className="space-y-2 pl-5 text-sm leading-7 text-slate-200 sm:text-base">
                            {block.bullets.map((bullet) => (
                              <li key={bullet} className="list-disc marker:text-sky-300">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>

          <aside className="h-max rounded-2xl border border-slate-800 bg-slate-900/60 p-5 lg:sticky lg:top-8">
            <p className="text-xs font-semibold tracking-wide text-slate-300 uppercase">
              Quick Contact
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Have questions about how we handle your data? We are here to help.
            </p>
            <a
              href="mailto:support@NoblesseLeads.io"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Contact Support
            </a>
            <a
              href="https://NoblesseLeads.io/terms-of-service/"
              className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
            >
              View Terms of Service
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
