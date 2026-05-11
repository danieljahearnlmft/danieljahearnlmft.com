'use client'

import { useEffect, useRef } from 'react'

export default function KitEmbed() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || ref.current.querySelector('script')) return
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://daniel-j-ahearn-lmft.kit.com/799e767f77/index.js'
    script.setAttribute('data-uid', '799e767f77')
    ref.current.appendChild(script)
  }, [])

  return <div ref={ref} />
}
