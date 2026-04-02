import Link from "next/link";
import AnonxLogo from "@/components/ui/AnonxLogo";
import { ArrowLeft, Monitor, Smartphone, Cloud, Shield, Search, CheckCircle2, Zap, ArrowRight, Layers, Users, Briefcase, Bot } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "web",
      icon: <Monitor className="w-8 h-8 text-white" />,
      title: "Web & Platform Engineering",
      desc: "Architecting high-performance, complex web applications that scale effortlessly from zero to millions of users.",
      color: "bg-blue-500",
      features: ["Enterprise SaaS Platform Auth & Architecture", "Headless E-commerce & High-Throughput Portals", "Real-Time WebSockets & Interactive Dashboards", "Progressive Web Apps (PWA) Evolution"]
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Mobile App Development",
      desc: "Delivering native-level mobile experiences across all devices. We engineer fluid, resilient iOS and Android applications.",
      color: "bg-emerald-500",
      features: ["Cross-Platform Flutter & React Native", "Native iOS (Swift) & Android (Kotlin) Builds", "Legacy App Modernization & Refactoring", "Complex Background Sync & Offline Architectures"]
    },
    {
      id: "cloud",
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: "Cloud Infrastructure & DevOps",
      desc: "Stop worrying about servers. We build highly durable, self-healing cloud architectures that drastically reduce manual operations.",
      color: "bg-indigo-500",
      features: ["AWS / GCP / Azure End-to-End Setup", "Kubernetes Orchestration & Microservices", "CI/CD Pipeline Automation (Zero-Downtime)", "Infrastructure as Code (Terraform)"]
    },
    {
      id: "cyber",
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Cybersecurity & VAPT",
      desc: "Aggressive security auditing and implementation. We hunt down critical vulnerabilities before malicious actors do.",
      color: "bg-red-500",
      features: ["Application & Network Penetration Testing", "Source Code Review & Audits", "Zero-Trust Architecture Implementation", "Compliance Readiness (SOC2, ISO)"]
    },
    {
      id: "ai",
      icon: <Bot className="w-8 h-8 text-white" />,
      title: "AI & Chatbot Automation",
      desc: "Deploying intelligent conversational interfaces. From advanced RAG (Retrieval-Augmented Generation) context engines to strict rule-based enterprise logic.",
      color: "bg-purple-600",
      features: ["Custom RAG Agents & Vector Databases", "LLM Integration (OpenAI, Anthropic, OpenSource)", "Deterministic Rule-Based Support Bots", "Automated Workflows & CRM Integrations"]
    },
    {
      id: "seo",
      icon: <Search className="w-8 h-8 text-white" />,
      title: "SEO & Growth Engineering",
      desc: "Building a great product is useless if nobody finds it. We programmatically engineer massive organic growth.",
      color: "bg-brand-orange",
      features: ["Programmatic SEO Architecture at Scale", "Core Web Vitals & Sub-Second Rendering", "Deep Technical Crawl & Audit Remediation", "Advanced Schema & Data Structuring"]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg font-satoshi selection:bg-brand-orange selection:text-white pb-20 overflow-hidden">
      {/* Header */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-navy-500 group-hover:-translate-x-1 transition-transform" />
            <span className="text-navy-600 font-bold text-sm hidden sm:block">Back to Home</span>
          </Link>
          <AnonxLogo size="sm" color="dark" showText={true} hideTagline={true} />
          
          {/* Top CTA */}
          <Link href="/contact-us" className="bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm">
            Hire Us
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 px-6 max-w-7xl mx-auto text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[80vw] h-[80vw] sm:max-w-[40vw] sm:h-[40vw] bg-brand-orange/5 rounded-full blur-[100px] -z-10"></div>
        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-brand-orange font-bold uppercase tracking-widest text-xs mb-6">
          Capabilities Catalog
        </span>
        <h1 className="font-cabinet font-extrabold text-4xl sm:text-6xl md:text-7xl text-navy-950 tracking-tight mb-8">
          End-to-End <br />Technical Execution.
        </h1>
        <p className="text-lg md:text-xl text-navy-600 max-w-2xl mx-auto leading-relaxed font-medium">
          Whether you need an MVP launched in 4 weeks, a cloud migration to reduce costs by 50%, or a dedicated offshore squad to accelerate your roadmap—we execute perfectly.
        </p>
      </section>

      {/* ── Capabilities Matrix ── */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto relative relative z-10">
        <div className="flex flex-col gap-8 md:gap-16">
          {services.map((service, index) => (
            <div key={service.id} className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 border border-navy-100 shadow-shadow-soft flex flex-col lg:flex-row gap-12 items-center group hover:border-navy-200 transition-colors relative overflow-hidden">
              
              {/* Subtle background flair */}
              <div className={`absolute -right-20 -bottom-20 w-64 h-64 ${service.color} opacity-5 blur-[100px] rounded-full pointer-events-none`}></div>

              <div className="flex-1 w-full relative z-10">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${service.color} flex items-center justify-center mb-8 shadow-md transform group-hover:scale-105 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-navy-950 mb-4">{service.title}</h2>
                <p className="text-navy-600 text-lg leading-relaxed mb-8">{service.desc}</p>
                <Link href="/contact-us" className="inline-flex items-center gap-2 font-bold text-navy-900 group-hover:text-brand-orange transition-colors">
                  Discuss a project <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="w-full lg:w-[45%] flex-shrink-0 relative z-10 bg-brand-bg rounded-3xl p-6 md:p-8 border border-navy-50">
                <h4 className="font-bold text-navy-900 uppercase tracking-widest text-xs mb-6">Core Deliverables</h4>
                <ul className="flex flex-col gap-5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-0.5">
                        <CheckCircle2 className={`w-5 h-5 text-brand-orange`} />
                      </div>
                      <span className="text-navy-700 font-medium text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── Engagement Models ── */}
      <section className="py-24 bg-navy-950 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">How We Work</span>
            <h2 className="font-cabinet font-extrabold text-4xl md:text-5xl text-white mb-4 tracking-tight">Flexible Engagement Models</h2>
            <p className="text-navy-300 text-lg max-w-2xl mx-auto">We integrate with your business structure. Whether you need a short surgical strike or a long-term engineering partnership.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <Users className="w-10 h-10 text-brand-orange mb-6" />
              <h3 className="font-cabinet font-bold text-2xl text-white mb-3">Dedicated Squads</h3>
              <p className="text-navy-300 text-sm leading-relaxed mb-6">Hire an autonomous, full-time team composed of a PM, Senior Devs, and QA. We integrate directly into your Jira and Slack, functioning as your own offshore tech hub.</p>
              <div className="text-white text-xs font-bold px-3 py-1 bg-white/10 rounded-full inline-block">Best for long-term roadmaps</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-3xl rounded-full"></div>
              <Briefcase className="w-10 h-10 text-brand-orange mb-6 relative z-10" />
              <h3 className="font-cabinet font-bold text-2xl text-white mb-3 relative z-10">Project-Based</h3>
              <p className="text-navy-300 text-sm leading-relaxed mb-6 relative z-10">Fixed scope, fixed timeline, fixed cost. We take your exact requirements, architect the solution, and guarantee delivery by X date.</p>
              <div className="text-white text-xs font-bold px-3 py-1 bg-brand-orange rounded-full inline-block relative z-10">Best for MVPs & Defined Scope</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <Zap className="w-10 h-10 text-brand-orange mb-6" />
              <h3 className="font-cabinet font-bold text-2xl text-white mb-3">Retainer / Advisory</h3>
              <p className="text-navy-300 text-sm leading-relaxed mb-6">Need a Principal Cloud Architect or SEO Mastermind on speed-dial? Buy a block of dedicated technical hours each month to guide your internal teams.</p>
              <div className="text-white text-xs font-bold px-3 py-1 bg-white/10 rounded-full inline-block">Best for strategic oversight</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 md:py-32 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-cabinet font-extrabold text-4xl md:text-5xl text-navy-950 mb-6 tracking-tight">Ready to architect your scale?</h2>
        <p className="text-navy-600 mb-10 text-lg md:text-xl font-medium">From complex cloud infrastructure to mobile application dominance. Tell us what you need built.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact-us" className="inline-flex w-full sm:w-auto h-16 px-10 rounded-full bg-brand-orange hover:bg-orange-600 text-white font-bold text-lg items-center justify-center transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)] transform hover:-translate-y-1">
            Start Your Project
          </Link>
          <a href="https://wa.me/917321893459?text=Hi%20AnonX,%20I'd%20like%20to%20discuss%20a%20potential%20project!" target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto h-16 px-10 rounded-full bg-navy-50 hover:bg-navy-100 text-navy-900 font-bold text-lg items-center justify-center transition-colors">
            WhatsApp Us Directly
          </a>
        </div>
      </section>

    </div>
  );
}
