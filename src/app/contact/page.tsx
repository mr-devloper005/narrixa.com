import { Building2, FileText, Image as ImageIcon, Mail, MapPin, Phone, Sparkles, Bookmark } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

function getTone(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return {
      shell: 'bg-[#FBDB93]/20 text-[#641B2E]',
      panel: 'border border-[#BE5B50]/20 bg-white',
      soft: 'border border-[#BE5B50]/15 bg-[#FBDB93]/30',
      muted: 'text-[#8A2D3B]',
      action: 'bg-[#BE5B50] text-white hover:bg-[#8A2D3B]',
    }
  }
  if (kind === 'editorial') {
    return {
      shell: 'bg-[#FBDB93]/20 text-[#641B2E]',
      panel: 'border border-[#BE5B50]/20 bg-white',
      soft: 'border border-[#BE5B50]/15 bg-[#FBDB93]/30',
      muted: 'text-[#8A2D3B]',
      action: 'bg-[#BE5B50] text-[#FBDB93] hover:bg-[#8A2D3B]',
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-[#641B2E] text-white',
      panel: 'border border-[#FBDB93]/20 bg-white/10',
      soft: 'border border-[#FBDB93]/15 bg-white/5',
      muted: 'text-[#FBDB93]',
      action: 'bg-[#BE5B50] text-white hover:bg-[#8A2D3B]',
    }
  }
  return {
    shell: 'bg-[#FBDB93]/20 text-[#641B2E]',
    panel: 'border border-[#BE5B50]/20 bg-white',
    soft: 'border border-[#BE5B50]/15 bg-[#FBDB93]/30',
    muted: 'text-[#8A2D3B]',
    action: 'bg-[#BE5B50] text-[#FBDB93] hover:bg-[#8A2D3B]',
  }
}

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const tone = getTone(productKind)
  const lanes =
    productKind === 'directory'
      ? [
          { icon: Building2, title: 'Business onboarding', body: 'Add listings, verify operational details, and bring your business surface live quickly.' },
          { icon: Phone, title: 'Partnership support', body: 'Talk through bulk publishing, local growth, and operational setup questions.' },
          { icon: MapPin, title: 'Coverage requests', body: 'Need a new geography or category lane? We can shape the directory around it.' },
        ]
      : productKind === 'editorial'
        ? [
            { icon: FileText, title: 'Press release submissions', body: 'Submit your press releases for distribution to our media network and get maximum coverage.' },
            { icon: Mail, title: 'Media partnerships', body: 'Coordinate with journalists, media outlets, and industry publications for enhanced distribution.' },
            { icon: Sparkles, title: 'Distribution support', body: 'Get help with targeting, timing, and optimizing your press release campaigns.' },
          ]
        : productKind === 'visual'
          ? [
              { icon: ImageIcon, title: 'Creator collaborations', body: 'Discuss gallery launches, creator features, and visual campaigns.' },
              { icon: Sparkles, title: 'Licensing and use', body: 'Reach out about usage rights, commercial requests, and visual partnerships.' },
              { icon: Mail, title: 'Media kits', body: 'Request creator decks, editorial support, or visual feature placement.' },
            ]
          : [
              { icon: Bookmark, title: 'Collection submissions', body: 'Suggest resources, boards, and links that deserve a place in the library.' },
              { icon: Mail, title: 'Resource partnerships', body: 'Coordinate curation projects, reference pages, and link programs.' },
              { icon: Sparkles, title: 'Curator support', body: 'Need help organizing shelves, collections, or profile-connected boards?' },
            ]

  return (
    <div className={`min-h-screen ${tone.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">Contact {SITE_CONFIG.name}</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">Press release distribution support that understands your needs.</h1>
            <p className={`mt-5 max-w-2xl text-sm leading-8 ${tone.muted}`}>Whether you need help with distribution, targeting, or campaign strategy, we'll connect you with the right experts to maximize your media reach.</p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className={`rounded-[1.6rem] p-5 ${tone.soft}`}>
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 text-xl font-semibold">{lane.title}</h2>
                  <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-7 ${tone.panel}`}>
            <h2 className="text-2xl font-semibold">Send a message</h2>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Your name" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Email address" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Company or organization" />
              <textarea className="min-h-[180px] rounded-2xl border border-current/10 bg-transparent px-4 py-3 text-sm" placeholder="Tell us about your press release needs, campaign goals, or distribution requirements." />
              <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${tone.action}`}>Send message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
