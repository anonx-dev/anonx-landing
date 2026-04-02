import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnonX | Elevate Your Digital Infrastructure",
  description: "AnonX provides top-tier tech solutions including Web & Mobile Development, Cloud & DevOps, Cybersecurity & VAPT, and Dedicated Tech Squads for enterprises.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "AnonX | High-Performance Tech Services",
    description: "Transforming businesses with custom apps, secure cloud infrastructure, and dedicated expert squads.",
    url: "https://anonx.com",
    siteName: "AnonX Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700,400&f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
        {/* SEO Organization Schema */}
        <Script
          id="seo-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AnonX Technologies",
              "url": "https://anonx.com",
              "logo": "https://anonx.com/favicon.svg",
              "description": "AnonX provides high-performance tech services including Mobile & Web Development, Cloud & DevOps architecture, Cybersecurity hardening, and Dedicated engineering squads.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-5555",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://www.linkedin.com/company/anonx",
                "https://twitter.com/anonx"
              ]
            })
          }}
        />
      </head>
      <body className="bg-brand-bg text-navy-900 font-satoshi antialiased selection:bg-brand-orange selection:text-white overflow-x-hidden relative min-h-screen">
        {children}
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
