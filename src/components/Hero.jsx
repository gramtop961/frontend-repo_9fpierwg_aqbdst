import { Shield, MapPin, CreditCard } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-blue-50 via-white to-white"></div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Safer, smarter inter-city travel for students
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Wilaygo lets you book and pay for direct routes between wilayas, track trips in real time, and travel with certified drivers at transparent student pricing.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#download" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
                Download (Beta)
              </a>
              <a href="#features" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50">
                Learn more
              </a>
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <FeatureChip icon={<Shield className="text-blue-600" size={18} />} title="Certified" desc="Drivers & insured vehicles" />
              <FeatureChip icon={<MapPin className="text-blue-600" size={18} />} title="Direct" desc="No station transfers" />
              <FeatureChip icon={<CreditCard className="text-blue-600" size={18} />} title="Secure" desc="In-app payments" />
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
                alt="Students traveling safely"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur">
                <p className="text-sm font-medium text-gray-900">Upcoming route</p>
                <p className="mt-1 text-sm text-gray-700">Algiers → Tizi Ouzou · Sun 18:00 · 1h 40m</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureChip({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white p-3">
      <div className="mt-0.5">{icon}</div>
      <div>
        <dt className="text-sm font-semibold text-gray-900">{title}</dt>
        <dd className="text-sm text-gray-600">{desc}</dd>
      </div>
    </div>
  );
}
