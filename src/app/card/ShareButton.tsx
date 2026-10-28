'use client'

import { useEffect, useState } from 'react'

/** Native share sheet. Renders nothing on browsers without navigator.share (most desktops). */
export default function ShareButton({ url, title, text }: { url: string; title: string; text: string }) {
  const [supported, setSupported] = useState(false)

  useEffect(() => {
    setSupported(typeof navigator !== 'undefined' && typeof navigator.share === 'function')
  }, [])

  if (!supported) return null

  async function share() {
    try {
      await navigator.share({ url, title, text })
    } catch {
      // Dismissing the share sheet rejects; nothing to do.
    }
  }

  return (
    <button type="button" className="btn btn-line-d dc-btn plausible-event-name=Card+Share" onClick={share}>
      Share
    </button>
  )
}
