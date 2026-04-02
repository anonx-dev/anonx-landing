import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const BASE_URL = "https://www.anonx.space";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Custom Software, Cloud & Cybersecurity Services | AnonX",
    template: "%s | AnonX",
  },
  description:
    "AnonX provides custom software development, cloud and DevOps solutions, cybersecurity services, and AI automation to help businesses build, scale, and secure their digital systems.",
  keywords: [
    "AnonX",
    "AnonX Technologies",
    "custom software development",
    "software development company",
    "cloud and DevOps services",
    "cybersecurity services for business",
    "IT solutions company",
    "technology consulting services",
    "AI development services",
    "digital engineering partner",
    "technology solutions agency",
    "mobile app development",
    "Flutter development",
    "React Native agency",
    "cybersecurity VAPT",
    "penetration testing services",
    "AWS DevOps agency",
    "AI chatbot development",
    "custom software development services",
    "enterprise software solutions",
    "technology partner for business",
  ],
  authors: [{ name: "AnonX Technologies", url: BASE_URL }],
  creator: "AnonX Technologies",
  publisher: "AnonX Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "AnonX",
    title: "Custom Software, Cloud & Cybersecurity Services | AnonX",
    description:
      "AnonX is a technology solutions agency delivering custom software development, cloud infrastructure, cybersecurity, and AI automation for businesses worldwide.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AnonX Technologies – Build. Scale. Secure.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software, Cloud & Cybersecurity Services | AnonX",
    description:
      "AnonX — your technology partner for custom software, cloud infrastructure, cybersecurity, and AI solutions.",
    images: [`${BASE_URL}/og-image.png`],
    creator: "@anonxtech",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "AnonX Technologies",
  alternateName: ["AnonX", "AnonX Tech"],
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/favicon.svg`,
    contentUrl: `${BASE_URL}/favicon.svg`,
  },
  description:
    "AnonX is a technology solutions agency offering custom software development, cloud & DevOps, cybersecurity (VAPT), AI chatbot automation, and SEO growth engineering for businesses worldwide.",
  email: "connect@anonx.space",
  foundingDate: "2022",
  areaServed: "Worldwide",
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "Cloud & DevOps",
    "Cybersecurity VAPT",
    "SEO & Growth Engineering",
    "AI & Chatbot Automation",
  ],
  sameAs: [
    "https://www.linkedin.com/company/anonxtech",
    "https://twitter.com/anonxtech",
    "https://www.anonx.space",
    "https://www.anonx.space",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "AnonX Technologies",
  description:
    "Build. Scale. Secure. — Full-stack software engineering agency.",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const siteLinksSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "AnonX Technologies – Web, Mobile & Cloud Engineering Agency",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
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
        {/* Canonical & Alternate URLs */}
        <link rel="canonical" href={BASE_URL} />
        <link rel="alternate" href={BASE_URL} hrefLang="en" />
        {/* Explicit robots tag — belt-and-suspenders enforcement */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* JSON-LD: Organization */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* JSON-LD: WebSite */}
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* JSON-LD: WebPage (triggers Sitelinks) */}
        <Script
          id="schema-webpage"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLinksSchema) }}
        />
      </head>
      <body className="bg-brand-bg text-navy-900 font-satoshi antialiased selection:bg-brand-orange selection:text-white overflow-x-hidden relative min-h-screen">
        {children}
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

