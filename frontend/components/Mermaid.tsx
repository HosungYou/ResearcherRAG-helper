'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidProps {
  chart: string
  className?: string
  scale?: number
}

export default function Mermaid({ chart, className = '', scale = 1 }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      securityLevel: 'loose',
      fontFamily: 'var(--font-geist-sans)',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      }
    })

    if (ref.current) {
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
      ref.current.innerHTML = `<div class="mermaid" id="${id}">${chart}</div>`
      mermaid.contentLoaded()
    }
  }, [chart])

  return (
    <div
      ref={ref}
      className={`my-8 flex justify-center overflow-x-auto ${className}`}
      style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
    />
  )
}
