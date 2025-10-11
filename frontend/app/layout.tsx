import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'RAG.lab - Build AI-Powered Research Assistants',
  description: 'Learn to build custom RAG systems for academic research with step-by-step guides and AI-powered assistance',
  keywords: ['RAG', 'research', 'academic', 'PRISMA', 'literature review', 'meta-analysis', 'AI assistant'],
  authors: [{ name: 'RAG.lab Contributors' }],
  openGraph: {
    title: 'RAG.lab - Research AI Platform',
    description: 'Interactive platform for building AI-powered research tools',
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
