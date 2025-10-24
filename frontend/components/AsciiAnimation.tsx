'use client'

import { useEffect, useState } from 'react'

export default function AsciiAnimation() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 3)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // ASCII art for scholarag with hexagon pattern
  const scholaragArt = `
     _______________
    /               \\
   /   SCHOLARAG     \\
  /___________________\\
  \\                   /
   \\   RESEARCH AI   /
    \\_______________/
  `

  // Hexagon pattern that animates
  const hexagonPattern = [
    `
    *   *   *   *   *
      *   *   *   *
    *   *   *   *   *
      *   *   *   *
    *   *   *   *   *
    `,
    `
    •   •   •   •   •
      •   •   •   •
    •   •   •   •   •
      •   •   •   •
    •   •   •   •   •
    `,
    `
    ·   ·   ·   ·   ·
      ·   ·   ·   ·
    ·   ·   ·   ·   ·
      ·   ·   ·   ·
    ·   ·   ·   ·   ·
    `
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      {/* Background hexagon grid */}
      <div className="absolute inset-0 opacity-10">
        <pre className="text-foreground/20 text-xs leading-loose font-mono whitespace-pre">
          {Array(20).fill(hexagonPattern[frame]).join('\n')}
        </pre>
      </div>

      {/* Main scholarag text */}
      <div className="relative z-10">
        <pre className="text-foreground/30 text-2xl md:text-4xl font-mono font-bold whitespace-pre animate-pulse">
{`
   ___  ____ _  _ ____  _    ____ ____  ____ ____
  / __)(  __)( \\/ (  __)/ )  / __)(  _ \\(  __)( _ \\
  \\__ \\ ) _) / \\/ \\ ) _) (_ \\( __  )  / / ) _)  ) __/
  (___/(____)\\_)(_(____)\\___/)___)(__\\_)(____)(__)

                 RESEARCH  AI
`}
        </pre>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}
