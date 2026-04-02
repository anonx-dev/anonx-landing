import Link from "next/link";
import AnonxLogo from "@/components/ui/AnonxLogo";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          <h1 className="font-cabinet font-extrabold text-4xl md:text-5xl text-navy-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-navy-500">Last Updated: April 2, 2026</p>
        </div>

        <article className="prose prose-slate prose-headings:font-cabinet prose-headings:text-navy-900 prose-headings:font-bold prose-p:text-navy-600 prose-a:text-brand-orange max-w-none">
          <h3>1. Introduction</h3>
          <p>
            Welcome to AnonX Technologies. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>

          <h3>2. The Data We Collect</h3>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
          </ul>

          <h3>3. How We Use Your Data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you, where it is necessary for our legitimate interests (or those of a third party), or where we need to comply with a legal obligation.
          </p>

          <h3>4. Data Security</h3>
          <p>
            As a technology services firm specializing in VAPT and Cybersecurity, we prioritize the secure handling of your data. We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
          </p>

          <h3>5. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@anonx.technology.
          </p>
        </article>
      </main>
    </div>
  );
}
