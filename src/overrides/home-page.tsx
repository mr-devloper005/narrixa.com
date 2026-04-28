import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'

export const HOME_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full post for the complete update.'
  return value.length > 220 ? value.slice(0, 217).trimEnd() + '...' : value
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 12, { fresh: true })
  const featured = posts[0]
  const recent = posts.slice(1, 6)
  const archive = posts.slice(1)

  return (
    <div className="min-h-screen bg-white text-[#641B2E]">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#641B2E] via-[#8A2D3B] to-[#BE5B50] py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              #1 Press Release Distribution Platform
            </span>
            <h1 className="mt-8 text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Amplify Your Story
              <span className="block text-[#FBDB93]"> to the World</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl">
              Connect with thousands of journalists and media outlets. Distribute your press releases to the right audience with our intelligent targeting and real-time analytics.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-full bg-[#BE5B50] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#8A2D3B] transition-all hover:shadow-xl">
                Start Distribution
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border-2 border-[#BE5B50]/30 bg-white px-8 py-4 text-base font-semibold text-[#641B2E] hover:bg-[#FBDB93]/30 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#641B2E] sm:text-4xl">
              Everything You Need for Effective PR
            </h2>
            <p className="mt-4 text-lg text-[#8A2D3B]">
              Comprehensive tools and services to maximize your press release impact
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#BE5B50]/20 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FBDB93]/30">
                <svg className="h-8 w-8 text-[#BE5B50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#641B2E]">Smart Distribution</h3>
              <p className="mt-3 text-[#8A2D3B]">AI-powered targeting ensures your press releases reach the most relevant journalists and publications in your industry.</p>
            </div>
            
            <div className="rounded-2xl border border-[#BE5B50]/20 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FBDB93]/30">
                <svg className="h-8 w-8 text-[#BE5B50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#641B2E]">Real-time Analytics</h3>
              <p className="mt-3 text-[#8A2D3B]">Track opens, clicks, and media pickups in real-time. Get comprehensive reports on your press release performance.</p>
            </div>
            
            <div className="rounded-2xl border border-[#BE5B50]/20 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FBDB93]/30">
                <svg className="h-8 w-8 text-[#BE5B50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#641B2E]">Media Database</h3>
              <p className="mt-3 text-[#8A2D3B]">Access our comprehensive database of over 50,000 journalists, bloggers, and media contacts across all industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics/Metrics Section */}
      <section className="bg-[#FBDB93]/20 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#641B2E] sm:text-4xl">
              Trusted by Leading Brands
            </h2>
            <p className="mt-4 text-lg text-[#8A2D3B]">
              Join thousands of companies using Narrixa for their PR needs
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-black text-[#BE5B50] sm:text-5xl">50K+</div>
              <p className="mt-2 text-[#8A2D3B]">Press Releases Distributed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#BE5B50] sm:text-5xl">2.5K+</div>
              <p className="mt-2 text-[#8A2D3B]">Media Outlets</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#BE5B50] sm:text-5xl">12K+</div>
              <p className="mt-2 text-[#8A2D3B]">Companies Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#BE5B50] sm:text-5xl">98%</div>
              <p className="mt-2 text-[#8A2D3B]">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Press Releases Section */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#641B2E] sm:text-4xl">
                Latest Press Releases
              </h2>
              <p className="mt-4 text-lg text-[#8A2D3B]">
                Stay updated with the latest news and announcements
              </p>
            </div>
            <Link href="/updates" className="hidden items-center gap-2 rounded-full border border-[#BE5B50]/30 bg-transparent px-6 py-3 text-sm font-semibold text-[#641B2E] hover:bg-[#FBDB93]/30 transition-colors sm:flex">
              View All
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <article key={post.id} className="rounded-2xl border border-[#BE5B50]/20 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 text-sm text-[#8A2D3B]">
                  <span className="bg-[#BE5B50]/10 px-2 py-1 text-xs font-semibold text-[#BE5B50]">
                    {String((post.content as any)?.category || 'Press Release')}
                  </span>
                  <span>•</span>
                  <span>{new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#641B2E]">{post.title}</h3>
                <p className="mt-3 text-[#8A2D3B]">{excerpt(post.summary)}</p>
                <Link href={`/updates/${post.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#BE5B50] hover:text-[#8A2D3B]">
                  Read More
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#FBDB93]/20 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#BE5B50]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#BE5B50]">
              Success Stories
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-[-0.04em] text-[#641B2E] sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-[#8A2D3B]">
              Hear from businesses that have successfully amplified their message through Narrixa
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#BE5B50]/20 bg-white p-8 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-[#BE5B50]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-lg leading-7 text-[#641B2E]">
                "Narrixa transformed our media outreach. Our press releases now reach journalists who actually care about our industry. The results have been phenomenal."
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#FBDB93]/30 flex items-center justify-center">
                  <span className="text-lg font-semibold text-[#BE5B50]">JD</span>
                </div>
                <div>
                  <p className="font-semibold text-[#641B2E]">Jennifer Davis</p>
                  <p className="text-sm text-[#8A2D3B]">Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#BE5B50]/20 bg-white p-8 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-[#BE5B50]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-lg leading-7 text-[#641B2E]">
                "The analytics and reporting features are incredible. We can see exactly which outlets picked up our stories and track our ROI in real-time."
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#FBDB93]/30 flex items-center justify-center">
                  <span className="text-lg font-semibold text-[#BE5B50]">MR</span>
                </div>
                <div>
                  <p className="font-semibold text-[#641B2E]">Michael Rodriguez</p>
                  <p className="text-sm text-[#8A2D3B]">CEO, StartupHub</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#BE5B50]/20 bg-white p-8 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-[#BE5B50]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-lg leading-7 text-[#641B2E]">
                "As a nonprofit, getting media attention was always challenging. Narrixa helped us tell our story and connect with the right journalists."
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#FBDB93]/30 flex items-center justify-center">
                  <span className="text-lg font-semibold text-[#BE5B50]">SC</span>
                </div>
                <div>
                  <p className="font-semibold text-[#641B2E]">Sarah Chen</p>
                  <p className="text-sm text-[#8A2D3B]">Communications Director, GreenFuture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-[#641B2E] to-[#8A2D3B] py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
              Ready to Amplify Your Message?
            </h2>
            <p className="mt-4 text-lg text-[#FBDB93]">
              Join thousands of businesses using Narrixa to reach their target audience and achieve their PR goals
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[#641B2E] shadow-lg hover:bg-[#FBDB93] transition-all hover:shadow-xl">
                View Pricing Plans
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
