import type { Metadata } from 'next';
import { Geist_Mono, Crimson_Text } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Body copy: Crimson Text (ZVC brand spec)
const crimsonText = Crimson_Text({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-crimson',
});

// Headlines: Bootzy Condensed (ZVC brand spec)
const bootzyCondensed = localFont({
  src: './fonts/bootzy_condensed_tm-webfont.woff2',
  variable: '--font-bootzy-condensed',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

// Labels: Bootzy, used all caps (ZVC brand spec)
const bootzy = localFont({
  src: './fonts/bootzy_tm-webfont.woff2',
  variable: '--font-bootzy',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const siteUrl = 'https://thomasherrmann.me';
const siteTitle = 'Thomas Herrmann | Senior Software Engineer, AI & Full-Stack | NYC';
const siteDescription =
  'Thomas Herrmann is a New York City senior software engineer and AI engineer (ex-Bloomberg, ex-Meta) building full-stack web apps and human-in-the-loop multi-agent LLM systems: Claude and OpenAI APIs, tool calling, RAG and LLM evals.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Thomas Herrmann',
  },
  description: siteDescription,
  applicationName: 'Thomas Herrmann',
  authors: [{ name: 'Thomas Herrmann', url: siteUrl }],
  creator: 'Thomas Herrmann',
  keywords: [
    'Thomas Herrmann',
    'Tom Herrmann',
    'AI engineer',
    'AI product engineer',
    'senior software engineer',
    'full-stack engineer',
    'AI engineer New York',
    'LLM engineer',
    'multi-agent systems',
    'AI agents',
    'human-in-the-loop',
    'Claude API',
    'OpenAI API',
    'LangGraph',
    'tool calling',
    'RAG',
    'pgvector',
    'LLM evals',
    'TypeScript',
    'React',
    'Next.js',
    'Python',
    'ex-Meta',
    'ex-Bloomberg',
    'New York City',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: siteUrl,
    siteName: 'Thomas Herrmann',
    title: siteTitle,
    description: siteDescription,
    firstName: 'Thomas',
    lastName: 'Herrmann',
    locale: 'en_US',
    images: [{ url: '/me.png', width: 1000, height: 1000, alt: 'Thomas Herrmann' }],
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
    images: ['/me.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

// Structured data so search engines can show Thomas as a person with these skills.
// Every fact here comes from resumeData.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Thomas Herrmann',
  alternateName: 'Tom Herrmann',
  url: siteUrl,
  image: `${siteUrl}/me.png`,
  jobTitle: 'Senior Software Engineer, AI & Full-Stack',
  description: siteDescription,
  email: 'mailto:tomherrmannd@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
  sameAs: ['https://www.linkedin.com/in/thomasherrmann1/', 'https://github.com/TomHerrmann'],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'SUNY Purchase' },
  hasCredential: { '@type': 'EducationalOccupationalCredential', name: 'AWS Certified Cloud Practitioner' },
  knowsAbout: [
    'AI engineering',
    'Multi-agent LLM systems',
    'Human-in-the-loop AI',
    'Claude API',
    'OpenAI API',
    'LangGraph',
    'Tool calling',
    'Structured outputs',
    'Retrieval-augmented generation (RAG)',
    'pgvector',
    'LLM evaluation',
    'Full-stack web development',
    'TypeScript',
    'React',
    'Next.js',
    'Python',
    'GraphQL',
    'Micro-frontends',
    'Web application security',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${crimsonText.variable} ${bootzyCondensed.variable} ${bootzy.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
