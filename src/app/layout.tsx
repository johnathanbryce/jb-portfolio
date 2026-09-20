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
  title: 'John Bryce | Full Stack & AI Software Engineer',
  description: "Full stack and AI software engineer in Vancouver. Lead engineer on Caseway's AI legal research platform; builds production web applications and LLM-powered systems with Next.js, TypeScript, Python, and FastAPI.",
  keywords: 'John Bryce, full stack engineer, AI engineer, software engineer, Vancouver, Next.js, React, TypeScript, Python, FastAPI, LangChain, RAG, LLM, portfolio',
  authors: [{ name: 'John Bryce' }],
  creator: 'John Bryce',
  metadataBase: new URL('https://www.jbryce.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'John Bryce | Full Stack & AI Software Engineer',
    description: 'Full stack and AI software engineer in Vancouver. Production web applications and LLM-powered systems.',
    url: 'https://www.jbryce.dev',
    siteName: 'John Bryce Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Bryce | Full Stack & AI Software Engineer',
    description: 'Full stack and AI software engineer in Vancouver. Production web applications and LLM-powered systems.',
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
