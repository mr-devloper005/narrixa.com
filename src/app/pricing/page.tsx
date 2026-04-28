import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Star, Zap, Users, BarChart3, Globe, Shield, Headphones } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/pricing',
    title: 'Pricing Plans - Narrixa.com',
    description: 'Choose the perfect press release distribution plan for your needs. Basic, Pro, and Premium options with comprehensive features.',
    keywords: ['pricing', 'plans', 'press release distribution', 'media outreach', 'PR packages'],
  })
}

const pricingPlans = [
  {
    name: 'Basic',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 press releases per month',
      'Basic media distribution',
      'Standard analytics dashboard',
      'Email support',
      '7-day archive access',
      'Basic SEO optimization',
    ],
    notIncluded: [
      'Priority distribution',
      'Advanced analytics',
      'Custom branding',
      'Dedicated account manager',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing companies and PR agencies',
    features: [
      'Up to 20 press releases per month',
      'Enhanced media distribution',
      'Advanced analytics & insights',
      'Priority email support',
      '30-day archive access',
      'Advanced SEO optimization',
      'Custom branding options',
      'Social media integration',
    ],
    notIncluded: [
      'Dedicated account manager',
      'White-label options',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$699',
    period: '/month',
    description: 'Complete solution for enterprises and large agencies',
    features: [
      'Unlimited press releases',
      'Premium media distribution',
      'Real-time analytics & reporting',
      '24/7 phone support',
      'Lifetime archive access',
      'Enterprise SEO features',
      'Full custom branding',
      'Advanced social media tools',
      'Dedicated account manager',
      'White-label options',
      'API access',
      'Custom integrations',
    ],
    notIncluded: [],
    highlighted: false,
  },
]

const addOns = [
  {
    name: 'Media Database Access',
    price: '$49',
    period: '/month',
    description: 'Access to our comprehensive journalist and media outlet database',
    icon: Users,
  },
  {
    name: 'Advanced Analytics',
    price: '$79',
    period: '/month',
    description: 'Detailed sentiment analysis, engagement metrics, and competitor tracking',
    icon: BarChart3,
  },
  {
    name: 'Global Distribution',
    price: '$199',
    period: '/month',
    description: 'Extended reach to international media outlets and global news agencies',
    icon: Globe,
  },
  {
    name: 'Priority Support',
    price: '$99',
    period: '/month',
    description: 'Dedicated support team with guaranteed response times',
    icon: Headphones,
  },
]

const faqs = [
  {
    question: 'Can I change my plan anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and wire transfers for enterprise accounts.',
  },
  {
    question: 'Do you offer custom packages?',
    answer: 'Yes, we can create custom packages for enterprises with specific needs. Contact our sales team for more information.',
  },
  {
    question: 'Is there a contract or commitment?',
    answer: 'All plans are month-to-month with no long-term contracts. Annual plans are available at a discount.',
  },
  {
    question: 'What kind of support is included?',
    answer: 'Basic plans include email support, Pro plans include priority email support, and Premium plans include 24/7 phone support.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription at any time. Your service will continue until the end of your current billing period.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#FBDB93]/20 to-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#BE5B50]/10 px-4 py-2 text-sm font-semibold text-[#BE5B50] mb-6">
                <Star className="h-4 w-4" />
                Simple, transparent pricing
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-[#641B2E] sm:text-5xl lg:text-6xl">
                Choose Your Perfect Plan
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-[#8A2D3B]">
                Powerful press release distribution solutions designed to help you reach your audience and achieve your PR goals
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border ${
                    plan.highlighted
                      ? 'border-[#BE5B50] shadow-2xl shadow-[#BE5B50]/20 scale-105'
                      : 'border-[#BE5B50]/20 bg-white'
                  } p-8 transition-all hover:shadow-lg`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center gap-1 rounded-full bg-[#BE5B50] px-4 py-2 text-sm font-semibold text-white">
                        <Zap className="h-4 w-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#641B2E]">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-[#641B2E]">{plan.price}</span>
                      <span className="text-[#8A2D3B]">{plan.period}</span>
                    </div>
                    <p className="mt-4 text-[#8A2D3B]">{plan.description}</p>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={`/register?plan=${plan.name.toLowerCase()}`}
                      className={`block w-full rounded-full py-3 text-center font-semibold transition-colors ${
                        plan.highlighted
                          ? 'bg-[#BE5B50] text-white hover:bg-[#8A2D3B]'
                          : 'border border-[#BE5B50] text-[#BE5B50] hover:bg-[#BE5B50] hover:text-white'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>

                  <div className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#BE5B50]" />
                        <span className="text-sm text-[#641B2E]">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 opacity-50">
                        <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full border-2 border-[#BE5B50]/30" />
                        <span className="text-sm text-[#8A2D3B] line-through">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="bg-[#FBDB93]/10 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#641B2E] sm:text-4xl">Enhance Your Plan</h2>
              <p className="mt-4 text-lg text-[#8A2D3B]">
                Add powerful features to supercharge your press release distribution
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="rounded-xl border border-[#BE5B50]/20 bg-white p-6 text-center transition-all hover:shadow-md hover:border-[#BE5B50]/40"
                >
                  <addon.icon className="mx-auto h-12 w-12 text-[#BE5B50]" />
                  <h3 className="mt-4 text-lg font-semibold text-[#641B2E]">{addon.name}</h3>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-[#641B2E]">{addon.price}</span>
                    <span className="text-[#8A2D3B]">{addon.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-[#8A2D3B]">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#641B2E] sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-[#8A2D3B]">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#BE5B50]/20 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-[#641B2E]">{faq.question}</h3>
                  <p className="mt-3 text-[#8A2D3B]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#BE5B50] to-[#8A2D3B] py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to amplify your message?
            </h2>
            <p className="mt-4 text-lg text-[#FBDB93]">
              Join thousands of companies using Narrixa.com to distribute their press releases
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-[#641B2E] transition-colors hover:bg-[#FBDB93]"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
