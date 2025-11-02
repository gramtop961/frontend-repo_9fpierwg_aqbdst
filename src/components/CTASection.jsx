import { Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="pilot" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">Pilot program: starting with 3 wilayas</h3>
            <p className="mt-2 text-gray-700">
              We’re launching with routes connecting students across Algiers, Blida, and Tizi Ouzou. Help us refine the service and expand to more regions.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><MapPin size={18} className="text-blue-600" /> Direct routes between campuses</li>
              <li className="flex items-center gap-2"><ShieldCheck size={18} className="text-blue-600" /> Safety-first standards and monitoring</li>
            </ul>
          </div>

          <div id="support" className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-2xl font-bold text-blue-900">24/7 student support</h3>
            <p className="mt-2 text-blue-900/80">
              Questions about bookings, payments, or safety? Our team is here for you anytime.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#download" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700">
                Join the pilot
              </a>
              <a href="mailto:support@wilaygo.com" className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-white px-5 py-3 text-blue-900 hover:bg-blue-100">
                <Phone size={18} /> Contact support
              </a>
            </div>
          </div>
        </div>

        <div id="download" className="mt-16 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-medium text-gray-700">Coming soon to iOS and Android</p>
          <h4 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">Get early access</h4>
          <p className="mt-2 text-gray-600">Be the first to try Wilaygo in the pilot regions and help shape the experience.</p>
          <div className="mx-auto mt-6 max-w-md">
            <form
              className="flex flex-col items-stretch gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks! We\'ll notify you at this address when the beta is ready.');
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter your university email"
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none ring-blue-600 focus:ring"
              />
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
                Notify me
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} Wilaygo. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#pilot" className="hover:text-gray-900">Pilot</a>
            <a href="#support" className="hover:text-gray-900">Support</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
