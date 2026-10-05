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

export const metadata: Metadata = {
  title: 'Thomas Herrmann - NYC Software Engineer',
  description:
    "Hey, I'm Thomas Herrmann, a New York City based Software Engineer",
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
        {children}
      </body>
    </html>
  );
}
