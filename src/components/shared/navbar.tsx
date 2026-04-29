'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, User, FileText, Building2, LayoutGrid, Tag, Image as ImageIcon, ChevronRight, Sparkles, MapPin, Plus, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { siteContent } from '@/config/site.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { NAVBAR_OVERRIDE_ENABLED, NavbarOverride } from '@/overrides/navbar'

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

const taskIcons: Record<TaskKey, any> = {
  article: FileText,
  listing: Building2,
  sbm: LayoutGrid,
  classified: Tag,
  image: ImageIcon,
  profile: User,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
  mediaDistribution: FileText,
}

const variantClasses = {
  'compact-bar': {
    shell: 'border-b border-[#BE5B50]/20 bg-gradient-to-r from-[#641B2E] to-[#8A2D3B] text-white backdrop-blur-xl',
    logo: 'rounded-2xl border border-[#FBDB93]/30 bg-white shadow-sm',
    active: 'bg-[#FBDB93] text-[#641B2E]',
    idle: 'text-white/80 hover:bg-[#FBDB93]/20 hover:text-white',
    cta: 'rounded-full bg-[#FBDB93] text-[#641B2E] hover:bg-white',
    mobile: 'border-t border-[#BE5B50]/20 bg-[#641B2E]/96',
  },
  'editorial-bar': {
    shell: 'border-b border-[#BE5B50]/20 bg-gradient-to-r from-[#641B2E] to-[#8A2D3B] text-white backdrop-blur-xl',
    logo: 'rounded-full border border-[#FBDB93]/30 bg-white shadow-sm',
    active: 'bg-[#FBDB93] text-[#641B2E]',
    idle: 'text-white/80 hover:bg-[#FBDB93]/20 hover:text-white',
    cta: 'rounded-full bg-[#FBDB93] text-[#641B2E] hover:bg-white',
    mobile: 'border-t border-[#BE5B50]/20 bg-[#641B2E]/96',
  },
  'floating-bar': {
    shell: 'border-b border-transparent bg-transparent text-white',
    logo: 'rounded-[1.35rem] border border-[#FBDB93]/30 bg-white/90 shadow-[0_16px_48px_rgba(190,91,80,0.22)] backdrop-blur',
    active: 'bg-[#FBDB93] text-[#641B2E]',
    idle: 'text-white/80 hover:bg-white/10 hover:text-white',
    cta: 'rounded-full bg-[#FBDB93] text-[#641B2E] hover:bg-white',
    mobile: 'border-t border-[#BE5B50]/20 bg-[#641B2E]/96',
  },
  'utility-bar': {
    shell: 'border-b border-[#BE5B50]/20 bg-gradient-to-r from-[#641B2E] to-[#8A2D3B] text-white backdrop-blur-xl',
    logo: 'rounded-xl border border-[#FBDB93]/30 bg-white shadow-sm',
    active: 'bg-[#FBDB93] text-[#641B2E]',
    idle: 'text-white/80 hover:bg-[#FBDB93]/20 hover:text-white',
    cta: 'rounded-lg bg-[#FBDB93] text-[#641B2E] hover:bg-white',
    mobile: 'border-t border-[#BE5B50]/20 bg-[#641B2E]/96',
  },
} as const

const directoryPalette = {
  'directory-clean': {
    shell: 'border-b border-[#BE5B50]/20 bg-gradient-to-r from-[#641B2E] to-[#8A2D3B] text-white shadow-[0_1px_0_rgba(190,91,80,0.04)] backdrop-blur-xl',
    logo: 'rounded-2xl border border-[#FBDB93]/30 bg-white',
    nav: 'text-white/80 hover:text-white',
    search: 'border border-[#FBDB93]/30 bg-white/20 text-white placeholder-white/60',
    cta: 'bg-[#FBDB93] text-[#641B2E] hover:bg-white',
    post: 'border border-[#BE5B50]/20 bg-white text-[#641B2E] hover:bg-[#FBDB93]/30',
    mobile: 'border-t border-[#BE5B50]/20 bg-white',
  },
  'market-utility': {
    shell: 'border-b border-[#BE5B50]/20 bg-gradient-to-r from-[#641B2E] to-[#8A2D3B] text-white shadow-[0_1px_0_rgba(190,91,80,0.06)] backdrop-blur-xl',
    logo: 'rounded-xl border border-[#FBDB93]/30 bg-white',
    nav: 'text-white/80 hover:text-white',
    search: 'border border-[#FBDB93]/30 bg-white/20 text-white placeholder-white/60',
    cta: 'bg-[#FBDB93] text-[#641B2E] hover:bg-white',
    post: 'border border-[#FBDB93]/30 bg-white/20 text-white hover:bg-white/30',
    mobile: 'border-t border-[#BE5B50]/20 bg-[#FBDB93]',
  },
} as const

export function Navbar() {
  if (NAVBAR_OVERRIDE_ENABLED) {
    return <NavbarOverride />
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const { recipe } = getFactoryState()

  const navigation = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'profile'), [])
  const primaryNavigation = navigation.slice(0, 5)
  const mobileNavigation = navigation.map((task) => ({
    name: task.label,
    href: task.route,
    icon: taskIcons[task.key] || LayoutGrid,
  }))
  const primaryTask = SITE_CONFIG.tasks.find((task) => task.key === recipe.primaryTask && task.enabled) || primaryNavigation[0]
  const isDirectoryProduct = recipe.homeLayout === 'listing-home' || recipe.homeLayout === 'classified-home'

  if (isDirectoryProduct) {
    const palette = directoryPalette[(recipe.brandPack === 'market-utility' ? 'market-utility' : 'directory-clean') as keyof typeof directoryPalette]

    return (
      <header className={cn('sticky top-0 z-50 w-full', palette.shell)}>
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <Link href="/" className="flex shrink-0 items-center gap-3">
              <div className={cn('flex h-12 w-12 items-center justify-center overflow-hidden p-1.5', palette.logo)}>
                <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} width="48" height="48" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0 hidden sm:block">
                <span className="block truncate text-xl font-semibold">{SITE_CONFIG.name}</span>
                <span className="block text-[10px] uppercase tracking-[0.24em] opacity-60">{siteContent.navbar.tagline}</span>
              </div>
            </Link>

            <div className="hidden items-center gap-6 xl:flex">
              <Link href="/" className={cn('text-sm font-semibold transition-colors', pathname === '/' ? 'text-foreground' : palette.nav)}>
                Home
              </Link>
              <Link href="/updates" className={cn('text-sm font-semibold transition-colors', pathname.startsWith('/updates') ? 'text-foreground' : palette.nav)}>
                Press Releases
              </Link>
              <Link href="/pricing" className={cn('text-sm font-semibold transition-colors', pathname.startsWith('/pricing') ? 'text-foreground' : palette.nav)}>
                Pricing
              </Link>
              <Link href="/about" className={cn('text-sm font-semibold transition-colors', pathname.startsWith('/about') ? 'text-foreground' : palette.nav)}>
                About
              </Link>
              <Link href="/contact" className={cn('text-sm font-semibold transition-colors', pathname.startsWith('/contact') ? 'text-foreground' : palette.nav)}>
                Contact
              </Link>
              {primaryNavigation.slice(0, 2).map((task) => {
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('text-sm font-semibold transition-colors', isActive ? 'text-foreground' : palette.nav)}>
                    {task.label}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
            <div className={cn('flex w-full max-w-xl items-center gap-3 rounded-full px-4 py-3', palette.search)}>
              <Search className="h-4 w-4" />
              <span className="text-sm">Search press releases and news</span>
              <div className="ml-auto hidden items-center gap-1 text-xs opacity-75 md:flex">
                <FileText className="h-3.5 w-3.5" />
                Media distribution
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {primaryTask ? (
              <Link href={primaryTask.route} className="hidden items-center gap-2 rounded-full border border-current/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] opacity-75 md:inline-flex">
                <Sparkles className="h-3.5 w-3.5" />
                {primaryTask.label}
              </Link>
            ) : null}

            {isAuthenticated ? (
              <NavbarAuthControls />
            ) : (
              <div className="hidden items-center gap-2 md:flex">
                <Button variant="ghost" size="sm" asChild className="rounded-full px-4">
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button size="sm" asChild className={cn('rounded-full', palette.cta)}>
                  <Link href="/register">
                    <Plus className="mr-1 h-4 w-4" />
                    Get Started
                  </Link>
                </Button>
              </div>
            )}

            <Button variant="ghost" size="icon" className="rounded-full lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className={palette.mobile}>
            <div className="space-y-2 px-4 py-4">
              <div className={cn('mb-3 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium', palette.search)}>
                <Search className="h-4 w-4" />
                Search press releases and news
              </div>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors', pathname === '/' ? 'bg-foreground text-background' : palette.post)}>
                <LayoutGrid className="h-5 w-5" />
                Home
              </Link>
              <Link href="/updates" onClick={() => setIsMobileMenuOpen(false)} className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors', pathname.startsWith('/updates') ? 'bg-foreground text-background' : palette.post)}>
                <FileText className="h-5 w-5" />
                Press Releases
              </Link>
              <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors', pathname.startsWith('/pricing') ? 'bg-foreground text-background' : palette.post)}>
                <Tag className="h-5 w-5" />
                Pricing
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors', pathname.startsWith('/about') ? 'bg-foreground text-background' : palette.post)}>
                <User className="h-5 w-5" />
                About
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors', pathname.startsWith('/contact') ? 'bg-foreground text-background' : palette.post)}>
                <Mail className="h-5 w-5" />
                Contact
              </Link>
              {mobileNavigation.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors', pathname.startsWith(item.href) ? 'bg-foreground text-background' : palette.post)}>
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    )
  }

  const style = variantClasses[recipe.navbar]
  const isFloating = recipe.navbar === 'floating-bar'
  const isEditorial = recipe.navbar === 'editorial-bar'
  const isUtility = recipe.navbar === 'utility-bar'

  return (
    <header className={cn('sticky top-0 z-50 w-full', style.shell)}>
      <nav className={cn('mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8', isFloating ? 'h-24 pt-4' : 'h-20')}>
        <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-7">
          <Link href="/" className="flex shrink-0 items-center gap-3 whitespace-nowrap pr-2">
            <div className={cn('flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden p-1.5', style.logo)}>
              <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} width="48" height="48" className="h-full w-full object-contain" />
            </div>
            <div className="min-w-0 hidden sm:block">
              <span className="block truncate text-xl font-semibold">{SITE_CONFIG.name}</span>
              <span className="hidden text-[10px] uppercase tracking-[0.28em] opacity-70 sm:block">{siteContent.navbar.tagline}</span>
            </div>
          </Link>

          {isEditorial ? (
            <div className="hidden min-w-0 flex-1 items-center gap-4 xl:flex">
              <div className="h-px flex-1 bg-[#BE5B50]/30" />
              <Link href="/" className={cn('text-sm font-semibold uppercase tracking-[0.18em] transition-colors', pathname === '/' ? 'text-[#641B2E]' : 'text-[#8A2D3B] hover:text-[#641B2E]')}>
                Home
              </Link>
              <Link href="/updates" className={cn('text-sm font-semibold uppercase tracking-[0.18em] transition-colors', pathname.startsWith('/updates') ? 'text-[#641B2E]' : 'text-[#8A2D3B] hover:text-[#641B2E]')}>
                Press Releases
              </Link>
              <Link href="/pricing" className={cn('text-sm font-semibold uppercase tracking-[0.18em] transition-colors', pathname.startsWith('/pricing') ? 'text-[#641B2E]' : 'text-[#8A2D3B] hover:text-[#641B2E]')}>
                Pricing
              </Link>
              <Link href="/about" className={cn('text-sm font-semibold uppercase tracking-[0.18em] transition-colors', pathname.startsWith('/about') ? 'text-[#641B2E]' : 'text-[#8A2D3B] hover:text-[#641B2E]')}>
                About
              </Link>
              <Link href="/contact" className={cn('text-sm font-semibold uppercase tracking-[0.18em] transition-colors', pathname.startsWith('/contact') ? 'text-[#641B2E]' : 'text-[#8A2D3B] hover:text-[#641B2E]')}>
                Contact
              </Link>
              {primaryNavigation.slice(0, 2).map((task) => {
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('text-sm font-semibold uppercase tracking-[0.18em] transition-colors', isActive ? 'text-[#641B2E]' : 'text-[#8A2D3B] hover:text-[#641B2E]')}>
                    {task.label}
                  </Link>
                )
              })}
              <div className="h-px flex-1 bg-[#BE5B50]/30" />
            </div>
          ) : isFloating ? (
            <div className="hidden min-w-0 flex-1 items-center gap-2 xl:flex">
              {primaryNavigation.map((task) => {
                const Icon = taskIcons[task.key] || LayoutGrid
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}>
                    <Icon className="h-4 w-4" />
                    <span>{task.label}</span>
                  </Link>
                )
              })}
            </div>
          ) : isUtility ? (
            <div className="hidden min-w-0 flex-1 items-center gap-2 xl:flex">
              {primaryNavigation.map((task) => {
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('rounded-lg px-3 py-2 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}>
                    {task.label}
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="hidden min-w-0 flex-1 items-center gap-1 overflow-hidden xl:flex">
              {primaryNavigation.map((task) => {
                const Icon = taskIcons[task.key] || LayoutGrid
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap', isActive ? style.active : style.idle)}>
                    <Icon className="h-4 w-4" />
                    <span>{task.label}</span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {primaryTask && (recipe.navbar === 'utility-bar' || recipe.navbar === 'floating-bar') ? (
            <Link href={primaryTask.route} className="hidden items-center gap-2 rounded-full border border-current/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] opacity-80 md:inline-flex">
              <Sparkles className="h-3.5 w-3.5" />
              {primaryTask.label}
            </Link>
          ) : null}

          <Button variant="ghost" size="icon" asChild className="hidden rounded-full md:flex">
            <Link href="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>

          {isAuthenticated ? (
            <NavbarAuthControls />
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="ghost" size="sm" asChild className="rounded-full px-4">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild className={style.cta}>
                <Link href="/register">{isEditorial ? 'Subscribe' : isUtility ? 'Post Now' : 'Get Started'}</Link>
              </Button>
            </div>
          )}

          <Button variant="ghost" size="icon" className="rounded-full lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isFloating && primaryTask ? (
        <div className="mx-auto hidden max-w-7xl px-4 pb-3 sm:px-6 lg:block lg:px-8">
          <Link href={primaryTask.route} className="inline-flex items-center gap-2 rounded-full border border-[#FBDB93]/20 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FBDB93] backdrop-blur hover:bg-white/12">
            Featured surface
            <span>{primaryTask.label}</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      ) : null}

      {isMobileMenuOpen && (
        <div className={style.mobile}>
          <div className="space-y-2 px-4 py-4">
            <Link href="/search" onClick={() => setIsMobileMenuOpen(false)} className="mb-3 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground">
              <Search className="h-4 w-4" />
              Search the site
            </Link>
            {mobileNavigation.map((item) => {
              const isActive = pathname.startsWith(item.href)
              return (
                <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}>
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
