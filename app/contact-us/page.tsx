"use client";

import Link from "next/link";
import AnonxLogo from "@/components/ui/AnonxLogo";
import { ArrowLeft, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-brand-bg font-satoshi selection:bg-brand-orange selection:text-white pb-20 overflow-hidden">
      {/* Header */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-navy-500 group-hover:-translate-x-1 transition-transform" />
            <span className="text-navy-600 font-bold text-sm">Back to Home</span>
          </Link>
          <AnonxLogo size="sm" color="dark" showText={true} hideTagline={true} />
        </div>
      </nav>

      <main className="pt-40 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Let's Connect</span>
          <h1 className="font-cabinet font-extrabold text-5xl md:text-6xl text-navy-900 tracking-tight mb-6">
            Ready to upgrade your infrastructure?
          </h1>
          <p className="text-lg text-navy-600 font-medium">
            Whether you need a dedicated development squad, a complex cloud migration, or a thorough security audit, we are ready to deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative">
          
          {/* Left Column: Contact Info & WhatsApp */}
          <div className="flex flex-col gap-8 relative z-10">
            <div className="bg-white p-8 rounded-[2rem] border border-navy-100 shadow-shadow-soft">
              <h3 className="font-cabinet font-bold text-2xl text-navy-900 mb-6">Direct Channels</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-brand-orange shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Email Us</h4>
                    <p className="text-navy-600 text-sm mb-2">Our team usually responds within 2 hours during business days.</p>
                    <a href="mailto:connect@anonx.space" className="text-brand-orange font-bold text-sm hover:underline">connect@anonx.space</a>
                  </div>
                </div>

                <div className="w-full h-px bg-navy-50"></div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-brand-orange shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-1">Headquarters</h4>
                    <p className="text-navy-600 text-sm">Operating globally, engineered for scale.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration Banner */}
            <div className="bg-navy-950 p-8 rounded-[2rem] border border-navy-900 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 blur-3xl rounded-full pointer-events-none"></div>
              <h3 className="font-cabinet font-bold text-2xl text-white mb-2 relative z-10">Need an immediate answer?</h3>
              <p className="text-navy-300 text-sm mb-8 relative z-10">Skip the email queue. Chat directly with our technical architects on WhatsApp.</p>
              
              <a 
                href="https://wa.me/917321893459?text=Hi%20AnonX,%20I'd%20like%20to%20discuss%20a%20potential%20project!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl flex items-center justify-center gap-3 font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(37,211,102,0.3)] relative z-10"
              >
                {/* SVG WhatsApp Icon */}
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="relative z-10">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-navy-100 shadow-shadow-heavy relative">
              <h2 className="font-cabinet font-bold text-3xl text-navy-900 mb-2">Send us a message</h2>
              <p className="text-navy-600 mb-8 text-sm">Fill out the form below and our team will get back to you with an architectural blueprint.</p>
              
              <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
                <input type="hidden" name="access_key" value="1807544e-3689-4845-8e8e-2a9ecd00f580" />
                
                {/* Redirect after submitting (optional) */}
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-navy-900 uppercase tracking-widest">Full Name</label>
                    <input type="text" id="name" name="name" required placeholder="John Doe" className="h-12 px-4 rounded-xl border border-navy-200 bg-brand-bg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-navy-900 uppercase tracking-widest">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="john@company.com" className="h-12 px-4 rounded-xl border border-navy-200 bg-brand-bg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-bold text-navy-900 uppercase tracking-widest">Company Name (Optional)</label>
                  <input type="text" id="company" name="company" placeholder="Acme Corp" className="h-12 px-4 rounded-xl border border-navy-200 bg-brand-bg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-navy-900 uppercase tracking-widest">Project Details</label>
                  <textarea id="message" name="message" required placeholder="Tell us about the project scope, technical constraints, or timelines..." className="h-32 p-4 rounded-xl border border-navy-200 bg-brand-bg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="h-14 mt-2 w-full rounded-xl bg-brand-orange hover:bg-orange-600 text-white font-bold text-lg flex items-center justify-center gap-2 transition-transform transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(249,115,22,0.2)] group">
                  Submit Request
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* Background design artifact */}
            <div className="absolute top-[10%] left-[10%] w-[120%] h-[120%] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          </div>

        </div>
      </main>
    </div>
  );
}
