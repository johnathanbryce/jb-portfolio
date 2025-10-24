import type { Metadata } from 'next'
import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/vars.css';
// Internal Components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
// Content Context
import { ContentProvider } from '@/context/ContentProvider';

import { K2D } from 'next/font/google'

const k2d = K2D({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'John Bryce | Full-Stack Developer Portfolio',
  description: "Full-stack developer specializing in Next.js, React, TypeScript, Python, and AI-powered applications. Browse my portfolio featuring projects like Caseway AI legal research platform, Screenshot Organizer, and Fit Friends.",
  keywords: 'full-stack developer, web development, John Bryce, software engineer, Next.js, React, TypeScript, Python, FastAPI, AI development, LLM integration, portfolio',
  authors: [{ name: 'John Bryce' }],
  creator: 'John Bryce',
  metadataBase: new URL('https://johnbryce.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'John Bryce | Full-Stack Developer Portfolio',
    description: 'Full-stack developer specializing in Next.js, React, TypeScript, Python, and AI-powered applications.',
    url: 'https://johnbryce.dev',
    siteName: 'John Bryce Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Bryce | Full-Stack Developer Portfolio',
    description: 'Full-stack developer specializing in Next.js, React, TypeScript, Python, and AI-powered applications.',
    creator: '@johnbryce',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={k2d.className}>
        <ContentProvider>
          <Header />
          {children}
          <Footer />
        </ContentProvider>
      </body>
    </html>
  )
}
