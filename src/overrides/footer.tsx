import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-neutral-600 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
          <Link href="/newsroom" className="hover:text-gray-900 transition-colors">Newsroom</Link>
          <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
