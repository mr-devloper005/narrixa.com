'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Latest News', href: '/newsroom' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div>
            <p className="text-sm font-bold leading-none text-gray-900 tracking-tight">{SITE_CONFIG.name}</p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.22em] text-gray-400">Media Press Release</p>
          </div>
        </Link>

        {/* Center nav links */}
        <div className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  active ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Right side: search icon + CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/search"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            <Search className="h-4 w-4" />
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
          >
            Submit Release
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-full p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          <div className="space-y-1">
            {navItems.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-sm font-medium',
                    active ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-gray-50',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/search"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700"
            >
              <Search className="h-4 w-4" />
              Search
            </Link>
            <div className="pt-2">
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Submit Release
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
