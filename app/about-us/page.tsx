import type { Metadata } from "next";
import Link from "next/link";
import AnonxLogo from "@/components/ui/AnonxLogo";
import { ArrowLeft, Shield, Zap, Globe, LineChart, Search, Layers, Server, Monitor, Smartphone, Cloud } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AnonX Technologies is an elite software engineering agency — a decentralized collective of architects, cloud engineers, and growth specialists dedicated to scaling modern tech businesses.",
  keywords: [
    "about AnonX",
    "AnonX Technologies",
    "software engineering agency",
    "tech company",
    "who is AnonX",
    "AnonX team",
    "elite dev agency",
  ],
  alternates: { canonical: "https://www.anonx.space/about-us" },
  openGraph: {
    title: "About AnonX | Elite Software Engineering Agency",
    description:
      "Engineering the future, scaling the impossible. Meet the decentralized squad behind AnonX Technologies.",
    url: "https://www.anonx.space/about-us",
  },
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-brand-bg font-satoshi selection:bg-brand-orange selection:text-white pb-20 overflow-hidden">

      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-navy-500 group-hover:-translate-x-1 transition-transform" />
            <span className="text-navy-600 font-bold text-sm">Back to Home</span>
          </Link>
          <AnonxLogo size="sm" color="dark" showText={true} hideTagline={true} />
        </div>
      </nav>

      {/* ── Hero & Metrics ── */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-20 px-4 sm:px-6 max-w-7xl mx-auto text-center flex flex-col items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-orange/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: "radial-gradient(rgba(15,23,42,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <span className="inline-block px-4 py-1.5 rounded-full bg-navy-50 border border-navy-100 text-brand-orange font-bold uppercase tracking-widest text-xs mb-5 shadow-sm">
          Who We Are
        </span>

        {/* Mobile: smaller, no SVG underline to avoid overflow */}
        <h1 className="font-cabinet font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-navy-950 tracking-tight mb-5 md:mb-8 max-w-5xl leading-[1.05] px-2">
          Engineering the{" "}
          <span className="text-brand-orange relative">
            Future
            <svg className="hidden md:block absolute w-full h-3 -bottom-1 left-0 text-brand-orange/20" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
            </svg>
          </span>
          ,{" "}
          <br className="hidden sm:block" />
          Scaling the Impossible.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed font-medium mb-8 md:mb-16 px-2">
          AnonX Technologies operates as an elite, decentralized collective of software architects, cloud engineers, and growth specialists. We are the stealth force behind high-growth startups and scaled enterprises.
        </p>

        {/* Stats Bar */}
        <div className="w-full max-w-5xl bg-navy-950 rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[60px] rounded-full pointer-events-none" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 relative z-10 md:divide-x divide-white/10">
            {[
              { label: "Average Response Time", value: "< 2 hrs" },
              { label: "On-Time Delivery Rate", value: "100%" },
              { label: "Tech Stacks Covered", value: "Full Stack" },
              { label: "Post-Launch Support", value: "24/7" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center md:px-4 py-2 md:py-0">
                <h3 className="font-cabinet font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-1 md:mb-2">{stat.value}</h3>
                <p className="text-navy-300 font-medium text-xs sm:text-sm tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-12 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-navy-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl lg:text-5xl text-navy-950 mb-5 md:mb-6 tracking-tight">Our Mission.</h2>
            <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-navy-600 leading-relaxed font-medium">
              <p>
                AnonX was founded to bridge the gap between visionary ideas and flawless technical execution. We realized that traditional agencies were too slow, too rigid, and often siloed expertise.
              </p>
              <p>
                We built a different kind of firm. An anonymous, highly capable &lsquo;X-factor&rsquo; that completely integrates with client goals. We don&apos;t just write code; we engineer comprehensive digital ecosystems — from deploying sub-millisecond{" "}
                <Link href="/services" className="text-brand-orange font-bold hover:underline">cloud backends</Link>{" "}
                to executing aggressive{" "}
                <Link href="/services" className="text-brand-orange font-bold hover:underline">technical SEO campaigns</Link>{" "}
                that dominate search rankings.
              </p>
              <p>
                When you partner with AnonX, you aren&apos;t hiring a vendor. You are acquiring an entire technical department dedicated exclusively to your scale.
              </p>
            </div>
          </div>

          {/* Useful partnership card */}
          <div className="relative hidden sm:block">
            <div className="rounded-2xl md:rounded-[2.5rem] border border-navy-100 bg-white shadow-shadow-soft overflow-hidden">
              {/* Card Header */}
              <div className="bg-navy-950 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-orange" />
                  <span className="text-white font-bold text-sm">Your AnonX Partnership</span>
                </div>
                <span className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded-full">● Active</span>
              </div>

              {/* What you get */}
              <div className="px-6 py-5 border-b border-navy-50">
                <p className="text-navy-400 text-xs font-bold uppercase tracking-widest mb-3">What's Included</p>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "Dedicated engineering team",
                    "Full-stack web & mobile builds",
                    "Cloud infrastructure & DevOps",
                    "Cybersecurity & VAPT audits",
                    "SEO & growth engineering",
                    "AI chatbot automation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-navy-700 font-medium">
                      <span className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5 text-emerald-500" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response time indicator */}
              <div className="px-6 py-4 flex items-center justify-between bg-navy-50/60">
                <div>
                  <p className="text-navy-400 text-xs font-bold uppercase tracking-widest mb-0.5">Avg. Response Time</p>
                  <p className="text-navy-950 font-extrabold font-cabinet text-xl">&lt; 2 hours</p>
                </div>
                <div className="text-right">
                  <p className="text-navy-400 text-xs font-bold uppercase tracking-widest mb-0.5">Support</p>
                  <p className="text-navy-950 font-extrabold font-cabinet text-xl">24 / 7</p>
                </div>
              </div>

              {/* CTA strip */}
              <div className="px-6 py-4">
                <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-xl px-4 py-3 flex items-center justify-between">
                  <span className="text-navy-700 text-sm font-medium">Ready to start a project?</span>
                  <span className="text-brand-orange font-bold text-sm">→ Let&apos;s talk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Dominate ── */}
      <section className="py-12 md:py-24 bg-navy-50 border-t border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Methodology</span>
            <h2 className="font-cabinet font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy-950 mb-4 tracking-tight">How We Dominate</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              { icon: <Layers className="w-6 h-6 md:w-8 md:h-8" />, title: "Full-Stack Mastery", desc: "We build natively across every layer. Fluid front-ends, impenetrable APIs, and highly durable database architectures ensuring seamless data flow." },
              { icon: <Search className="w-6 h-6 md:w-8 md:h-8" />, title: "Advanced SEO & Growth", desc: "Building a great app isn't enough if nobody finds it. We integrate deep programmatic SEO, SSR, and performance optimizations from day one." },
              { icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />, title: "Zero-Trust Security", desc: "Rooted in VAPT, no component is trusted by default. Every system is rigorously penetration-tested and hardened before it touches production." },
              { icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />, title: "Agile Velocity", desc: "We deploy CI/CD pipelines that allow multiple safe shipments per day — iterating quickly based on real-time data rather than assumptions." },
              { icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />, title: "Cloud Agnostic Scale", desc: "Whether AWS, GCP, or Azure, we orchestrate infrastructure that autonomously scales to traffic spikes without wasting idle budget." },
              { icon: <LineChart className="w-6 h-6 md:w-8 md:h-8" />, title: "Data-Driven Intelligence", desc: "We implement rigorous analytics to track precisely how systems respond and how users convert, driving every business decision." },
            ].map((val, i) => (
              <div key={i} className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-navy-100 hover:border-brand-orange/30 shadow-sm hover:shadow-md transition-all group">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-bg flex items-center justify-center text-navy-900 group-hover:bg-brand-orange group-hover:text-white transition-colors mb-4 md:mb-6 shadow-sm">
                  {val.icon}
                </div>
                <h3 className="font-cabinet font-bold text-lg md:text-2xl text-navy-950 mb-2 md:mb-3">{val.title}</h3>
                <p className="text-navy-600 leading-relaxed font-medium text-xs sm:text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Ecosystem ── */}
      <section className="py-14 md:py-32 bg-navy-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-20 max-w-3xl mx-auto">
            <h2 className="font-cabinet font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mb-3 md:mb-6 tracking-tight">An Unlimited Technology Ecosystem.</h2>
            <p className="text-navy-300 text-sm md:text-lg leading-relaxed">
              We never limit our clients to a single stack. Our capabilities span the entire modern landscape, selecting the perfect tool for your specific constraints and scale vectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-8 md:gap-y-16">
            {[
              { icon: <Monitor className="w-5 h-5 text-brand-orange" />, label: "Frontend & UI", items: ["React", "Next.js", "Vue.js", "Nuxt", "Angular", "SvelteKit", "Tailwind CSS", "TypeScript", "Framer Motion", "WebSockets", "HTML5/CSS3"] },
              { icon: <Server className="w-5 h-5 text-blue-400" />, label: "Backend & API", items: ["Node.js", "Python", "Django", "FastAPI", "Java", "Spring Boot", "Go (Golang)", "Ruby on Rails", "PHP", "Laravel", ".NET Core", "GraphQL", "REST", "gRPC"] },
              { icon: <Smartphone className="w-5 h-5 text-emerald-400" />, label: "Mobile Dev", items: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)", "Objective-C", "Java (Android)", "Ionic", "Capacitor", "PWA"] },
              { icon: <Cloud className="w-5 h-5 text-indigo-400" />, label: "Cloud, DB & Sec", items: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "ElasticSearch", "VAPT Tools", "OWASP Sec", "CI/CD Pipelines"] },
            ].map((cat, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-6">
                  {cat.icon}
                  <h3 className="font-bold text-white text-sm md:text-xl">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {cat.items.map((tech) => (
                    <span key={tech} className="px-2 md:px-4 py-1 md:py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-navy-200 font-medium text-[10px] md:text-xs transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-1 lg:col-span-4 mt-8 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-6">
              <LineChart className="w-5 h-5 text-yellow-400" />
              <h3 className="font-bold text-white text-sm md:text-xl text-center">Marketing, SEO & Growth Stack</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 max-w-4xl mx-auto">
              {["Technical SEO Audits", "Programmatic SEO", "Server-Side Rendering", "Core Web Vitals Optimization", "Schema Markup", "Google Analytics 4", "A/B Testing Frameworks", "Conversion Rate Optimization (CRO)", "Headless CMS", "Content Deliver Networks (CDN)"].map((tech) => (
                <span key={tech} className="px-2 md:px-4 py-1 md:py-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-brand-orange font-bold text-[10px] md:text-xs cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl lg:text-5xl text-navy-950 mb-4 md:mb-6 tracking-tight">Ready to architect your scale?</h2>
        <p className="text-navy-600 mb-8 md:mb-10 text-base md:text-lg lg:text-xl font-medium">Stop worrying about technical debt and algorithm updates. Let our squad build a resilient foundation for your business.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <Link href="/contact-us" className="w-full sm:w-auto inline-flex h-12 md:h-16 px-8 md:px-12 rounded-full bg-brand-orange hover:bg-orange-600 text-white font-bold text-base md:text-lg items-center justify-center transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)] transform hover:-translate-y-1">
            Start Your Project
          </Link>
          <Link href="/services" className="w-full sm:w-auto inline-flex h-12 md:h-16 px-8 md:px-12 rounded-full bg-navy-50 hover:bg-navy-100 text-navy-900 font-bold text-base md:text-lg items-center justify-center transition-colors">
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
}
