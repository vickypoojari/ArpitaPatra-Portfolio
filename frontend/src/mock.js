// Mock data for Product Manager Portfolio

export const portfolioData = {
  hero: {
    name: "Alex Morgan",
    title: "Product Manager",
    tagline: "I ship software that teams adopt and customers pay for",
    cta: "View Case Studies"
  },
  about: {
    headline: "What I do",
    description: "I manage product roadmaps from discovery through launch, working with engineering, design, and business teams to deliver features that move revenue and retention metrics. I've led releases for enterprise SaaS platforms, mobile apps, and internal tools—managing backlogs, running sprints, and making scope calls when timelines compress. I focus on shipping incremental value while keeping stakeholders aligned on what's next and why it matters.",
    yearsExperience: "5+",
    productsShipped: "12+",
    usersImpacted: "2M+"
  },
  caseStudies: [
    {
      id: 1,
      company: "TechCorp",
      title: "Analytics Dashboard Redesign",
      role: "Lead Product Manager",
      timeline: "6 months · 2023",
      problem: "Users struggled to extract insights from complex data, leading to 40% dashboard abandonment rate and low product adoption among enterprise clients.",
      approach: [
        "Conducted 25+ user interviews with data analysts and business stakeholders",
        "Analyzed user behavior data to identify friction points in the current flow",
        "Collaborated with design to create intuitive visualization library",
        "Led iterative beta testing with 5 enterprise customers"
      ],
      impact: [
        "Reduced time-to-insight by 60% (from 15min to 6min average)",
        "Increased dashboard engagement by 85%",
        "Improved enterprise renewal rate from 68% to 89%",
        "Drove $2.3M in annual recurring revenue"
      ],
      tags: ["B2B SaaS", "Data Analytics", "Enterprise"]
    },
    {
      id: 2,
      company: "FinanceApp",
      title: "Mobile Onboarding Flow",
      role: "Product Manager",
      timeline: "4 months · 2022",
      problem: "New user activation was at 22%, well below industry benchmark of 40%. Users cited confusion during signup and lack of immediate value as primary concerns.",
      approach: [
        "Mapped user journey and identified drop-off points through funnel analysis",
        "Prototyped 3 onboarding variations and ran A/B tests",
        "Reduced required fields from 12 to 4 in initial signup",
        "Introduced progressive disclosure and contextual guidance"
      ],
      impact: [
        "Increased activation rate from 22% to 54% (+145%)",
        "Reduced signup time from 8min to 2min average",
        "Boosted D7 retention by 31%",
        "Added 45K monthly active users"
      ],
      tags: ["Mobile", "Fintech", "Growth"]
    },
    {
      id: 3,
      company: "HealthTech",
      title: "AI-Powered Symptom Checker",
      role: "Senior Product Manager",
      timeline: "8 months · 2024",
      problem: "Patients often delayed seeking care due to uncertainty about symptom severity. Existing symptom checkers had low accuracy (62%) and poor user trust.",
      approach: [
        "Partnered with medical advisors to define clinical accuracy requirements",
        "Designed conversational UI that balanced thoroughness with brevity",
        "Built feedback loop to continuously improve ML model accuracy",
        "Launched phased rollout starting with low-risk conditions"
      ],
      impact: [
        "Achieved 89% clinical accuracy (vs 62% baseline)",
        "Served 500K+ symptom checks in first 6 months",
        "Increased telehealth booking rate by 42%",
        "Featured in TechCrunch and Healthcare Innovation Journal"
      ],
      tags: ["Healthcare", "AI/ML", "Consumer"]
    }
  ],
  skills: {
    productAreas: [
      "Roadmap planning and prioritization",
      "Cross-functional team leadership",
      "Stakeholder management and alignment",
      "Product launches and go-to-market",
      "Feature scoping and trade-off decisions"
    ],
    methodologies: [
      "Agile/Scrum sprint planning",
      "User interviews and feedback synthesis",
      "Backlog grooming and story writing",
      "A/B testing and experiment design",
      "OKR setting and metric tracking"
    ],
    tools: [
      "Project Management: Jira, Asana, Linear, Notion",
      "Analytics: Mixpanel, Amplitude, Google Analytics, SQL",
      "Design Collaboration: Figma, Miro, FigJam",
      "Communication: Slack, Confluence, Loom",
      "Research: UserTesting, Dovetail, Typeform"
    ]
  },
  experience: {
    headline: "Experience highlights",
    items: [
      "Led 4 major product releases from planning through launch, coordinating 3-5 engineers and 1-2 designers per project",
      "Managed stakeholder communication for C-suite executives, translating technical constraints into business language",
      "Reduced sprint planning time by 40% by implementing structured backlog refinement and story estimation workflows",
      "Shipped features that increased user activation by 145% and enterprise contract renewals by 21 percentage points",
      "Ran weekly sprint reviews and retrospectives with distributed teams across 3 time zones",
      "Conducted 50+ user interviews to validate feature requests and identify high-impact improvements"
    ]
  },
  contact: {
    email: "alex.morgan@email.com",
    linkedin: "linkedin.com/in/alexmorgan",
    twitter: "@alexmorgan",
    resumeUrl: "#"
  }
};