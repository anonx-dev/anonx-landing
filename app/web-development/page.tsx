import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import AnonxLogo from "@/components/ui/AnonxLogo";
import { ArrowLeft, ArrowRight, CheckCircle2, Monitor, Zap, Shield, Globe, Code2, BarChart3, Layers, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "AnonX delivers custom web development services for businesses and startups — from high-performance websites to complex web apps and dashboards. Fast, scalable, secure.",
  keywords: [
    "web development services",
    "custom website development",
    "web app development",
    "business website development",
    "startup web development",
    "custom web application",
    "website development company",
    "Next.js development",
    "React web development",
    "AnonX web development",
  ],
  alternates: { canonical: "https://www.anonx.space/web-development" },
  openGraph: {
    title: "Custom Web Development Services | AnonX",
    description:
      "We build fast, scalable, and secure websites and web applications for businesses and startups. Performance-first. Modern tech. Reliable delivery.",
    url: "https://www.anonx.space/web-development",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services",
  serviceType: "Custom Web Development",
  provider: {
    "@type": "Organization",
    name: "AnonX Technologies",
    url: "https://www.anonx.space",
  },
  description:
    "Custom web development services including business websites, web apps, SaaS platforms, dashboards, and e-commerce solutions.",
  areaServed: "Worldwide",
  url: "https://www.anonx.space/web-development",
};

const whatWeBuild = [
  { icon: <Globe className="w-6 h-6" />, title: "Business Websites", desc: "Fast, conversion-optimized marketing sites that rank on Google and turn visitors into clients." },
  { icon: <Layers className="w-6 h-6" />, title: "Web Applications", desc: "Complex SaaS platforms, portals, and dashboards built for scale from day one." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Admin Dashboards", desc: "Real-time data dashboards with analytics, role-based access, and intuitive UI." },
  { icon: <Code2 className="w-6 h-6" />, title: "API & Backend Systems", desc: "Robust REST and GraphQL APIs that power your web and mobile fronts." },
];

const problemsSolved = [
  "Your website is slow and losing customers before they convert",
  "Your current site doesn't rank on Google for any useful keyword",
  "You need a web app but don't have an in-house tech team",
  "Your existing platform can't handle growth or new features",
  "You're paying for a website that looks outdated and unprofessional",
];

const approach = [
  { icon: <Zap className="w-5 h-5 text-brand-orange" />, title: "Performance-First", desc: "Sub-second load times, Core Web Vitals optimized, Lighthouse score 95+." },
  { icon: <Layers className="w-5 h-5 text-brand-orange" />, title: "Scalable Architecture", desc: "Built to handle 10 users or 10 million. We architect for your growth vector." },
  { icon: <Shield className="w-5 h-5 text-brand-orange" />, title: "Security by Default", desc: "OWASP-compliant, input validation, HTTPS, and secure auth baked in from day one." },
  { icon: <Monitor className="w-5 h-5 text-brand-orange" />, title: "Modern Tech Stack", desc: "Next.js, React, TypeScript, Tailwind — the stack top companies use at scale." },
];

const whyUs = [
  { stat: "2–4 weeks", label: "MVP Delivery" },
  { stat: "95+", label: "Lighthouse Score" },
  { stat: "100%", label: "TypeScript Codebase" },
  { stat: "24/7", label: "Post-launch Support" },
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-brand-bg font-satoshi selection:bg-brand-orange selection:text-white">
      <Script id="schema-web-dev" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-2xl max-h-[600px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold uppercase tracking-widest text-xs mb-6">
          Web Development
        </span>
        <h1 className="font-cabinet font-extrabold text-4xl sm:text-5xl md:text-6xl text-navy-950 tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
          Custom Web Development<br className="hidden sm:block" />{" "}
          <span className="text-brand-orange">Built to Convert & Scale</span>
        </h1>
        <p className="text-lg md:text-xl text-navy-600 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
          We build high-performance websites and web applications for businesses and startups. From a marketing site that ranks on Google to a complex SaaS platform — we engineer it right.
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
          <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-navy-950 tracking-tight">Everything web. Done right.</h2>
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Problems We Solve</span>
            <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-white tracking-tight">Sound familiar?</h2>
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
          <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-navy-950 tracking-tight">How we engineer the web</h2>
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
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white border-y border-orange-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Why AnonX</span>
          <h2 className="font-cabinet font-extrabold text-3xl text-navy-950 mb-12 tracking-tight">Numbers that speak</h2>
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
        <h2 className="font-cabinet font-extrabold text-4xl text-navy-950 mb-4 tracking-tight">Ready to build your web presence?</h2>
        <p className="text-navy-600 mb-10 text-lg font-medium">Tell us what you need. We&apos;ll architect the right solution and deliver fast.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact-us" className="group w-full sm:w-auto bg-brand-orange text-white font-bold px-10 py-4 rounded-full hover:bg-navy-950 transition-all shadow-[0_10px_30px_rgba(249,115,22,0.25)] flex items-center justify-center gap-2 text-base">
            Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="https://wa.me/917321893459?text=Hi%20AnonX,%20I%20need%20a%20website%20built!" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-navy-50 text-navy-900 font-bold px-10 py-4 rounded-full hover:bg-navy-100 transition-colors flex items-center justify-center text-base">
            WhatsApp Us
          </a>
        </div>
        <p className="text-navy-400 text-sm mt-6">Also check out our <Link href="/app-development" className="text-brand-orange font-bold hover:underline">App Development</Link> and <Link href="/chatbot-development" className="text-brand-orange font-bold hover:underline">AI Chatbot</Link> services.</p>
      </section>
    </div>
  );
}
