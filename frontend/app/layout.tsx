import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ResearcherRAG Helper - Interactive Documentation & Chatbot',
  description: 'Learn to build custom RAG systems for academic research with step-by-step guides and AI-powered assistance',
  keywords: ['RAG', 'research', 'academic', 'PRISMA', 'literature review', 'meta-analysis'],
  authors: [{ name: 'ResearcherRAG Contributors' }],
  openGraph: {
    title: 'ResearcherRAG Helper',
    description: 'Interactive platform for learning ResearcherRAG',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
