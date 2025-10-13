'use client'

import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 1.2,
  suffix = '',
  className = ''
}: AnimatedCounterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasAnimated])

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <CountUp end={end} duration={duration} suffix={suffix} />
      ) : (
        <span>0{suffix}</span>
      )}
    </div>
  )
}
