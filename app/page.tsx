import type { Metadata } from "next";
import { ArrowRight, Smartphone, Cloud, ShieldCheck, Users, Monitor, Shield, Server, Briefcase, Zap, CheckCircle2, Globe, Activity, Code2, ArrowUpRight, Star, Quote, Bot, Search, Menu } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import AnonxLogo from "@/components/ui/AnonxLogo";
import Mock from "@/components/ui/Mock";

export const metadata: Metadata = {
  title: "Custom Software, Cloud & Cybersecurity Services | AnonX",
  description:
    "AnonX provides custom software development, cloud and DevOps solutions, cybersecurity services, and AI automation to help businesses build, scale, and secure their digital systems.",
  alternates: { canonical: "https://www.anonx.space" },
  openGraph: {
    url: "https://www.anonx.space",
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AnonX Technologies",
  url: "https://www.anonx.space",
  logo: "https://www.anonx.space/favicon.svg",
  description: "Elite software engineering agency — web apps, mobile, cloud, VAPT, SEO, and AI chatbots.",
  email: "connect@anonx.space",
  areaServed: "Worldwide",
  priceRange: "$$",
  knowsAbout: [
    "Web Development", "Mobile App Development", "Flutter", "React Native",
    "Cloud DevOps", "AWS", "Kubernetes", "Cybersecurity", "VAPT",
    "SEO Growth Engineering", "AI Chatbot Automation", "LangChain", "RAG"
  ],
  sameAs: [
    "https://www.linkedin.com/company/anonxtech",
    "https://www.anonx.space",
  ],
};


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-bg font-satoshi selection:bg-brand-orange selection:text-white pb-0 overflow-hidden">
      <Script id="schema-homepage" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <AnonxLogo size="md" color="dark" showText={true} hideTagline={false} />
          </Link>
          
          <div className="hidden md:flex items-center gap-7">
            <Link href="/services" className="text-xs font-bold text-navy-600 hover:text-navy-950 transition-colors uppercase tracking-widest">Services</Link>
            <Link href="/about-us" className="text-xs font-bold text-navy-600 hover:text-navy-950 transition-colors uppercase tracking-widest">About Us</Link>
            <Link href="#technologies" className="text-xs font-bold text-navy-600 hover:text-navy-950 transition-colors uppercase tracking-widest">Tech Stack</Link>
            <Link href="#process" className="text-xs font-bold text-navy-600 hover:text-navy-950 transition-colors uppercase tracking-widest">Process</Link>
            <Link href="/contact-us" className="text-xs font-bold text-navy-600 hover:text-navy-950 transition-colors uppercase tracking-widest">Contact Us</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact-us" className="bg-navy-950 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-brand-orange transition-colors shadow-md transform hover:-translate-y-0.5 inline-block">
              Let&apos;s Talk
            </Link>
          </div>

          <label htmlFor="mobile-menu" className="md:hidden p-2 text-navy-900 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
            <Menu className="w-6 h-6" />
          </label>
        </div>

        <input type="checkbox" id="mobile-menu" className="hidden peer" />
        
        {/* Mobile Dropdown */}
        <div className="hidden peer-checked:flex flex-col md:hidden bg-white shadow-2xl absolute top-16 left-0 w-full z-[90] border-t border-slate-100">
            <Link href="/services" className="text-sm font-bold text-navy-800 hover:text-brand-orange transition-colors uppercase tracking-widest p-5 border-b border-slate-50 flex justify-between items-center bg-white"><span className="ml-2">Services</span><ArrowRight className="w-4 h-4 opacity-50" /></Link>
            <Link href="/about-us" className="text-sm font-bold text-navy-800 hover:text-brand-orange transition-colors uppercase tracking-widest p-5 border-b border-slate-50 flex justify-between items-center bg-white"><span className="ml-2">About Us</span><ArrowRight className="w-4 h-4 opacity-50" /></Link>
            <Link href="#technologies" className="text-sm font-bold text-navy-800 hover:text-brand-orange transition-colors uppercase tracking-widest p-5 border-b border-slate-50 flex justify-between items-center bg-white"><span className="ml-2">Tech Stack</span><ArrowRight className="w-4 h-4 opacity-50" /></Link>
            <Link href="#process" className="text-sm font-bold text-navy-800 hover:text-brand-orange transition-colors uppercase tracking-widest p-5 flex justify-between items-center bg-white"><span className="ml-2">Process</span><ArrowRight className="w-4 h-4 opacity-50" /></Link>
            <div className="p-5 bg-slate-50 border-t border-slate-100">
              <Link href="/contact-us" className="bg-brand-orange text-white text-center font-bold py-4 rounded-xl shadow-md text-sm block w-full active:scale-[0.98] transition-transform">
                Start a Project With Us
              </Link>
            </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-28 overflow-hidden bg-white">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-orange-50/40 z-0"></div>

        {/* Visible grid overlay - Lines only */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        ></div>

        {/* Central radial orange glow */}
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height: "60vw",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.04) 45%, transparent 70%)",
            borderRadius: "50%",
          }}
        ></div>

        {/* Decorative corner dots — top left */}
        <div className="absolute top-16 left-16 grid grid-cols-4 gap-3 z-0 pointer-events-none opacity-20 hidden md:grid">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-navy-400 rounded-full"></div>
          ))}
        </div>

        {/* Decorative corner dots — near right edge */}
        <div className="absolute top-1/4 right-[15vw] grid grid-cols-3 gap-6 z-0 pointer-events-none opacity-20 hidden md:grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-navy-400 rounded-full"></div>
          ))}
        </div>

        {/* Top-right accent blob (soft glow) */}
        <div className="absolute top-[-5%] right-[-5%] w-[28vw] h-[28vw] bg-brand-orange/8 rounded-full blur-[80px] z-0 pointer-events-none"></div>

        {/* Bottom-left accent blob */}
        <div className="absolute bottom-[5%] left-[-5%] w-[22vw] h-[22vw] bg-navy-400/6 rounded-full blur-[60px] z-0 pointer-events-none"></div>

        {/* Horizontal accent line */}
        <div className="absolute left-0 right-0 z-0 pointer-events-none" style={{ top: "60%" }}>
          <div className="w-full h-px bg-linear-to-r from-transparent via-brand-orange/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          {/* Hidden SEO H1 — tells Google exactly what AnonX is */}
          <h1 className="sr-only">Custom Software Development, Cloud, Cybersecurity &amp; AI Solutions | AnonX Technologies</h1>
          <h1 className="font-cabinet text-[38px] sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.15] md:leading-[1.1] font-extrabold text-navy-950 tracking-tight mb-5 md:mb-6 max-w-4xl px-2">
            Modern <span className="text-brand-orange">Cloud, Web &amp; Security</span> Solutions.
          </h1>

          <p className="text-[17px] sm:text-lg md:text-xl text-navy-600 mb-8 md:mb-10 max-w-2xl font-medium leading-relaxed px-2">
            We engineer high-performance web and mobile applications, scalable cloud environments, and proactive cybersecurity to propel your business forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact-us" className="cursor-pointer group w-full sm:w-auto bg-brand-orange text-white text-base font-bold px-8 py-4 rounded-full hover:bg-navy-950 transition-all shadow-float flex items-center justify-center gap-2">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="cursor-pointer group w-full sm:w-auto bg-white border border-gray-200 text-navy-900 text-base font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section id="services" className="px-4 md:px-6 py-16 md:py-24 max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2 md:mb-3 block">What We Do</span>
          <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-navy-950 mb-3 md:mb-4 tracking-tight">Our Service Pillars</h2>
          <p className="text-navy-600 max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions designed to build, scale, and secure your enterprise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 px-0">
          {/* Card 1 */}
          <div className="group bg-white rounded-[20px] md:rounded-3xl p-4 md:p-8 border border-navy-100 shadow-shadow-soft hover:shadow-shadow-heavy transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-brand-orange/5 rounded-bl-[100px] -z-10 group-hover:scale-150 transition-transform duration-500 ease-out" />
            <div className="flex items-center gap-4 mb-4 md:mb-8">
               <div className="w-10 h-10 md:w-16 md:h-16 rounded-[12px] md:rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-brand-orange shadow-sm group-hover:-translate-y-1 transition-transform">
                <Smartphone className="w-5 h-5 md:w-8 md:h-8" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="font-cabinet font-bold text-[15px] sm:text-lg md:text-2xl text-navy-950 mb-2 md:mb-4 leading-[1.2]">
              Mobile &amp; Web<br />Development
            </h3>
            <p className="text-navy-600 md:leading-relaxed font-medium text-[11px] sm:text-xs md:text-base leading-snug">
              We specialize in cross-platform excellence (<strong className="text-navy-900">Flutter/React Native</strong>) and high-performance web apps built with modern frameworks to drive user engagement.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-[20px] md:rounded-3xl p-4 md:p-8 border border-navy-100 shadow-shadow-soft hover:shadow-shadow-heavy transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-blue-50/50 rounded-br-[100px] -z-10 group-hover:scale-150 transition-transform duration-500 ease-out" />
            <div className="flex items-center gap-4 mb-4 md:mb-8">
               <div className="w-10 h-10 md:w-16 md:h-16 rounded-[12px] md:rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:-translate-y-1 transition-transform">
                <Cloud className="w-5 h-5 md:w-8 md:h-8" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="font-cabinet font-bold text-[15px] sm:text-lg md:text-2xl text-navy-950 mb-2 md:mb-4 leading-[1.2]">
              Cloud &amp;<br />DevOps Architecture
            </h3>
            <p className="text-navy-600 md:leading-relaxed font-medium text-[11px] sm:text-xs md:text-base leading-snug">
              Architecting secure CI/CD pipelines, automated deployments, and limitlessly scalable infrastructure across AWS, Azure, and Google Cloud environments.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-[20px] md:rounded-3xl p-4 md:p-8 border border-navy-100 shadow-shadow-soft hover:shadow-shadow-heavy transition-all duration-300 relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-emerald-50/50 rounded-tl-[100px] -z-10 group-hover:scale-150 transition-transform duration-500 ease-out" />
            <div className="flex items-center gap-4 mb-4 md:mb-8">
               <div className="w-10 h-10 md:w-16 md:h-16 rounded-[12px] md:rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm group-hover:-translate-y-1 transition-transform">
                <ShieldCheck className="w-5 h-5 md:w-8 md:h-8" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="font-cabinet font-bold text-[15px] sm:text-lg md:text-2xl text-navy-950 mb-2 md:mb-4 leading-[1.2]">
              Cybersecurity<br />&amp; VAPT
            </h3>
            <p className="text-navy-600 md:leading-relaxed font-medium text-[11px] sm:text-xs md:text-base leading-snug">
              We don&apos;t just build; we harden your assets. Offering comprehensive Vulnerability Assessments and Penetration Testing to secure against modern threats.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white rounded-[20px] md:rounded-3xl p-4 md:p-8 border border-navy-100 shadow-shadow-soft hover:shadow-shadow-heavy transition-all duration-300 relative overflow-hidden">
             <div className="absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-indigo-50/50 rounded-tr-[100px] -z-10 group-hover:scale-150 transition-transform duration-500 ease-out" />
            <div className="flex items-center gap-4 mb-4 md:mb-8">
               <div className="w-10 h-10 md:w-16 md:h-16 rounded-[12px] md:rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm group-hover:-translate-y-1 transition-transform">
                <Users className="w-5 h-5 md:w-8 md:h-8" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="font-cabinet font-bold text-[15px] sm:text-lg md:text-2xl text-navy-950 mb-2 md:mb-4 leading-[1.2]">
              Dedicated Team<br />&amp; Squads
            </h3>
            <p className="text-navy-600 md:leading-relaxed font-medium text-[11px] sm:text-xs md:text-base leading-snug">
              Flexible engagement models for startups and enterprises. Instantly scale your software engineering capabilities with our niche expertise and dedicated talent.
            </p>
          </div>

          {/* Card 5 */}
          <div className="group bg-white rounded-[20px] md:rounded-3xl p-4 md:p-8 border border-navy-100 shadow-shadow-soft hover:shadow-shadow-heavy transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-yellow-50/50 rounded-bl-[100px] -z-10 group-hover:scale-150 transition-transform duration-500 ease-out" />
            <div className="flex items-center gap-4 mb-4 md:mb-8">
               <div className="w-10 h-10 md:w-16 md:h-16 rounded-[12px] md:rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center text-yellow-600 shadow-sm group-hover:-translate-y-1 transition-transform">
                <Search className="w-5 h-5 md:w-8 md:h-8" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="font-cabinet font-bold text-[15px] sm:text-lg md:text-2xl text-navy-950 mb-2 md:mb-4 leading-[1.2]">
              SEO &amp;<br />Growth Data
            </h3>
            <p className="text-navy-600 md:leading-relaxed font-medium text-[11px] sm:text-xs md:text-base leading-snug">
              Programmatic SEO, performance optimization, and rigorous technical audits mapping directly to aggressive organic visibility.
            </p>
          </div>

          {/* Card 6 */}
          <div className="group bg-white rounded-[20px] md:rounded-3xl p-4 md:p-8 border border-navy-100 shadow-shadow-soft hover:shadow-shadow-heavy transition-all duration-300 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-purple-50/50 rounded-br-[100px] -z-10 group-hover:scale-150 transition-transform duration-500 ease-out" />
            <div className="flex items-center gap-4 mb-4 md:mb-8">
               <div className="w-10 h-10 md:w-16 md:h-16 rounded-[12px] md:rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-sm group-hover:-translate-y-1 transition-transform">
                <Bot className="w-5 h-5 md:w-8 md:h-8" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="font-cabinet font-bold text-[15px] sm:text-lg md:text-2xl text-navy-950 mb-2 md:mb-4 leading-[1.2]">
              AI &amp; Chatbot<br />Automation
            </h3>
            <p className="text-navy-600 md:leading-relaxed font-medium text-[11px] sm:text-xs md:text-base leading-snug">
              Deploying intelligent conversational interfaces. From advanced context-aware RAG agents to strict deterministic enterprise workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ── Technologies & Capabilities ── */}
      <section id="technologies" className="bg-navy-950 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-brand-orange/10 rounded-full blur-[100px] z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-16">
            <div>
               <span className="text-brand-orange font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2 md:mb-3 block">Technologies</span>
               <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-white mb-4 md:mb-6 tracking-tight">An Unlimited Technology Stack.</h2>
               <p className="text-navy-300 text-lg mb-8 leading-relaxed max-w-lg">
                 We never limit our clients to a single stack. Our engineering capabilities span the entire modern landscape, allowing us to select the absolute perfect tool for your specific business constraints and scale vectors.
               </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { name: "High Performance", icon: <Zap className="w-6 h-6 text-yellow-500" /> },
                 { name: "Scalable Systems", icon: <Server className="w-6 h-6 text-blue-500" /> },
                 { name: "Secure by Design", icon: <Shield className="w-6 h-6 text-emerald-500" /> },
                 { name: "Cross Platform", icon: <Monitor className="w-6 h-6 text-indigo-500" /> }
               ].map((feature, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-3 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <span className="text-white font-bold text-sm">{feature.name}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 overflow-hidden relative">
            <h3 className="text-white font-bold mb-8 text-sm uppercase tracking-widest px-6 lg:px-0">Core Proficiencies</h3>
            
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none mt-14"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none mt-14"></div>

            <div className="flex flex-col gap-5">
              {/* Row 1 */}
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex gap-5 px-2.5">
                    {[
                      'React', 'Next.js', 'Vue.js', 'Nuxt', 'Angular', 'SvelteKit', 'Tailwind CSS', 'TypeScript', 
                      'Node.js', 'Python', 'FastAPI', 'Django', 'Java', 'Spring Boot', 'Go (Golang)', 'PHP', 'Laravel', '.NET Core', 
                      'GraphQL', 'REST API', 'gRPC', 'WebSockets', 
                      'Flutter', 'React Native'
                    ].map(tech => (
                      <span key={`${index}-${tech}`} className="inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-brand-orange/20 hover:text-brand-orange border border-white/10 hover:border-brand-orange/30 rounded-full text-navy-200 font-medium text-sm transition-colors cursor-default whitespace-nowrap">
                        {tech}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex gap-5 px-2.5">
                    {[
                      'Swift (iOS)', 'Kotlin (Android)', 'Ionic', 
                      'AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines', 
                      'PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch', 
                      'Programmatic SEO', 'Core Web Vitals', 'Technical Audits', 
                      'VAPT Tools', 'Zero-Trust Architecture', 
                      'LLMs', 'RAG Custom Agents', 'LangChain'
                    ].map(tech => (
                      <span key={`${index}-${tech}`} className="inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-blue-500/20 hover:text-blue-400 border border-white/10 hover:border-blue-500/30 rounded-full text-navy-200 font-medium text-sm transition-colors cursor-default whitespace-nowrap">
                        {tech}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process / Engagement Model ── */}
      <section id="process" className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Engagement</span>
          <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-navy-950 mb-4 tracking-tight">How We Partner Together</h2>
          <p className="text-navy-600 max-w-2xl mx-auto text-lg">
            A seamless integration process designed to understand your goals, execute with precision, and deliver lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-[20%] left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>
          
          {[
            { step: "01", title: "Discovery", desc: "We analyze your business needs, technical constraints, and long-term objectives." },
            { step: "02", title: "Architecture & Strategy", desc: "We formulate an actionable roadmap and robust technical architecture for the project." },
            { step: "03", title: "Execution & Delivery", desc: "Our squads build, test, and deploy using iterative agile methodologies." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-navy-100 shadow-shadow-soft relative z-10 text-center flex flex-col items-center">
               <div className="w-12 h-12 bg-navy-950 text-brand-orange rounded-xl flex items-center justify-center font-cabinet font-bold text-xl mb-6 shadow-md border border-white/10">
                 {item.step}
               </div>
               <h3 className="font-cabinet font-bold text-2xl text-navy-950 mb-3">{item.title}</h3>
               <p className="text-navy-600 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Impact & Scale (Stats) ── */}
      <section className="bg-navy-950 py-16 relative overflow-hidden border-y sm:border sm:border-white/5 mx-0 sm:mx-6 lg:mx-8 sm:rounded-3xl mb-24">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-4 md:divide-x divide-white/10">
            {[
              { value: "50+", label: "Global Enterprises", icon: <Globe className="w-5 h-5 text-blue-400" /> },
              { value: "99.9%", label: "Systems Uptime", icon: <Activity className="w-5 h-5 text-emerald-400" /> },
              { value: "10M+", label: "Users Reached", icon: <Users className="w-5 h-5 text-brand-orange" /> },
              { value: "40+", label: "Tech Experts", icon: <Code2 className="w-5 h-5 text-indigo-400" /> }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center pt-8 md:pt-0 pb-4 md:pb-0 px-4">
                <div className="bg-white/5 p-3 rounded-xl mb-4 border border-white/10 shadow-[inset_0_1px_rgba(255,255,255,0.1)]">
                  {stat.icon}
                </div>
                <h3 className="font-cabinet font-extrabold text-4xl text-white tracking-tight mb-2">{stat.value}</h3>
                <p className="text-navy-300 font-medium text-sm lg:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work (Case Studies) ── */}
      <section id="work" className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-10 md:mb-16 text-center md:text-left">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Selected Portfolio</span>
          <h2 className="font-cabinet font-extrabold text-3xl md:text-4xl text-navy-950 tracking-tight">Our Recent Impact</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Project 1 */}
          <Link href="https://aisocialstudio.online" target="_blank" rel="noopener noreferrer" className="group rounded-3xl md:rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-200 relative h-[320px] sm:h-auto sm:min-h-0 sm:aspect-[4/3] lg:aspect-square flex flex-col cursor-pointer isolation-auto shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Conceptual Image / Visual Area */}
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-end justify-center relative overflow-hidden px-4 sm:px-8 pt-8 md:pt-10 pb-0">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
               
               {/* Browser Window Frame */}
               <div className="w-[105%] sm:w-[90%] md:w-[85%] lg:w-[90%] max-w-2xl bg-slate-800 rounded-t-xl md:rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)] border-t-[6px] md:border-t-8 border-x-[6px] md:border-x-8 border-slate-800 relative transform translate-y-4 group-hover:translate-y-0 group-hover:scale-[1.02] origin-bottom transition-all duration-700 ease-out z-10 flex flex-col overflow-hidden">
                 
                 {/* Top Window Bar */}
                 <div className="h-6 sm:h-8 bg-slate-900 w-full flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">
                   <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-700"></div>
                   <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-700"></div>
                   <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-700"></div>
                 </div>
                 
                 {/* The Screen Area */}
                 <div className="relative w-full aspect-video bg-navy-950 overflow-hidden">
                    <img src="/studio-mockup.png" alt="AI Social Studio Platform" className="absolute top-0 left-0 w-full h-full object-cover object-top" />
                 </div>
               </div>
            </div>
            {/* Project Details */}
            <div className="p-6 md:p-8 bg-white border-t border-slate-100 relative z-10 shrink-0">
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <div>
                  <h3 className="font-cabinet font-bold text-xl md:text-2xl text-navy-950 mb-1.5 md:mb-2">AI Social Studio</h3>
                  <p className="text-navy-600 font-medium text-sm md:text-base">B2B SaaS Content Platform</p>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-navy-50 flex items-center justify-center text-navy-900 group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
              <div className="flex gap-2 text-xs font-bold text-navy-500">
                <span className="px-3 py-1 bg-slate-100 rounded-md">Next.js</span>
                <span className="px-3 py-1 bg-slate-100 rounded-md">OpenAI</span>
                <span className="px-3 py-1 bg-slate-100 rounded-md">Python</span>
              </div>
            </div>
          </Link>

          {/* Project 2: LMS Mock */}
          <Link href="https://lms.anonx.space" target="_blank" rel="noopener noreferrer" className="group rounded-3xl md:rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-200 relative h-[320px] sm:h-auto sm:min-h-0 sm:aspect-[4/3] lg:aspect-square flex flex-col cursor-pointer isolation-auto shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Conceptual Image / Visual Area */}
            <div className="flex-1 bg-gradient-to-t from-gray-200/50 to-orange-50 flex items-end justify-center relative overflow-hidden px-2 md:px-8 pt-8 lg:pt-10">
               <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-navy-900/10 to-transparent pointer-events-none z-10"></div>
               {/* Embed Mock UI via a scaled wrap so it doesn't overflow */}
               <div className="transform translate-y-4 group-hover:translate-y-0 scale-[0.55] md:scale-[0.6] lg:scale-[0.65] origin-bottom transition-all duration-700 ease-out w-full flex justify-center pb-0 z-0">
                 <Mock />
               </div>
            </div>
            {/* Project Details */}
            <div className="p-6 md:p-8 bg-white border-t border-slate-100 relative z-10 shrink-0">
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <div>
                  <h3 className="font-cabinet font-bold text-xl md:text-2xl text-navy-950 mb-1.5 md:mb-2">AnonX LMS Academy</h3>
                  <p className="text-navy-600 font-medium text-sm md:text-base">B2B SaaS Learning Platform</p>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-navy-50 flex items-center justify-center text-navy-900 group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-navy-500">
                <span className="px-3 py-1 bg-slate-100 rounded-md">Next.js 15</span>
                <span className="px-3 py-1 bg-slate-100 rounded-md">TailwindCSS</span>
                <span className="px-3 py-1 bg-slate-100 rounded-md">React Native</span>
              </div>
            </div>
          </Link>
        </div>
      </section>


      {/* ── Final CTA ── */}
      <section className="relative py-16 md:py-28 overflow-hidden mx-4 sm:mx-6 lg:mx-8 my-10 md:my-20 rounded-[2rem] md:rounded-[3rem] bg-navy-950 text-center flex flex-col items-center justify-center border border-white/10 shadow-2xl">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-orange/10 rounded-[100%] blur-[120px] pointer-events-none"></div>
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255,102,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            backgroundPosition: "center center"
          }}
        ></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cabinet font-extrabold mb-4 md:mb-6 tracking-tight leading-tight">
            Ready to transform your vision into reality?
          </h2>
          <p className="text-navy-300 text-lg md:text-xl font-medium mb-10 max-w-xl mx-auto">
            Book a free capability deep-dive with our technical architects and discover how we can scale your engineering velocity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact-us" className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-brand-orange hover:bg-orange-500 text-white font-bold text-lg transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(249,115,22,0.3)] w-full sm:w-auto">
              Start Your Project
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-lg transition-colors backdrop-blur-sm w-full sm:w-auto">
              View Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative bg-navy-950 text-navy-300 py-16 lg:py-20 overflow-hidden border-t border-navy-900">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/3 rounded-full blur-3xl"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(255,102,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,0.02) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <AnonxLogo size="lg" color="light" showText={false} />
                <div className="flex flex-col">
                  <span className="font-cabinet font-extrabold text-2xl tracking-tight text-white block">AnonX</span>
                  <span className="text-xs font-bold bg-gradient-to-r from-brand-orange to-orange-500 bg-clip-text text-transparent">BUILD SCALE SECURE</span>
                </div>
              </Link>
              
              <p className="text-sm leading-relaxed text-navy-300 mb-8 max-w-sm font-medium">
                We engineer high-performance web and mobile applications, scalable cloud environments, and proactive cybersecurity to propel your business forward.
              </p>

              <div className="mb-8">
                <p className="text-xs font-bold text-white uppercase tracking-widest mb-3">Stay Updated</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 text-sm bg-navy-900 border border-navy-800 rounded-lg px-4 py-3 sm:py-2.5 text-white placeholder-navy-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30 transition-all w-full sm:max-w-[240px]"
                  />
                  <button className="bg-brand-orange hover:bg-orange-500 text-white font-bold px-6 py-3 sm:py-2.5 rounded-lg transition-all duration-300 transform sm:hover:scale-105 active:scale-95 w-full sm:w-auto">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-extrabold mb-6 tracking-widest uppercase text-xs">Services</h4>
              <ul className="space-y-3">
                <li><Link href="/services" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold">Mobile App Dev</Link></li>
                <li><Link href="/services" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold">Web Development</Link></li>
                <li><Link href="/services" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold">Cloud & DevOps</Link></li>
                <li><Link href="/services" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold">Cybersecurity VAPT</Link></li>
                <li><Link href="/services" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold">AI & Chatbots</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-extrabold mb-6 tracking-widest uppercase text-xs">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about-us" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold">About Us</Link></li>
                <li><Link href="/contact-us" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold">Contact Us</Link></li>
                <li><Link href="/#" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold">Careers</Link></li>
                <li><Link href="/#work" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold">Case Studies</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-extrabold mb-6 tracking-widest uppercase text-xs">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/terms-of-service" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold">Terms of Service</Link></li>
                <li><Link href="/privacy-policy" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold">Privacy Policy</Link></li>
                <li><Link href="/#" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold">Security</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-navy-800 my-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <p className="font-semibold text-navy-400 text-xs">© 2026 AnonX Technologies. All rights reserved.</p>
              <div className="hidden sm:block w-px h-4 bg-navy-800"></div>
              <p className="font-semibold text-navy-400 text-xs">Engineered for Excellence</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

