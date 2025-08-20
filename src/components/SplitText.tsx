'use client'

import { animate, stagger } from 'motion'
import { useEffect, useRef } from 'react'

function splitText(parent: HTMLElement, text: string, { by = 'words' } = {}) {
  parent.textContent = '' // clear it out
  let parts: string[] = []
  if (by === 'chars') {
    parts = text.split('')
  } else {
    // split into words, keep spaces
    parts = text.split(/(\s+)/)
  }

  const spans: HTMLSpanElement[] = parts.map((part) => {
    const span = document.createElement('span')
    span.textContent = part
    span.classList.add('split-word')
    parent.appendChild(span)
    return span
  })

  return { parts: spans }
}

export default function SplitText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return

      containerRef.current.style.visibility = 'visible'

      const h1 = containerRef.current.querySelector('h1')!
      const { parts } = splitText(h1, text, { by: 'chars' }) // try "chars" too

      animate(
        parts,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: 'spring',
          duration: 0.8,
          bounce: 0,
          delay: stagger(0.05),
        }
      )
    })
  }, [text])

  return (
    <div className={className} ref={containerRef}>
      <h1
        className="h1"
        style={{
          transformOrigin: 'center top',
        }}
      />
      <Stylesheet />
    </div>
  )
}

function Stylesheet() {
  return (
    <style>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 420px;
        text-align: left;
        visibility: hidden;
      }
      .split-word {
        display: inline-block;
        white-space: pre; /* preserve spaces */
        will-change: transform, opacity;
      }
    `}</style>
  )
}
