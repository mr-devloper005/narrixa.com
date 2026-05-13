import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl border border-purple-100 bg-purple-50">
          <div className="relative h-[280px] sm:h-[320px]">
            <img
              src="https://img.magnific.com/free-photo/business-people-working-together-office_23-2148427153.jpg"
              alt="Contact support hero"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-purple-900/35" />
            <div className="relative z-10 flex h-full items-center px-8 sm:px-12">
              <div className="max-w-2xl text-white">
                <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                  From the newsroom
                </span>
                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
                <p className="mt-3 text-sm text-white/90 sm:text-base">
                  Professional Press Wire support with experts who help your announcements reach the right audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-md border border-purple-100 bg-gray-50 p-5 sm:p-6">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Contact Name *</label>
                  <input className="h-11 w-full rounded-sm border border-purple-100 bg-white px-3 text-sm text-gray-700" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Phone Number</label>
                  <input className="h-11 w-full rounded-sm border border-purple-100 bg-white px-3 text-sm text-gray-700" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Email *</label>
                <input type="email" className="h-11 w-full rounded-sm border border-purple-100 bg-white px-3 text-sm text-gray-700" />
              </div>

              <div className="pt-2">
                <p className="text-sm font-semibold text-gray-700">Help Us Understand Your Needs A Little More.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">What type of organization are you? *</label>
                  <select className="h-11 w-full rounded-sm border border-purple-100 bg-white px-3 text-sm text-gray-600">
                    <option>Please Select</option>
                    <option>Agency</option>
                    <option>Corporate</option>
                    <option>Startup</option>
                    <option>Non-profit</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Subject: How may we help you? *</label>
                  <select className="h-11 w-full rounded-sm border border-purple-100 bg-white px-3 text-sm text-gray-600">
                    <option>Please Select</option>
                    <option>General inquiry</option>
                    <option>Pricing</option>
                    <option>Support</option>
                    <option>Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Message / Comment *</label>
                <textarea className="min-h-[130px] w-full rounded-sm border border-purple-100 bg-white px-3 py-3 text-sm text-gray-700" />
              </div>

              <div className="flex justify-center pt-2">
                <div className="rounded-sm border border-purple-200 bg-white px-6 py-4 text-xs text-gray-500">
                  reCAPTCHA placeholder
                </div>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-sm bg-purple-600 px-10 text-sm font-semibold text-white hover:bg-purple-700"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="border-b border-purple-100 pb-5">
              <h2 className="text-2xl font-bold text-gray-900">Telephone Hours:</h2>
              <p className="mt-2 text-sm text-gray-600">Monday to Friday</p>
              <p className="text-base font-semibold text-gray-700">8:30am to 5:00pm Pacific (PDT)</p>
            </div>
            <div className="border-b border-purple-100 pb-5">
              <h2 className="text-2xl font-bold text-gray-900">Toll Free Telephone:</h2>
              <p className="mt-2 text-base font-semibold text-gray-700">1-888-880-9539</p>
              <p className="text-sm text-gray-600">1-646-717-5291</p>
            </div>
            <div className="border-b border-purple-100 pb-5">
              <h2 className="text-2xl font-bold text-gray-900">US Address:</h2>
              <p className="mt-2 text-sm text-gray-600">Suite 1400, 50 Second Avenue</p>
              <p className="text-sm text-gray-600">Seattle, WA 98104, USA</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Canada Address:</h2>
              <p className="mt-2 text-sm text-gray-600">Suite 203, 901 West 3rd St.</p>
              <p className="text-sm text-gray-600">Vancouver, BC V7P 3P9, Canada</p>
            </div>
          </aside>
        </section>

        <section className="mt-12">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 px-8 py-8 text-white">
            <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16)_2px,transparent_2px)] bg-[length:32px_32px] opacity-50" />
            <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-3xl font-bold leading-tight">
                Please take a moment to check out our FAQs for quick answers to common questions.
              </p>
              <button className="inline-flex h-11 items-center justify-center rounded-sm bg-white px-7 text-sm font-semibold text-purple-600 hover:bg-white/90">
                VIEW FAQs
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
