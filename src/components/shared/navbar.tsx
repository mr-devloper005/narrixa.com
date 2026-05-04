'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useAuth } from '@/lib/auth-context'
import { NAVBAR_OVERRIDE_ENABLED, NavbarOverride } from '@/overrides/navbar'

const NavbarAuthControls = dynamic(
  () => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls),
  {
    ssr: false,
    loading: () => null,
  },
)

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Latest News', href: '/newsroom' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  if (NAVBAR_OVERRIDE_ENABLED) {
    return <NavbarOverride />
  }

  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-xs font-bold text-gray-700">
            ←
          </div>
          <div>
            <p className="text-sm font-bold leading-none text-gray-900 tracking-tight">Presslyy</p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.22em] text-gray-400">Media Press Release</p>
          </div>
        </Link>

        {/* Center nav links */}
        <div className="hidden items-center gap-7 lg:flex absolute left-1/2 -translate-x-1/2">
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
        <div className="hidden items-center gap-3 lg:flex shrink-0">
          <Link href="/search" className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <Search className="h-4 w-4" />
          </Link>

          {isAuthenticated ? (
            <NavbarAuthControls />
          ) : (
            <Button size="sm" asChild className="rounded-full bg-purple-600 px-5 text-white hover:bg-purple-700 shadow-none">
              <Link href="/register">Submit Release</Link>
            </Button>
          )}
        </div>

        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full lg:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
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
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700"
            >
              <Search className="h-4 w-4" />
              Search
            </Link>

            {!isAuthenticated && (
              <div className="pt-2">
                <Link
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white"
                >
                  Submit Release
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
