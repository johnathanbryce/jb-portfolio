import type { Metadata } from 'next'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/vars.css';
// Content Context
import { ContentProvider } from '@/context/ContentProvider';

import { Lato } from 'next/font/google'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'John Bryce Web Development Portfolio',
  description: "Welcome to John Bryce's web development portfolio website",
  keywords: 'web development, John Bryce, software engineer, front end developer, web dev, coding, Next.js, React, CSS, HTML, development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <ContentProvider>
          {children}
        </ContentProvider>
      </body>
    </html>
  )
}
