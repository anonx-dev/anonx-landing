import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import AnonxLogo from "@/components/ui/AnonxLogo";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Does It Cost to Build a Mobile App in 2026?",
  description:
    "Real cost breakdown for mobile app development in 2026 — from ₹80,000 MVPs to ₹20L+ enterprise apps. Flutter vs native, what drives price, and how to budget correctly before hiring an agency.",
  keywords: [
    "how much does it cost to build a mobile app",
    "mobile app development cost in India",
    "app development cost 2026",
    "Flutter app development cost",
    "how much does an app cost",
    "mobile app development pricing",
    "cost to build an app for startup",
    "iOS Android app cost",
    "app development budget",
    "hire app developer India",
  ],
  alternates: { canonical: "https://www.anonx.space/blog/cost-to-build-a-mobile-app-2026" },
  openGraph: {
    title: "How Much Does It Cost to Build a Mobile App in 2026? | AnonX",
    description:
      "Honest pricing for mobile app development in 2026 — from ₹80K MVPs to ₹20L+ enterprise products. Know your budget before talking to any agency.",
    url: "https://www.anonx.space/blog/cost-to-build-a-mobile-app-2026",
    type: "article",
    images: [{ url: "https://www.anonx.space/og-image.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does It Cost to Build a Mobile App in 2026?",
  description:
    "A complete pricing breakdown for mobile app development in 2026 — from lean MVPs to full-scale enterprise products.",
  author: { "@type": "Organization", name: "AnonX Technologies", url: "https://www.anonx.space" },
  publisher: {
    "@type": "Organization",
    name: "AnonX Technologies",
    logo: { "@type": "ImageObject", url: "https://www.anonx.space/favicon.svg" },
  },
  datePublished: "2026-01-15",
  dateModified: "2026-04-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.anonx.space/blog/cost-to-build-a-mobile-app-2026" },
  keywords: "mobile app development cost, how much does an app cost, app development pricing 2026",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to build a mobile app in India in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A lean MVP app in India costs ₹80,000–₹3,00,000. A full-featured consumer or B2B app costs ₹3L–₹12L. Enterprise-grade apps with custom backends, real-time features, and integrations start at ₹12L and go up significantly.",
      },
    },
    {
      "@type": "Question",
      name: "Is Flutter cheaper than building native iOS and Android apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Flutter lets one team build for both iOS and Android from a single codebase, cutting development cost by 40–60% compared to two separate native builds, while still delivering near-native performance.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a mobile app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basic MVP takes 4–8 weeks. A full-featured consumer app takes 3–6 months. Enterprise apps with complex backends, dashboards, and integrations typically take 6–12 months.",
      },
    },
    {
      "@type": "Question",
      name: "What is the biggest hidden cost in app development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Backend infrastructure and ongoing maintenance are the biggest hidden costs. Most agencies only quote the app build — not the cloud servers, API costs, push notification services, and monthly upkeep that follow.",
      },
    },
  ],
};

const tiers = [
  {
    name: "MVP / Proof of Concept",
    price: "₹80,000 – ₹3,00,000",
    timeline: "4–8 weeks",
    colorBorder: "border-l-blue-400",
    best: "Founders validating an idea, early-stage startups",
    includes: [
      "Core feature set only",
      "Flutter (iOS + Android)",
      "Basic auth (email/phone)",
      "REST API backend",
      "Simple admin panel",
      "App Store deployment",
    ],
    notIncludes: ["Real-time features", "Payment gateway", "Complex dashboards"],
  },
  {
    name: "Full-Featured Consumer App",
    price: "₹3,00,000 – ₹12,00,000",
    timeline: "3–6 months",
    colorBorder: "border-l-brand-orange",
    best: "Funded startups, B2C products, marketplace apps",
    includes: [
      "Full UI/UX design system",
      "Push notifications",
      "In-app payments (Razorpay/Stripe)",
      "Real-time chat / WebSockets",
      "Advanced analytics dashboard",
      "Social auth (Google/Apple)",
      "Scalable cloud backend (AWS/GCP)",
    ],
    notIncludes: [],
  },
  {
    name: "Enterprise / Platform App",
    price: "₹12,00,000 – ₹50,00,000+",
    timeline: "6–12 months",
    colorBorder: "border-l-purple-400",
    best: "Enterprises, funded scale-ups, regulated industries",
    includes: [
      "Native iOS + Android builds",
      "Microservices backend",
      "SSO / enterprise auth",
      "Offline sync architecture",
      "BI dashboards & reporting",
      "ERP / CRM integrations",
      "SOC2 / security compliance",
      "Dedicated DevOps & CI/CD",
    ],
    notIncludes: [],
  },
];

const costFactors = [
  { factor: "Platform Choice", impact: "Very High", desc: "Flutter (cross-platform) saves 40–60% vs building separate iOS and Android native apps." },
  { factor: "Backend Complexity", impact: "Very High", desc: "A simple CRUD backend vs real-time data, microservices, and third-party integrations can 3x the cost." },
  { factor: "Design Quality", impact: "High", desc: "Premium UI/UX with custom animations and design systems costs ₹50K–₹2L on top of development." },
  { factor: "Third-party Integrations", impact: "High", desc: "Payment gateways, maps, CRMs, and analytics tools each add ₹10K–₹50K in integration work." },
  { factor: "App Store Fees", impact: "Low", desc: "Google Play: $25 one-time. Apple App Store: $99/year. Often missed in initial budget." },
  { factor: "Post-launch Maintenance", impact: "Ongoing", desc: "Budget 15–20% of build cost per year for bug fixes, OS updates, and performance patches." },
];

const flutterVsNative = [
  ["Cost", "₹80K–₹5L (single build)", "₹2L–₹12L+ (two builds)"],
  ["Timeline", "30–40% faster", "Longer — two separate teams"],
  ["Performance", "Near-native, 60fps", "Fully native"],
  ["Code reuse", "~95% shared codebase", "0% — fully separate"],
  ["Best for", "Startups, MVPs, scale-ups", "Complex platform-specific UX"],
];

export default function BlogAppCostPage() {
  return (
    <div className="min-h-screen bg-brand-bg font-satoshi selection:bg-brand-orange selection:text-white">
      <Script id="schema-article-app" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="schema-faq-app" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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

      <main className="pt-24 pb-20">
        {/* ── Article Header ── */}
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold text-xs">
              <Tag className="w-3 h-3" /> App Development
            </span>
            <span className="inline-flex items-center gap-1.5 text-navy-400 text-xs font-medium">
              <Clock className="w-3 h-3" /> 9 min read · April 2026
            </span>
          </div>

          <h1 className="font-cabinet font-extrabold text-3xl sm:text-4xl md:text-5xl text-navy-950 tracking-tight mb-6 leading-[1.15]">
            How Much Does It Cost to Build a Mobile App in 2026?
          </h1>

          <p className="text-lg text-navy-600 font-medium leading-relaxed mb-8">
            App development quotes range from ₹50,000 to ₹5 crore — and both can be correct depending on what you&apos;re building. The problem? Most founders don&apos;t know what they&apos;re buying. This guide gives you the <span className="font-bold text-navy-900">real numbers, the honest tradeoffs,</span> and a framework to evaluate any agency quote you receive.
          </p>

          {/* Inline CTA */}
          <div className="bg-navy-950 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-white font-bold mb-1">Know your budget. Then talk to us.</p>
              <p className="text-navy-400 text-sm">We build Flutter and React Native apps for startups and enterprises. Real timelines. Real prices.</p>
            </div>
            <Link href="/app-development" className="shrink-0 bg-brand-orange text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors flex items-center gap-2 text-sm whitespace-nowrap">
              Get Your App Built <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ── Cost Tiers ── */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="font-cabinet font-extrabold text-2xl md:text-3xl text-navy-950 mb-3 tracking-tight">The 3 Real App Budget Tiers</h2>
          <p className="text-navy-600 mb-8 font-medium">Every app falls into one of these categories. The tier isn&apos;t just about budget — it&apos;s about what features your business actually needs.</p>

          <div className="flex flex-col gap-6">
            {tiers.map((tier, i) => (
              <div key={i} className={`bg-white rounded-2xl border border-navy-100 border-l-4 ${tier.colorBorder} p-6 md:p-8 shadow-sm`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-cabinet font-extrabold text-xl text-navy-950 mb-1">{tier.name}</h3>
                    <p className="text-navy-500 text-sm">Best for: {tier.best}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-cabinet font-extrabold text-2xl text-brand-orange">{tier.price}</p>
                    <p className="text-navy-500 text-sm">{tier.timeline}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tier.includes.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-navy-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                {tier.notIncludes.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-navy-50 flex flex-wrap gap-2">
                    {tier.notIncludes.map((item, j) => (
                      <span key={j} className="text-xs text-navy-400 bg-navy-50 px-2 py-1 rounded-md">✗ {item}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Cost Factors ── */}
        <div className="bg-navy-950 py-16 px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-cabinet font-extrabold text-2xl md:text-3xl text-white mb-3 tracking-tight">6 Factors That Decide Your App&apos;s Price</h2>
            <p className="text-navy-400 mb-8 font-medium">Understanding these will help you ask the right questions — and spot agencies that are padding quotes.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {costFactors.map((f, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white text-sm">{f.factor}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${f.impact === "Very High" ? "bg-red-500/20 text-red-400" : f.impact === "High" ? "bg-orange-500/20 text-brand-orange" : f.impact === "Ongoing" ? "bg-blue-500/20 text-blue-400" : "bg-white/10 text-navy-300"}`}>
                      {f.impact}
                    </span>
                  </div>
                  <p className="text-navy-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Flutter vs Native ── */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="font-cabinet font-extrabold text-2xl md:text-3xl text-navy-950 mb-3 tracking-tight">Flutter vs Native: The Cost Difference</h2>
          <p className="text-navy-600 mb-8 font-medium">
            This decision alone accounts for a <strong className="text-navy-900">40–60% cost difference</strong>. Most startups choose <Link href="/app-development" className="text-brand-orange font-bold hover:underline">Flutter app development</Link> for this reason.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-navy-100 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-navy-950 text-white">
                  <th className="px-4 py-3 text-left font-bold">Factor</th>
                  <th className="px-4 py-3 text-left font-bold">Flutter (Cross-Platform)</th>
                  <th className="px-4 py-3 text-left font-bold">Native (iOS + Android)</th>
                </tr>
              </thead>
              <tbody>
                {flutterVsNative.map(([factor, flutter, native], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-navy-50/50"}>
                    <td className="px-4 py-3 font-bold text-navy-900 border-t border-navy-100">{factor}</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold border-t border-navy-100">{flutter}</td>
                    <td className="px-4 py-3 text-navy-600 border-t border-navy-100">{native}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Body Content ── */}
        <div className="max-w-3xl mx-auto px-6 mb-16">
          <h2 className="font-cabinet font-extrabold text-2xl md:text-3xl text-navy-950 mb-4 tracking-tight">The Hidden Costs Nobody Mentions</h2>
          <p className="text-navy-600 leading-relaxed mb-4 font-medium">
            Most app development quotes only cover the <strong className="text-navy-900">build cost</strong>. Here&apos;s what they conveniently leave out:
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              "Cloud server costs — ₹3,000–₹30,000/month on AWS or GCP depending on traffic",
              "App Store fees — Google Play $25 one-time, Apple Developer $99/year",
              "Third-party services — push notifications (Firebase), SMS OTP (Twilio), maps (Google Maps API)",
              "Post-launch fixes — the first 3 months after launch are always bug-heavy",
              "OS updates — Apple and Google release major OS updates yearly; your app needs compatibility fixes",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white border border-navy-100 rounded-xl p-4 text-sm text-navy-700 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-cabinet font-extrabold text-2xl md:text-3xl text-navy-950 mb-4 tracking-tight">FAQ: App Development Cost in 2026</h2>
          <div className="flex flex-col gap-4 mb-8">
            {[
              {
                q: "How much does it cost to build a mobile app in India in 2026?",
                a: "A lean MVP costs ₹80,000–₹3,00,000. A full-featured consumer app costs ₹3L–₹12L. Enterprise-grade apps start at ₹12L+.",
              },
              {
                q: "Is Flutter cheaper than native iOS and Android development?",
                a: "Yes. Flutter (single codebase for iOS + Android) cuts cost by 40–60% versus maintaining two separate native codebases.",
              },
              {
                q: "How long does it take to build a mobile app?",
                a: "A basic MVP: 4–8 weeks. Full-featured consumer app: 3–6 months. Enterprise platform: 6–12 months.",
              },
              {
                q: "What is the biggest hidden cost in app development?",
                a: "Backend infrastructure and ongoing maintenance — cloud servers, OS compatibility updates, third-party API costs. Budget 15–20% of build cost per year for maintenance.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-navy-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-navy-950 mb-2 text-sm">{faq.q}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-navy-950 to-navy-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full pointer-events-none" />
            <h2 className="font-cabinet font-extrabold text-3xl text-white mb-4 tracking-tight relative z-10">
              Ready to build your app?
            </h2>
            <p className="text-navy-300 mb-8 max-w-md mx-auto font-medium relative z-10">
              Share your idea. We&apos;ll scope it, give you a transparent quote, and ship it — on time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link href="/app-development" className="group w-full sm:w-auto bg-brand-orange text-white font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)] flex items-center justify-center gap-2">
                Start Your App <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/917321893459?text=Hi%20AnonX,%20I%20want%20to%20discuss%20building%20a%20mobile%20app!" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-colors flex items-center justify-center">
                WhatsApp Us Directly
              </a>
            </div>
            <p className="text-navy-400 text-xs mt-6 relative z-10">
              Also read: <Link href="/blog/cost-to-build-a-website-2026" className="text-brand-orange hover:underline font-medium">Website development cost</Link> · <Link href="/chatbot-development" className="text-brand-orange hover:underline font-medium">AI Chatbot for business</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
