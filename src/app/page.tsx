import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, CheckCircle2, ChevronDown, Globe2, MessageCircle, Phone, Play, Star, Users, Zap } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { siteContent } from '@/config/site.content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/',
    title: siteContent.home.metadata.title,
    description: siteContent.home.metadata.description,
    openGraphTitle: siteContent.home.metadata.openGraphTitle,
    openGraphDescription: siteContent.home.metadata.openGraphDescription,
    image: SITE_CONFIG.defaultOgImage,
    keywords: [...siteContent.home.metadata.keywords],
  })
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#c90d3f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:24px_24px] opacity-35" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
              Press release distribution
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Reach journalists, readers, and search with wire-ready announcements.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
              A simple newsroom-style publication for announcements, coverage, and media updates on Pressly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-black/85"
              >
                Submit a release
              </Link>
              <Link
                href="/newsroom"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Browse latest news
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&h=620&fit=crop"
                alt="Editorial team preparing announcements"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CommunicationsTeamSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">EDITORIAL CLARITY</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-2">Built for Communications Teams</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're managing PR in-house or working with agencies, our platform adapts to your workflow
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl bg-white border border-purple-100 shadow-sm transition-transform hover:scale-105">
            <div className="relative p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-4">In-house Teams</h3>
              <p className="text-gray-700 mb-6">
                Complete control over your brand's narrative with dedicated newsrooms, analytics, and distribution tools.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-purple-600 text-white px-4 py-2 text-sm font-semibold hover:bg-purple-700 transition-colors">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-white border border-purple-100 shadow-sm transition-transform hover:scale-105">
            <div className="relative p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-4">Agencies & Partners</h3>
              <p className="text-gray-700 mb-6">
                Manage multiple clients, streamline workflows, and deliver exceptional PR results with our agency features.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-purple-600 text-white px-4 py-2 text-sm font-semibold hover:bg-purple-700 transition-colors">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DistributionFeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="inline-block">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">FAST DISTRIBUTION</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-2">
              Distribution that stays readable end-to-end
            </h2>
            <div className="space-y-4">
              {[
                ['Instant Publishing', 'Your press releases go live immediately across all channels'],
                ['Targeted Reach', 'Connect with journalists, media outlets, and your target audience'],
                ['Analytics Dashboard', 'Track performance, engagement, and media pickup in real-time'],
                ['SEO Optimization', 'Built-in SEO tools ensure maximum visibility and search ranking']
              ].map(([title, description]) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-purple-50 border border-purple-100 shadow-lg">
              <div className="aspect-[16/9] relative">
                <img
                  src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
                  alt="Studio team planning content"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/45 to-purple-900/35"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white">
                      <Play className="h-6 w-6" />
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 mb-4">
                      <p className="text-sm font-semibold text-gray-900">Studio walkthrough</p>
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700 transition-colors">
                      Watch demo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IndustryCategoriesSection() {
  const categories = [
    {
      title: 'Technology & AI',
      image: 'https://img.magnific.com/free-photo/happy-businesswoman-communicating-with-her-colleague-while-being-meeting-office_637285-6993.jpg',
      overlay: 'from-black/60 to-black/80'
    },
    {
      title: 'Finance & Markets',
      image: 'https://img.magnific.com/free-photo/young-worker-leading-business-meeting-about-cryptocurrencies-office_1268-21489.jpg',
      overlay: 'from-black/60 to-black/80'
    },
    {
      title: 'Health & Science',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
      overlay: 'from-black/60 to-black/80'
    },
    {
      title: 'Lifestyle & Culture',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      overlay: 'from-black/60 to-black/80'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">MOBILE-FIRST</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-2">Industry Categories</h2>
          <p className="text-lg text-gray-600">
            Specialized distribution for every industry vertical
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.title} className="group relative overflow-hidden rounded-2xl transition-transform hover:scale-105">
              <div className="aspect-[4/3] relative">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.overlay}`}></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <Link href="/newsroom" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors">
                  View newsroom
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
          <Phone className="h-8 w-8" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Talk with our distribution desk</h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Get personalized guidance on your press release strategy and distribution needs
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-purple-600 px-6 py-3 font-semibold hover:bg-white/90 transition-colors">
          Contact Us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

function RecentPressReleasesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Press Releases</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-purple-100">
              <div className="aspect-[16/9] relative">
                <img 
                  src="https://img.magnific.com/free-photo/long-shot-business-people-meeting_23-2148427153.jpg"
                  alt="Business people meeting"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-900">
                    Company Update
                  </span>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Pressly Announces Revolutionary AI-Powered Press Release Distribution Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  Leading PR technology company unveils next-generation distribution platform that leverages artificial intelligence to optimize press release reach and engagement across global media networks.
                </p>
                <Link href="/newsroom" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {[
              ['Product Launch', 'New Features Enhance User Experience'],
              ['Partnership', 'Strategic Alliance with Global Media Network'],
              ['Award', 'Recognized as Top PR Technology Platform']
            ].map(([category, title]) => (
              <div key={title} className="bg-white rounded-xl p-4 shadow hover:shadow-md transition-shadow border border-purple-100">
                <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-700">
                  {category}
                </span>
                <h4 className="font-semibold text-gray-900 mt-2">{title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: "How quickly do releases appear?",
      answer: "Press releases go live immediately upon publishing. Distribution to media outlets and journalists begins within minutes, ensuring your news reaches the right audience without delay."
    },
    {
      question: "Can we organize releases by topic?",
      answer: "Yes! Our platform allows you to categorize press releases by topics, industries, campaigns, and custom tags. Create dedicated newsrooms for different aspects of your business."
    },
    {
      question: "Do article pages support sharing?",
      answer: "Absolutely. Every press release includes built-in social sharing buttons, direct link sharing, and embed options. Readers can easily share your news across all major social platforms."
    },
    {
      question: "Where should teams start with pricing?",
      answer: "We offer flexible pricing based on your needs. Start with our free tier to explore features, then scale as your distribution needs grow. Contact our sales team for custom enterprise solutions."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our press release distribution platform
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl px-6 border border-purple-200">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Communications Director, TechCorp",
      content: "Pressly transformed how we handle press releases. The distribution is instant and the analytics give us insights we never had before.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "PR Agency Founder",
      content: "Managing multiple clients has never been easier. The platform's efficiency and reach have helped us deliver exceptional results for our clients.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Marketing Manager, StartupXYZ",
      content: "The AI-powered distribution helped our startup get featured in major publications. It's like having a PR team working 24/7.",
      rating: 5
    }
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Trusted by communications teams and agencies worldwide
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default async function HomePage() {
  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      logo: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}${SITE_CONFIG.defaultOgImage}`,
      sameAs: [],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />
      <main>
        <HeroSection />
        <CommunicationsTeamSection />
        <DistributionFeaturesSection />
        <IndustryCategoriesSection />
        <CTASection />
        <RecentPressReleasesSection />
        <FAQSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
