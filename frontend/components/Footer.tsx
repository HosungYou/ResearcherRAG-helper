'use client'

import Link from 'next/link'
import { useEffect } from 'react'

function AnimatedLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const linkProps = external ? {
    href,
    target: "_blank",
    rel: "noopener noreferrer"
  } : { href }

  const LinkComponent = external ? 'a' : Link

  return (
    <LinkComponent
      {...linkProps}
      className="relative text-muted hover:text-foreground transition-colors group"
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300" />
      </span>
    </LinkComponent>
  )
}

export default function Footer() {
  useEffect(() => {
    // Load Unicorn Studio script using simple embed approach
    if (typeof window !== 'undefined') {
      const existingScript = document.querySelector('script[src*="unicornStudio"]')
      if (existingScript) {
        console.log('Unicorn Studio script already loaded')
        return
      }

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.innerHTML = `
        !function(){
          if(!window.UnicornStudio){
            window.UnicornStudio={isInitialized:!1};
            var i=document.createElement("script");
            i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",
            i.onload=function(){
              window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0);
              console.log('Unicorn Studio loaded and initialized');
            },
            (document.head || document.body).appendChild(i)
          }
        }();
      `
      document.head.appendChild(script)
      console.log('Unicorn Studio embed script added')
    }
  }, [])

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            {/* Unicorn Studio ScholaRAG Logo */}
            <div
              data-us-project="OiWAusXhQeButOZI2F1h"
              style={{
                width: '320px',
                height: '180px',
              }}
            />
            <div>
              <p className="text-sm text-muted">
                Open-source research AI platform
              </p>
              <p className="text-xs text-muted mt-1">
                MIT License • Free to use and modify
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-6 text-sm text-muted">
              <AnimatedLink href="/guide">Documentation</AnimatedLink>
              <AnimatedLink href="https://github.com/HosungYou/ScholaRAG" external>
                GitHub
              </AnimatedLink>
              <AnimatedLink href="/resources">Resources</AnimatedLink>
            </div>
            <div className="text-xs text-muted text-right">
              <AnimatedLink href="https://newhosung.com" external>
                newhosung.com
              </AnimatedLink>
              {' • '}
              <AnimatedLink href="https://www.linkedin.com/in/newhosung/" external>
                LinkedIn
              </AnimatedLink>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border text-xs text-muted">
          © {new Date().getFullYear()} Hosung You. All rights reserved.
          {' • '}
          <a href="mailto:hfy5138@psu.edu" className="hover:text-foreground transition-colors">
            hfy5138@psu.edu
          </a>
        </div>
      </div>
    </footer>
  )
}

// TypeScript type definitions
declare global {
  interface Window {
    UnicornStudio?: any
  }
}
