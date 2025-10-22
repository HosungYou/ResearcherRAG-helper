import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'ScholaRAG - Build Custom RAG Systems for Academic Literature Review',
  description: 'An open-source framework for building custom RAG (Retrieval-Augmented Generation) systems for academic literature review. From research papers to systematic insights in hours, not weeks.',
  keywords: ['RAG', 'research', 'academic', 'PRISMA', 'literature review', 'meta-analysis', 'AI assistant', 'ScholaRAG', 'retrieval augmented generation'],
  authors: [{ name: 'ScholaRAG Contributors' }],
  openGraph: {
    title: 'ScholaRAG - Build Custom RAG Systems for Academic Literature Review',
    description: 'An open-source framework for building custom RAG systems for academic literature review',
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
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
