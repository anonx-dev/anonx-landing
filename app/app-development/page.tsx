import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import AnonxLogo from "@/components/ui/AnonxLogo";
import { ArrowLeft, ArrowRight, CheckCircle2, Smartphone, Zap, Shield, Globe, Code2, RefreshCw, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Services",
  description:
    "AnonX builds cross-platform and native mobile apps for startups and businesses. Flutter, React Native, iOS & Android — fast delivery, scalable architecture, premium UX.",
  keywords: [
    "mobile app development",
    "app development company",
    "cross platform app development",
    "Flutter app development",
    "React Native development",
    "iOS app development",
    "Android app development",
    "startup app development",
    "custom mobile app",
    "AnonX app development",
  ],
  alternates: { canonical: "https://www.anonx.space/app-development" },
  openGraph: {
    title: "Mobile App Development Services | AnonX",
    description:
      "We build Flutter and React Native apps for startups and businesses — cross-platform, native-performance, and production-ready in weeks.",
    url: "https://www.anonx.space/app-development",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development Services",
  serviceType: "Mobile App Development",
  provider: {
    "@type": "Organization",
    name: "AnonX Technologies",
    url: "https://www.anonx.space",
  },
  description:
    "Cross-platform and native mobile app development using Flutter, React Native, Swift, and Kotlin for startups and enterprises.",
  areaServed: "Worldwide",
  url: "https://www.anonx.space/app-development",
};

const whatWeBuild = [
  { icon: <Smartphone className="w-6 h-6" />, title: "Cross-Platform Apps", desc: "One codebase, native performance on both iOS and Android using Flutter or React Native." },
  { icon: <Globe className="w-6 h-6" />, title: "Consumer Apps", desc: "B2C apps built for growth — smooth onboarding, push notifications, and retention mechanics." },
  { icon: <Layers className="w-6 h-6" />, title: "Enterprise Apps", desc: "Internal tools, field-ops apps, and complex B2B platforms with offline sync and SSO." },
  { icon: <RefreshCw className="w-6 h-6" />, title: "App Modernization", desc: "Upgrade your legacy app to modern architecture without losing existing users or data." },
];

const problemsSolved = [
  "You have an app idea but no technical co-founder or dev team",
  "Your current app is slow, crashes often, or users are dropping off",
  "You've been quoted outrageous prices for a simple app",
  "You need both iOS and Android but can't afford two separate builds",
  "Your app doesn't scale — it breaks when more than 100 users are active",
];

const approach = [
  { icon: <Zap className="w-5 h-5 text-brand-orange" />, title: "Fast MVP Delivery", desc: "We ship a working MVP in 4–6 weeks. Real milestones, real progress, no vague timelines." },
  { icon: <Smartphone className="w-5 h-5 text-brand-orange" />, title: "Native-Level UX", desc: "Flutter renders at 60fps natively. Your app won't feel like a 'hybrid' — it feels premium." },
  { icon: <Shield className="w-5 h-5 text-brand-orange" />, title: "Secure by Design", desc: "Encrypted storage, secure auth, certificate pinning — security is not an afterthought." },
  { icon: <Code2 className="w-5 h-5 text-brand-orange" />, title: "Clean, Owned Codebase", desc: "You own everything. Clean, documented, handoff-ready code. No vendor lock-in." },
];

const whyUs = [
  { stat: "4–6 wks", label: "MVP Delivery" },
  { stat: "60fps", label: "Flutter Performance" },
  { stat: "iOS + Android", label: "Single Codebase" },
  { stat: "Zero", label: "Vendor Lock-in" },
];

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-brand-bg font-satoshi selection:bg-brand-orange selection:text-white">
      <Script id="schema-app-dev" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-2xl max-h-[600px] bg-emerald-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold uppercase tracking-widest text-xs mb-6">
          App Development
        </span>
        <h1 className="font-cabinet font-extrabold text-4xl sm:text-5xl md:text-6xl text-navy-950 tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
          Mobile App Development<br className="hidden sm:block" />{" "}
          <span className="text-brand-orange">That Investors Notice</span>
        </h1>
        <p className="text-lg md:text-xl text-navy-600 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
          We build cross-platform iOS and Android apps for startups and serious businesses. Flutter-first, native performance, delivered in weeks — not months.
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
          <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-navy-950 tracking-tight">Apps for every use case</h2>
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Problems We Solve</span>
            <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-white tracking-tight">We&apos;ve heard this before</h2>
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
          <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-navy-950 tracking-tight">How we build apps that ship</h2>
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
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-white border-y border-emerald-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Why AnonX</span>
          <h2 className="font-cabinet font-extrabold text-3xl text-navy-950 mb-12 tracking-tight">The numbers behind our delivery</h2>
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
        <h2 className="font-cabinet font-extrabold text-4xl text-navy-950 mb-4 tracking-tight">Let&apos;s build your app.</h2>
        <p className="text-navy-600 mb-10 text-lg font-medium">Share your idea. We&apos;ll scope it, price it, and ship it — fast.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact-us" className="group w-full sm:w-auto bg-brand-orange text-white font-bold px-10 py-4 rounded-full hover:bg-navy-950 transition-all shadow-[0_10px_30px_rgba(249,115,22,0.25)] flex items-center justify-center gap-2 text-base">
            Start Your App <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="https://wa.me/917321893459?text=Hi%20AnonX,%20I%20want%20to%20build%20a%20mobile%20app!" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-navy-50 text-navy-900 font-bold px-10 py-4 rounded-full hover:bg-navy-100 transition-colors flex items-center justify-center text-base">
            WhatsApp Us
          </a>
        </div>
        <p className="text-navy-400 text-sm mt-6">Also explore our <Link href="/web-development" className="text-brand-orange font-bold hover:underline">Web Development</Link> and <Link href="/chatbot-development" className="text-brand-orange font-bold hover:underline">AI Chatbot</Link> services.</p>
      </section>
    </div>
  );
}
