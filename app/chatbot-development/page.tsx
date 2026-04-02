import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import AnonxLogo from "@/components/ui/AnonxLogo";
import { ArrowLeft, ArrowRight, CheckCircle2, Bot, Zap, Shield, MessageSquare, Brain, BarChart3, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Chatbot Development Services",
  description:
    "AnonX builds AI chatbots and automation systems for businesses — WhatsApp bots, customer support AI, RAG agents, and workflow automation. Cut costs. Scale support. 24/7.",
  keywords: [
    "chatbot development services",
    "AI chatbot for business",
    "WhatsApp chatbot development",
    "AI automation services",
    "customer support chatbot",
    "RAG chatbot development",
    "LLM integration",
    "business chatbot",
    "AI agent development",
    "AnonX chatbot",
  ],
  alternates: { canonical: "https://www.anonx.space/chatbot-development" },
  openGraph: {
    title: "AI Chatbot Development Services | AnonX",
    description:
      "We build intelligent AI chatbots for WhatsApp, web, and enterprise systems. Automate customer support, lead capture, and internal workflows with AI.",
    url: "https://www.anonx.space/chatbot-development",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Chatbot Development Services",
  serviceType: "AI & Chatbot Automation",
  provider: {
    "@type": "Organization",
    name: "AnonX Technologies",
    url: "https://www.anonx.space",
  },
  description:
    "Custom AI chatbot development including WhatsApp bots, RAG agents, LLM integrations, and intelligent workflow automation for businesses.",
  areaServed: "Worldwide",
  url: "https://www.anonx.space/chatbot-development",
};

const whatWeBuild = [
  { icon: <MessageSquare className="w-6 h-6" />, title: "WhatsApp Chatbots", desc: "AI-powered WhatsApp bots that handle support, bookings, and lead capture 24/7." },
  { icon: <Brain className="w-6 h-6" />, title: "RAG AI Agents", desc: "Knowledge-base powered agents using your own docs, FAQs, and data — zero hallucinations." },
  { icon: <Bot className="w-6 h-6" />, title: "Website Support Bots", desc: "Embed intelligent chat on your site that qualifies leads and answers queries instantly." },
  { icon: <Workflow className="w-6 h-6" />, title: "Workflow Automation", desc: "Connect your CRM, email, Slack, and databases — automate repetitive business tasks end-to-end." },
];

const problemsSolved = [
  "Your support team is drowning in repetitive questions that a bot could handle",
  "You're losing leads at 2am because nobody's online to respond",
  "Your WhatsApp inbox is chaos — no automation, no routing, no tracking",
  "You want to use AI but don't know where to start or what to build",
  "You've tried generic chatbots but they give wrong answers and frustrate users",
];

const approach = [
  { icon: <Brain className="w-5 h-5 text-brand-orange" />, title: "Context-Aware AI", desc: "We use RAG (Retrieval-Augmented Generation) so your bot answers from YOUR knowledge base — not hallucinated data." },
  { icon: <Zap className="w-5 h-5 text-brand-orange" />, title: "Fast Integration", desc: "Connected to your existing tools — CRM, WhatsApp, Slack, email, Google Sheets — in days, not months." },
  { icon: <BarChart3 className="w-5 h-5 text-brand-orange" />, title: "Measurable ROI", desc: "Track deflection rate, CSAT, response time, and cost savings. You see the business impact directly." },
  { icon: <Shield className="w-5 h-5 text-brand-orange" />, title: "Guardrails & Control", desc: "Rule-based fallbacks ensure the bot never goes off-script for sensitive or compliance-critical topics." },
];

const whyUs = [
  { stat: "< 2 weeks", label: "First Bot Live" },
  { stat: "24/7", label: "Always On" },
  { stat: "80%", label: "Query Deflection" },
  { stat: "0", label: "Hallucination Policy" },
];

export default function ChatbotDevelopmentPage() {
  return (
    <div className="min-h-screen bg-brand-bg font-satoshi selection:bg-brand-orange selection:text-white">
      <Script id="schema-chatbot-dev" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-4 h-4 text-navy-500 group-hover:-translate-x-1 transition-transform" />
            <span className="text-navy-600 font-bold text-sm hidden sm:block">Back to Home</span>
          </Link>
          <AnonxLogo size="sm" color="dark" showText={true} hideTagline={true} />
          <Link href="/contact-us" className="bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm">
            Get a Quote
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-2xl max-h-[600px] bg-purple-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 font-bold uppercase tracking-widest text-xs mb-6">
          AI Chatbot Development
        </span>
        <h1 className="font-cabinet font-extrabold text-4xl sm:text-5xl md:text-6xl text-navy-950 tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
          AI Chatbots That Actually<br className="hidden sm:block" />{" "}
          <span className="text-brand-orange">Work for Your Business</span>
        </h1>
        <p className="text-lg md:text-xl text-navy-600 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
          We build intelligent chatbots and AI agents for WhatsApp, websites, and enterprise systems — automating support, sales, and internal workflows so your team can focus on what matters.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact-us" className="group w-full sm:w-auto bg-brand-orange text-white font-bold px-8 py-4 rounded-full hover:bg-navy-950 transition-all shadow-float flex items-center justify-center gap-2 text-base">
            Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/services" className="w-full sm:w-auto bg-white border border-gray-200 text-navy-900 font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-all flex items-center justify-center text-base">
            See All Services
          </Link>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">What We Build</span>
          <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-navy-950 tracking-tight">AI that does real work</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeBuild.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="font-cabinet font-bold text-lg text-navy-950 mb-2">{item.title}</h3>
              <p className="text-navy-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Problems We Solve ── */}
      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Problems We Solve</span>
            <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-white tracking-tight">Is this your situation?</h2>
          </div>
          <div className="flex flex-col gap-4">
            {problemsSolved.map((p, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:bg-white/10 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-white font-medium">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Our Approach</span>
          <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-navy-950 tracking-tight">How we build bots that don&apos;t disappoint</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {approach.map((item, i) => (
            <div key={i} className="flex gap-5 bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100">
                {item.icon}
              </div>
              <div>
                <h3 className="font-cabinet font-bold text-lg text-navy-950 mb-1">{item.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white border-y border-purple-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Why AnonX</span>
          <h2 className="font-cabinet font-extrabold text-3xl text-navy-950 mb-12 tracking-tight">Results our bots deliver</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="text-center">
                <p className="font-cabinet font-extrabold text-4xl text-brand-orange mb-2">{item.stat}</p>
                <p className="text-navy-600 font-medium text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="font-cabinet font-extrabold text-4xl text-navy-950 mb-4 tracking-tight">Ready to automate your business?</h2>
        <p className="text-navy-600 mb-10 text-lg font-medium">Tell us what you want automated. We&apos;ll build an AI agent that handles it — 24/7.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact-us" className="group w-full sm:w-auto bg-brand-orange text-white font-bold px-10 py-4 rounded-full hover:bg-navy-950 transition-all shadow-[0_10px_30px_rgba(249,115,22,0.25)] flex items-center justify-center gap-2 text-base">
            Book a Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="https://wa.me/917321893459?text=Hi%20AnonX,%20I%20want%20to%20build%20an%20AI%20chatbot%20for%20my%20business!" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-navy-50 text-navy-900 font-bold px-10 py-4 rounded-full hover:bg-navy-100 transition-colors flex items-center justify-center text-base">
            WhatsApp Us
          </a>
        </div>
        <p className="text-navy-400 text-sm mt-6">Also explore our <Link href="/web-development" className="text-brand-orange font-bold hover:underline">Web Development</Link> and <Link href="/app-development" className="text-brand-orange font-bold hover:underline">App Development</Link> services.</p>
      </section>
    </div>
  );
}
