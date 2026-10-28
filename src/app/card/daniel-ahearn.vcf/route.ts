import { EMAIL, LICENSE, PHONE, SITE_URL } from '@/lib/site'

// Built once at export time into out/card/daniel-ahearn.vcf. Netlify serves it as text/vcard (see netlify.toml).
export const dynamic = 'force-static'

// vCard 3.0 is the version every phone and mail client reads. Commas and semicolons in values must be escaped.
const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;')

export function GET() {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Ahearn;Daniel;J.;;LMFT',
    `FN:${esc('Daniel J. Ahearn, LMFT')}`,
    `ORG:${esc('Daniel J. Ahearn, LMFT')}`,
    `TITLE:${esc('Psychotherapist · Attachment Specialist · Author')}`,
    `EMAIL;TYPE=INTERNET,WORK:${EMAIL}`,
    `TEL;TYPE=WORK,VOICE:+1-${PHONE}`,
    'ADR;TYPE=WORK:;;;Los Angeles;CA;;USA',
    `URL:${SITE_URL}/`,
    `NOTE:${esc(`Licensed Marriage and Family Therapist (${LICENSE}). Author of The Way Back Home.`)}`,
    'END:VCARD',
  ]
  return new Response(lines.join('\r\n') + '\r\n', {
    headers: { 'Content-Type': 'text/vcard; charset=utf-8' },
  })
}
