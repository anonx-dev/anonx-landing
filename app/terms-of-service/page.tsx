import Link from "next/link";
import AnonxLogo from "@/components/ui/AnonxLogo";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-brand-bg font-satoshi selection:bg-brand-orange selection:text-white pb-20">
      {/* Simple Header */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-navy-500 group-hover:-translate-x-1 transition-transform" />
            <span className="text-navy-600 font-bold text-sm">Back to Home</span>
          </Link>
          <AnonxLogo size="sm" color="dark" showText={true} hideTagline={true} />
        </div>
      </nav>

      {/* Content Area */}
      <main className="pt-40 px-6 max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">Legal Updates</span>
          <h1 className="font-cabinet font-extrabold text-4xl md:text-5xl text-navy-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-navy-500">Last Updated: April 2, 2026</p>
        </div>

        <article className="prose prose-slate prose-headings:font-cabinet prose-headings:text-navy-900 prose-headings:font-bold prose-p:text-navy-600 prose-a:text-brand-orange max-w-none">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By assessing or using the web development, cloud integration, or cybersecurity advisory services provided by AnonX Technologies ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
          </p>

          <h3>2. Scope of Services</h3>
          <p>
            AnonX provides technology services including, but not limited to, custom software development, mobile application development, cloud architecture orchestration, DevOps pipeline creation, and Vulnerability Assessment and Penetration Testing (VAPT). Specific deliverables will be outlined in individualized Statements of Work (SOW) per client.
          </p>

          <h3>3. Intellectual Property Rights</h3>
          <p>
            Unless explicitly transferred under a specific Statement of Work, all preexisting methodologies, codes, scripts, and software tools belonging to AnonX remain the exclusive property of AnonX. Client-specific customized deliverables become the property of the client upon receipt of final payment, subject to the inclusion of open-source or proprietary framework licenses.
          </p>

          <h3>4. Client Responsibilities</h3>
          <p>
            Clients must provide timely feedback, necessary credentials, and access to systems required for AnonX to fulfill obligations. AnonX is not responsible for delays caused by client inaction. In the context of VAPT services, the client must ensure explicit authorization to test target assets.
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            In no event shall AnonX Technologies, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your access to or use of our services.
          </p>
        </article>
      </main>
    </div>
  );
}
