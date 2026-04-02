import type { Metadata } from "next";
import Link from "next/link";
import AnonxLogo from "@/components/ui/AnonxLogo";
import { ArrowLeft, Target, Shield, Zap, Globe, Code2, LineChart, Cpu, Search, Layers, Server, Monitor, Smartphone, Cloud } from "lucide-react";

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
      {/* Simple Header */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-navy-500 group-hover:-translate-x-1 transition-transform" />
            <span className="text-navy-600 font-bold text-sm">Back to Home</span>
          </Link>
          <AnonxLogo size="sm" color="dark" showText={true} hideTagline={true} />
        </div>
      </nav>

      {/* ── Enhanced Hero & Metrics ── */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 px-6 max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Background Visuals */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-orange/5 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: "radial-gradient(rgba(15,23,42,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

        <span className="inline-block px-4 py-1.5 rounded-full bg-navy-50 border border-navy-100 text-brand-orange font-bold uppercase tracking-widest text-xs mb-6 shadow-sm">
          Who We Are
        </span>
        <h1 className="font-cabinet font-extrabold text-5xl sm:text-6xl md:text-7xl text-navy-950 tracking-tight mb-8 max-w-5xl leading-[1.05]">
          Engineering the <span className="text-brand-orange relative">Future<svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-orange/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></span>, <br className="hidden sm:block" />
          Scaling the Impossible.
        </h1>
        <p className="text-lg md:text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed font-medium mb-16">
          AnonX Technologies operates as an elite, decentralized collective of software architects, cloud engineers, and growth specialists. We are the stealth force behind high-growth startups and scaled enterprises.
        </p>

        {/* Floating Metrics Bar */}
        <div className="w-full max-w-5xl bg-navy-950 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[60px] rounded-full pointer-events-none"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { label: "Projects Delivered", value: "250+" },
              { label: "Global Presence", value: "Worldwide" },
              { label: "Uptime Engineered", value: "99.9%" },
              { label: "Security Breaches", value: "Zero" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center pt-8 md:pt-0 pb-4 md:pb-0">
                <h3 className="font-cabinet font-extrabold text-4xl lg:text-5xl text-white mb-2">{stat.value}</h3>
                <p className="text-navy-300 font-medium text-sm tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Origin Narrative ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-navy-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-cabinet font-extrabold text-4xl md:text-5xl text-navy-950 mb-6 tracking-tight">Our Mission.</h2>
            <div className="space-y-6 text-lg text-navy-600 leading-relaxed font-medium">
              <p>
                AnonX was founded to bridge the gap between visionary ideas and flawless technical execution. We realized that traditional agencies were too slow, too rigid, and often siloed expertise.
              </p>
              <p>
                We built a different kind of firm. An anonymous, highly capable 'X-factor' that completely integrates with client goals. We don&apos;t just write code; we engineer comprehensive digital ecosystems — from deploying sub-millisecond <Link href="/services" className="text-brand-orange font-bold hover:underline">cloud backends</Link> to executing aggressive <Link href="/services" className="text-brand-orange font-bold hover:underline">technical SEO campaigns</Link> that dominate search rankings.
              </p>
              <p>
                When you partner with AnonX, you aren&apos;t hiring a vendor. You are acquiring an entire technical department dedicated exclusively to your scale.
              </p>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-navy-50 to-orange-50 border border-navy-100 p-8 flex flex-col justify-center gap-6 relative overflow-hidden shadow-shadow-soft">
                {/* Decorative Abstract Tech Elements */}
                <div className="w-full h-16 bg-white/60 backdrop-blur-sm rounded-2xl border border-white shrink-0 shadow-sm flex items-center px-6">
                  <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div><div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div><div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex gap-6 w-full h-32">
                  <div className="w-1/3 bg-brand-orange/10 rounded-2xl border border-brand-orange/20 animate-pulse"></div>
                  <div className="flex-1 bg-navy-900 rounded-2xl shadow-lg relative overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-orange"></div>
                  </div>
                </div>
                <div className="w-full flex-1 bg-white/60 backdrop-blur-sm rounded-2xl border border-white shadow-sm flex items-center justify-center">
                  <Code2 className="w-10 h-10 text-navy-200" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Engineering & Growth Philosophy ── */}
      <section className="py-24 bg-navy-50 border-t border-navy-100">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Methodology</span>
              <h2 className="font-cabinet font-extrabold text-4xl text-navy-950 mb-4 tracking-tight">How We Dominate</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layers className="w-8 h-8" />,
                  title: "Full-Stack Mastery",
                  desc: "We build natively and dynamically across every layer. Fluid front-ends, impenetrable APIs, and highly durable database architectures ensuring completely seamless data flow."
                },
                {
                  icon: <Search className="w-8 h-8" />,
                  title: "Advanced SEO & Growth",
                  desc: "Building a great app isn't enough if nobody finds it. We integrate deep programmatic SEO, server-side rendering, and performance optimizations out-of-the-gate to guarantee maximum visibility."
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Zero-Trust Security",
                  desc: "Rooted in VAPT, our philosophy dictates that no component is trusted by default. Every system is rigorously penetration-tested and hardened before it ever touches production."
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Agile Velocity",
                  desc: "We deploy CI/CD pipelines that allow for multiple safe shipments per day. Iterating quickly based on real-time data rather than assumptions."
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Cloud Agnostic Scale",
                  desc: "Whether AWS, GCP, or Azure, we orchestrate infrastructure that autonomously scales to meet traffic spikes without wasting idle budget."
                },
                {
                  icon: <LineChart className="w-8 h-8" />,
                  title: "Data-Driven Intelligence",
                  desc: "We implement rigorous analytics architectures to track precisely how systems respond and how users convert, driving every business decision."
                }
              ].map((val, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-navy-100 hover:border-brand-orange/30 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-bg flex items-center justify-center text-navy-900 group-hover:bg-brand-orange group-hover:text-white transition-colors mb-6 shadow-sm">
                    {val.icon}
                  </div>
                  <h3 className="font-cabinet font-bold text-2xl text-navy-950 mb-3">{val.title}</h3>
                  <p className="text-navy-600 leading-relaxed font-medium text-sm">{val.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* ── Comprehensive Technology Ecosystem ── */}
      <section className="py-32 bg-navy-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="font-cabinet font-extrabold text-4xl text-white mb-6 tracking-tight">An Unlimited Technology Ecosystem.</h2>
            <p className="text-navy-300 text-lg leading-relaxed">
              We never limit our clients to a single stack. Our engineering capabilities span the entire modern landscape, allowing us to select the absolute perfect tool for your specific business constraints and scale vectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
             {/* Frontend */}
             <div>
               <div className="flex items-center gap-3 mb-6">
                 <Monitor className="w-6 h-6 text-brand-orange" />
                 <h3 className="font-bold text-white text-xl">Frontend & UI</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {['React', 'Next.js', 'Vue.js', 'Nuxt', 'Angular', 'SvelteKit', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'WebSockets', 'HTML5/CSS3'].map(tech => (
                   <span key={tech} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-navy-200 font-medium text-xs transition-colors cursor-default">
                     {tech}
                   </span>
                 ))}
               </div>
             </div>

             {/* Backend */}
             <div>
               <div className="flex items-center gap-3 mb-6">
                 <Server className="w-6 h-6 text-blue-400" />
                 <h3 className="font-bold text-white text-xl">Backend & API</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {['Node.js', 'Python', 'Django', 'FastAPI', 'Java', 'Spring Boot', 'Go (Golang)', 'Ruby on Rails', 'PHP', 'Laravel', '.NET Core', 'GraphQL', 'REST', 'gRPC'].map(tech => (
                   <span key={tech} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-navy-200 font-medium text-xs transition-colors cursor-default">
                     {tech}
                   </span>
                 ))}
               </div>
             </div>

             {/* Mobile Apps */}
             <div>
               <div className="flex items-center gap-3 mb-6">
                 <Smartphone className="w-6 h-6 text-emerald-400" />
                 <h3 className="font-bold text-white text-xl">Mobile Dev</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {['Flutter', 'React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Objective-C', 'Java (Android)', 'Ionic', 'Capacitor', 'PWA'].map(tech => (
                   <span key={tech} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-navy-200 font-medium text-xs transition-colors cursor-default">
                     {tech}
                   </span>
                 ))}
               </div>
             </div>

             {/* Cloud, DB & Security */}
             <div>
               <div className="flex items-center gap-3 mb-6">
                 <Cloud className="w-6 h-6 text-indigo-400" />
                 <h3 className="font-bold text-white text-xl">Cloud, DB & Sec</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch', 'VAPT Tools', 'OWASP Sec', 'CI/CD Pipelines'].map(tech => (
                   <span key={tech} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-navy-200 font-medium text-xs transition-colors cursor-default">
                     {tech}
                   </span>
                 ))}
               </div>
             </div>

             {/* SEO & Data */}
             <div className="col-span-1 lg:col-span-4 mt-8 pt-8 border-t border-white/10">
               <div className="flex items-center justify-center gap-3 mb-6">
                 <LineChart className="w-6 h-6 text-yellow-400" />
                 <h3 className="font-bold text-white text-xl text-center">Marketing, SEO & Growth Stack</h3>
               </div>
               <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                 {['Technical SEO Audits', 'Programmatic SEO', 'Server-Side Rendering', 'Core Web Vitals Optimization', 'Schema Markup', 'Google Analytics 4', 'A/B Testing Frameworks', 'Conversion Rate Optimization (CRO)', 'Headless CMS', 'Content Deliver Networks (CDN)'].map(tech => (
                   <span key={tech} className="px-4 py-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-brand-orange font-bold text-xs cursor-default">
                     {tech}
                   </span>
                 ))}
               </div>
             </div>
          </div>

        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-32 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-cabinet font-extrabold text-4xl md:text-5xl text-navy-950 mb-6 tracking-tight">Ready to architect your scale?</h2>
        <p className="text-navy-600 mb-10 text-lg md:text-xl font-medium">Stop worrying about technical debt and algorithm updates. Let our squad build a resilient foundation for your business.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact-us" className="inline-flex h-16 px-12 rounded-full bg-brand-orange hover:bg-orange-600 text-white font-bold text-lg items-center transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)] transform hover:-translate-y-1">
            Start Your Project
          </Link>
          <Link href="/services" className="inline-flex h-16 px-12 rounded-full bg-navy-50 hover:bg-navy-100 text-navy-900 font-bold text-lg items-center transition-colors">
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
}

