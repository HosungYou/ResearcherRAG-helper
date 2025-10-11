import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
})

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
