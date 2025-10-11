import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
