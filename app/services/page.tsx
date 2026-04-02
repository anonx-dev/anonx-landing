import type { Metadata } from "next";
import Link from "next/link";
import AnonxLogo from "@/components/ui/AnonxLogo";
import Script from "next/script";
import { ArrowLeft, Monitor, Smartphone, Cloud, Shield, Search, CheckCircle2, ArrowRight, Users, Briefcase, Zap, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AnonX's full capabilities: Web & Platform Engineering, Flutter/React Native Mobile Apps, Cloud & DevOps (AWS, GCP, Azure), Cybersecurity VAPT, SEO Growth Engineering, and AI Chatbot Automation.",
  keywords: [
    "web development services",
    "mobile app development agency",
    "Flutter agency",
    "React Native development",
    "cloud DevOps services",
    "AWS DevOps agency",
    "cybersecurity VAPT services",
    "penetration testing agency",
    "SEO growth engineering",
    "AI chatbot development",
    "dedicated development squad",
    "AnonX services",
  ],
  alternates: { canonical: "https://www.anonx.space/services" },
  openGraph: {
    title: "AnonX Services | Web, Mobile, Cloud & Cybersecurity",
    description:
      "End-to-end technical execution. Web apps, mobile (Flutter/RN), cloud infrastructure, VAPT, SEO, and AI chatbots. Any stack, any scale.",
    url: "https://www.anonx.space/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Engineering & Technology Consulting",
  provider: {
    "@type": "Organization",
    name: "AnonX Technologies",
    url: "https://www.anonx.space",
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AnonX Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web & Platform Engineering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development (Flutter, React Native)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Infrastructure & DevOps" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity & VAPT" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Chatbot Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Growth Engineering" } },
    ],
  },
};

const services = [
  {
    id: "web",
    icon: <Monitor className="w-5 h-5 text-white" />,
    title: "Web & Platform Engineering",
    desc: "High-performance web apps that scale from zero to millions of users.",
    color: "bg-blue-500",
    accent: "blue",
    features: ["Enterprise SaaS & Auth Architecture", "Headless E-commerce & Portals", "Real-Time Dashboards & WebSockets", "Progressive Web Apps (PWA)"],
    link: "/web-development",
  },
  {
    id: "mobile",
    icon: <Smartphone className="w-5 h-5 text-white" />,
    title: "Mobile App Development",
    desc: "Native-level iOS & Android apps — Flutter, React Native, Swift, Kotlin.",
    color: "bg-emerald-500",
    accent: "emerald",
    features: ["Flutter & React Native (Cross-Platform)", "Native iOS (Swift) & Android (Kotlin)", "Legacy App Modernization", "Offline Sync Architectures"],
    link: "/app-development",
  },
  {
    id: "cloud",
    icon: <Cloud className="w-5 h-5 text-white" />,
    title: "Cloud Infrastructure & DevOps",
    desc: "Self-healing cloud infrastructure that cuts OpEx and eliminates downtime.",
    color: "bg-indigo-500",
    accent: "indigo",
    features: ["AWS / GCP / Azure End-to-End", "Kubernetes & Microservices", "CI/CD Zero-Downtime Pipelines", "Terraform Infrastructure as Code"],
    link: "/services",
  },
  {
    id: "cyber",
    icon: <Shield className="w-5 h-5 text-white" />,
    title: "Cybersecurity & VAPT",
    desc: "Aggressive security auditing before attackers find your vulnerabilities.",
    color: "bg-red-500",
    accent: "red",
    features: ["App & Network Penetration Testing", "Source Code Review & Audits", "Zero-Trust Architecture", "SOC2 / ISO Compliance Readiness"],
    link: "/services",
  },
  {
    id: "ai",
    icon: <Bot className="w-5 h-5 text-white" />,
    title: "AI & Chatbot Automation",
    desc: "RAG agents, LLM integrations, and workflow automation that actually works.",
    color: "bg-purple-600",
    accent: "purple",
    features: ["Custom RAG Agents & Vector DBs", "LLM Integration (OpenAI, Anthropic)", "Rule-Based Enterprise Bots", "Workflow & CRM Automation"],
    link: "/chatbot-development",
  },
  {
    id: "seo",
    icon: <Search className="w-5 h-5 text-white" />,
    title: "SEO & Growth Engineering",
    desc: "Programmatic SEO that engineers massive organic growth, not guesswork.",
    color: "bg-brand-orange",
    accent: "orange",
    features: ["Programmatic SEO at Scale", "Core Web Vitals Optimization", "Technical Crawl & Audit Fix", "Schema & Structured Data"],
    link: "/services",
  },
];

const models = [
  {
    icon: <Users className="w-5 h-5 text-brand-orange" />,
    title: "Dedicated Squads",
    desc: "Full-time autonomous team — PM, devs, QA — embedded in your Jira and Slack.",
    badge: "Long-term roadmaps",
    highlight: false,
  },
  {
    icon: <Briefcase className="w-5 h-5 text-brand-orange" />,
    title: "Project-Based",
    desc: "Fixed scope, fixed timeline, fixed cost. Guaranteed delivery by a real date.",
    badge: "MVPs & Defined Scope",
    highlight: true,
  },
  {
    icon: <Zap className="w-5 h-5 text-brand-orange" />,
    title: "Retainer / Advisory",
    desc: "A principal architect or SEO expert on speed-dial for your internal teams.",
    badge: "Strategic oversight",
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-bg font-satoshi selection:bg-brand-orange selection:text-white overflow-hidden">
      <Script id="schema-services" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-4 h-4 text-navy-500 group-hover:-translate-x-1 transition-transform" />
            <span className="text-navy-600 font-bold text-sm hidden sm:block">Back</span>
          </Link>
          <AnonxLogo size="sm" color="dark" showText={true} hideTagline={true} />
          <Link href="/contact-us" className="bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors">
            Hire Us
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-24 pb-10 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-brand-orange font-bold uppercase tracking-widest text-xs mb-4">
          Capabilities
        </span>
        <h1 className="font-cabinet font-extrabold text-3xl sm:text-4xl md:text-5xl text-navy-950 tracking-tight mb-3 leading-[1.1]">
          End-to-End Technical Execution
        </h1>
        <p className="text-base sm:text-lg text-navy-600 max-w-xl mx-auto font-medium">
          MVP in 4 weeks. Cloud migration. Dedicated offshore squad. We execute across the full stack.
        </p>
      </section>

      {/* ── Services Grid ── */}
      <section className="pb-4 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-navy-100 p-5 hover:shadow-md hover:border-navy-200 transition-all duration-200 relative overflow-hidden flex flex-col"
            >
              {/* accent blob */}
              <div className={`absolute -right-8 -bottom-8 w-32 h-32 ${service.color} opacity-[0.06] blur-2xl rounded-full pointer-events-none`} />

              <div className="flex items-start gap-3 mb-3 relative z-10">
                <div className={`w-9 h-9 rounded-xl ${service.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div>
                  <h2 className="font-cabinet font-extrabold text-base text-navy-950 leading-tight">{service.title}</h2>
                  <p className="text-navy-500 text-xs mt-0.5 leading-snug">{service.desc}</p>
                </div>
              </div>

              <ul className="flex flex-col gap-1.5 mb-4 relative z-10 flex-1">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-navy-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-500 group-hover:text-brand-orange transition-colors relative z-10 mt-auto"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Engagement Models ── */}
      <section className="py-10 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="bg-navy-950 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="mb-6 relative z-10">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs block mb-1">How We Work</span>
            <h2 className="font-cabinet font-extrabold text-xl sm:text-2xl text-white tracking-tight">Flexible Engagement Models</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
            {models.map((m, i) => (
              <div key={i} className={`rounded-xl p-4 border transition-colors ${m.highlight ? "bg-brand-orange/10 border-brand-orange/30" : "bg-white/5 border-white/10 hover:bg-white/10"}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                    {m.icon}
                  </div>
                  <h3 className="font-cabinet font-bold text-sm text-white">{m.title}</h3>
                </div>
                <p className="text-navy-300 text-xs leading-relaxed mb-3">{m.desc}</p>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full inline-block ${m.highlight ? "bg-brand-orange text-white" : "bg-white/10 text-white"}`}>
                  {m.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 sm:px-6 max-w-3xl mx-auto text-center pb-16">
        <h2 className="font-cabinet font-extrabold text-2xl sm:text-3xl text-navy-950 mb-3 tracking-tight">Ready to start?</h2>
        <p className="text-navy-600 mb-6 font-medium text-sm sm:text-base">Tell us what you need — we'll architect the right solution and deliver it on time.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact-us" className="w-full sm:w-auto bg-brand-orange hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-[0_8px_24px_rgba(249,115,22,0.25)] text-sm">
            Start Your Project
          </Link>
          <a
            href="https://wa.me/917321893459?text=Hi%20AnonX,%20I'd%20like%20to%20discuss%20a%20potential%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-navy-50 hover:bg-navy-100 text-navy-900 font-bold px-8 py-3.5 rounded-full transition-colors text-sm"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}
