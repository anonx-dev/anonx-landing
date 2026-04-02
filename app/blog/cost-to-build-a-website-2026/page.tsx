import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import AnonxLogo from "@/components/ui/AnonxLogo";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Does It Cost to Build a Website in 2026?",
  description:
    "Wondering how much a website costs in 2026? We break down website development costs — from simple business sites (₹15,000) to complex web apps (₹5L+). Get real numbers and know what to budget.",
  keywords: [
    "how much does it cost to build a website",
    "website development cost in India",
    "website cost 2026",
    "custom website development price",
    "how much does a website cost",
    "web development pricing",
    "website development cost for small business",
    "cost to build a web app",
    "website cost breakdown",
    "hire web developer India",
  ],
  alternates: { canonical: "https://www.anonx.space/blog/cost-to-build-a-website-2026" },
  openGraph: {
    title: "How Much Does It Cost to Build a Website in 2026? | AnonX",
    description:
      "Real pricing breakdown for websites in 2026 — from ₹15,000 landing pages to ₹5L+ SaaS platforms. Know exactly what you'll pay before talking to any agency.",
    url: "https://www.anonx.space/blog/cost-to-build-a-website-2026",
    type: "article",
    images: [{ url: "https://www.anonx.space/og-image.png", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does It Cost to Build a Website in 2026?",
  description:
    "A complete pricing breakdown for website development in 2026 — from simple business sites to complex SaaS platforms.",
  author: { "@type": "Organization", name: "AnonX Technologies", url: "https://www.anonx.space" },
  publisher: {
    "@type": "Organization",
    name: "AnonX Technologies",
    logo: { "@type": "ImageObject", url: "https://www.anonx.space/favicon.svg" },
  },
  datePublished: "2026-01-10",
  dateModified: "2026-04-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.anonx.space/blog/cost-to-build-a-website-2026" },
  keywords: "website development cost, how much does a website cost, web development pricing 2026",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to build a website in India in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basic business website in India costs ₹15,000–₹80,000. A custom web application or SaaS platform costs ₹1.5L–₹10L+ depending on complexity, features, and the agency you hire.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cheapest way to build a professional website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a professional business website, hiring an agency for a custom Next.js or WordPress site (₹20,000–₹60,000) gives the best ROI vs. DIY builders like Wix that have SEO limitations.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A landing page takes 1–2 weeks. A complete business website takes 2–4 weeks. A complex web application or SaaS platform takes 2–4 months depending on scope.",
      },
    },
  ],
};

const tiers = [
  {
    name: "Landing Page / Portfolio",
    price: "₹15,000 – ₹40,000",
    timeline: "1–2 weeks",
    color: "border-l-blue-400",
    bg: "bg-blue-50",
    best: "Freelancers, consultants, personal brands",
    includes: ["5–10 pages", "Mobile responsive", "Contact form", "Basic SEO setup", "Google Analytics"],
    notIncludes: ["Custom functionality", "Payment gateway", "User accounts"],
  },
  {
    name: "Business Website",
    price: "₹40,000 – ₹1,50,000",
    timeline: "2–4 weeks",
    color: "border-l-brand-orange",
    bg: "bg-orange-50",
    best: "SMEs, startups, service-based businesses",
    includes: ["Custom design", "CMS integration", "Blog / content system", "SEO-optimized structure", "Performance optimization", "WhatsApp / CTA flows"],
    notIncludes: ["User login system", "Complex backend", "Payment processing"],
  },
  {
    name: "Web Application / SaaS",
    price: "₹1,50,000 – ₹10,00,000+",
    timeline: "6–16 weeks",
    color: "border-l-purple-400",
    bg: "bg-purple-50",
    best: "Funded startups, enterprises, SaaS products",
    includes: ["Custom backend & APIs", "User auth & roles", "Payment integration", "Real-time features", "Admin dashboard", "Scalable cloud infra", "Security hardening"],
    notIncludes: [],
  },
];

const costFactors = [
  { factor: "Design Complexity", impact: "High", desc: "Custom illustrations and animations cost more than template-based designs." },
  { factor: "Number of Pages", impact: "Medium", desc: "More pages = more content, more dev hours, more QA cycles." },
  { factor: "Backend / Database", impact: "Very High", desc: "User accounts, dashboards, APIs — these multiply the development cost significantly." },
  { factor: "Payment Integration", impact: "Medium", desc: "Razorpay, Stripe, PayPal integration adds ₹10K–₹30K to a project." },
  { factor: "SEO Setup", impact: "Medium", desc: "Proper technical SEO, sitemaps, schema — often skipped by cheap agencies and costs you later." },
  { factor: "Maintenance & Hosting", impact: "Ongoing", desc: "Budget ₹3,000–₹15,000/month for hosting, updates, security patches." },
];

export default function BlogWebsiteCostPage() {
  return (
    <div className="min-h-screen bg-brand-bg font-satoshi selection:bg-brand-orange selection:text-white">
      <Script id="schema-article" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="schema-faq" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-brand-orange font-bold text-xs">
              <Tag className="w-3 h-3" /> Web Development
            </span>
            <span className="inline-flex items-center gap-1.5 text-navy-400 text-xs font-medium">
              <Clock className="w-3 h-3" /> 8 min read · April 2026
            </span>
          </div>

          <h1 className="font-cabinet font-extrabold text-3xl sm:text-4xl md:text-5xl text-navy-950 tracking-tight mb-6 leading-[1.15]">
            How Much Does It Cost to Build a Website in 2026?
          </h1>

          <p className="text-lg text-navy-600 font-medium leading-relaxed mb-8">
            Everyone quotes a different number. ₹5,000. ₹5 lakh. ₹50 lakh. The confusion is real — and agencies often take advantage of it. This guide gives you the real numbers, explains what drives cost, and helps you budget accurately <span className="font-bold text-navy-900">before you talk to a single agency.</span>
          </p>

          {/* Inline CTA */}
          <div className="bg-navy-950 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-white font-bold mb-1">Skip the research — tell us what you need</p>
              <p className="text-navy-400 text-sm">Get a real quote from AnonX in 24 hours. No fluff, no sales pitch.</p>
            </div>
            <Link href="/web-development" className="shrink-0 bg-brand-orange text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors flex items-center gap-2 text-sm whitespace-nowrap">
              Get Your Website Built <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ── Cost Tiers ── */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="font-cabinet font-extrabold text-2xl md:text-3xl text-navy-950 mb-3 tracking-tight">The Honest Pricing Breakdown</h2>
          <p className="text-navy-600 mb-8 font-medium">Here are the three real categories. Where you fall depends on <em>what</em> you need built, not just how many pages.</p>

          <div className="flex flex-col gap-6">
            {tiers.map((tier, i) => (
              <div key={i} className={`bg-white rounded-2xl border border-navy-100 border-l-4 ${tier.color} p-6 md:p-8 shadow-sm`}>
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

        {/* ── What Drives the Cost ── */}
        <div className="bg-navy-950 py-16 px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-cabinet font-extrabold text-2xl md:text-3xl text-white mb-3 tracking-tight">What Actually Drives the Price</h2>
            <p className="text-navy-400 mb-8 font-medium">These 6 factors decide whether your project is ₹20,000 or ₹2,00,000.</p>
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

        {/* ── Body Content ── */}
        <div className="max-w-3xl mx-auto px-6 mb-16 prose-like">
          <h2 className="font-cabinet font-extrabold text-2xl md:text-3xl text-navy-950 mb-4 tracking-tight">Why "Cheap" Websites Cost You More in the Long Run</h2>
          <p className="text-navy-600 leading-relaxed mb-4 font-medium">
            We've onboarded dozens of clients who paid ₹8,000–₹15,000 for a website on Fiverr or to a local "web designer" — and then came to us 6 months later with a broken site, no SEO, and no way to update content.
          </p>
          <p className="text-navy-600 leading-relaxed mb-4 font-medium">
            The real cost wasn't ₹10,000. It was ₹10,000 + ₹60,000 to fix it properly + 6 months of lost Google ranking opportunity.
          </p>
          <p className="text-navy-600 leading-relaxed mb-8 font-medium">
            A proper <Link href="/web-development" className="text-brand-orange font-bold hover:underline">custom web development</Link> project from a professional agency includes: performance optimization, technical SEO from day one, secure code, CMS access, and post-launch support. That's what makes businesses actually grow online.
          </p>

          <h2 className="font-cabinet font-extrabold text-2xl md:text-3xl text-navy-950 mb-4 tracking-tight">Freelancer vs. Agency: What&apos;s the Difference?</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse border border-navy-100 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-navy-950 text-white">
                  <th className="px-4 py-3 text-left font-bold">Factor</th>
                  <th className="px-4 py-3 text-left font-bold">Freelancer</th>
                  <th className="px-4 py-3 text-left font-bold">Agency (like AnonX)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cost", "₹8K – ₹50K", "₹25K – ₹5L+"],
                  ["Timeline", "Unpredictable", "Fixed & milestone-based"],
                  ["Design Quality", "Variable", "Consistent, premium"],
                  ["SEO Setup", "Often skipped", "Built-in from day 1"],
                  ["Post-launch support", "Rarely", "Always included"],
                  ["Security", "Basic", "OWASP-compliant"],
                ].map(([factor, freelancer, agency], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-navy-50/50"}>
                    <td className="px-4 py-3 font-bold text-navy-900 border-t border-navy-100">{factor}</td>
                    <td className="px-4 py-3 text-navy-600 border-t border-navy-100">{freelancer}</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold border-t border-navy-100">{agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-cabinet font-extrabold text-2xl md:text-3xl text-navy-950 mb-4 tracking-tight">FAQ: Website Cost in 2026</h2>
          <div className="flex flex-col gap-4 mb-8">
            {[
              {
                q: "How much does it cost to build a website in India in 2026?",
                a: "A basic business website costs ₹15,000–₹80,000. A custom web application or SaaS platform costs ₹1.5L–₹10L+ depending on complexity.",
              },
              {
                q: "What is the cheapest way to get a professional website?",
                a: "Hiring an agency for a custom Next.js or WordPress site (₹20,000–₹60,000) gives the best ROI compared to DIY builders that have SEO limitations.",
              },
              {
                q: "How long does it take to build a website?",
                a: "A landing page takes 1–2 weeks. A complete business website takes 2–4 weeks. A complex web app or SaaS takes 2–4 months.",
              },
              {
                q: "Does a website need ongoing maintenance?",
                a: "Yes. Budget ₹3,000–₹15,000/month for hosting, security patches, CMS updates, and minor changes. Ignoring maintenance leads to security breaches.",
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full pointer-events-none" />
            <h2 className="font-cabinet font-extrabold text-3xl text-white mb-4 tracking-tight relative z-10">
              Ready to get your website built properly?
            </h2>
            <p className="text-navy-300 mb-8 max-w-md mx-auto font-medium relative z-10">
              Tell us what you need. We&apos;ll give you a real quote — no nonsense, no upselling, just honest engineering.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link href="/web-development" className="group w-full sm:w-auto bg-brand-orange text-white font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)] flex items-center justify-center gap-2">
                Get Your Website Built <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/917321893459?text=Hi%20AnonX,%20I%20need%20a%20website%20built!" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-colors flex items-center justify-center">
                WhatsApp Us Directly
              </a>
            </div>
            <p className="text-navy-400 text-xs mt-6 relative z-10">
              Also read: <Link href="/app-development" className="text-brand-orange hover:underline font-medium">App Development costs</Link> · <Link href="/chatbot-development" className="text-brand-orange hover:underline font-medium">AI Chatbot for business</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
