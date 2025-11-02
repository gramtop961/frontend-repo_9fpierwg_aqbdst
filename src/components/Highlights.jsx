import { Calendar, MapPin, Shield, CreditCard, Clock, Users } from 'lucide-react';

export default function Highlights() {
  const features = [
    {
      title: 'Student-centric scheduling',
      desc: 'Routes synced with university calendars — weekend departures, weekday returns.',
      icon: Calendar,
    },
    { title: 'Direct inter-wilaya routes', desc: 'No transfers through crowded stations.', icon: MapPin },
    { title: 'Enhanced safety', desc: 'Real-time GPS tracking and verified, insured drivers.', icon: Shield },
    { title: 'Secure payments', desc: 'Transparent, regulated fares with in-app checkout.', icon: CreditCard },
    { title: '24/7 support', desc: 'Always-on assistance tailored for students.', icon: Clock },
    { title: 'Community partnerships', desc: 'Built with universities for trust and access.', icon: Users },
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built for student mobility</h2>
          <p className="mt-3 text-gray-600">
            Everything you need to move between wilayas safely, affordably, and comfortably.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <f.icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="pricing" className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 p-6 md:p-8">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-blue-900">Fair, student-first pricing</h3>
              <p className="mt-2 text-blue-900/80">
                Transparent fares set with our partner universities. No surge pricing. Pay securely with your preferred method.
              </p>
              <ul className="mt-4 space-y-2 text-blue-900/80">
                <li>• Discounted student rates</li>
                <li>• Free cancellations up to 24h before departure</li>
                <li>• Digital receipts for reimbursements</li>
              </ul>
            </div>
            <div className="rounded-xl border border-blue-200 bg-white p-6 text-blue-900 shadow-sm">
              <p className="text-sm font-medium">Example route</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold">800 DA</span>
                <span className="text-sm">Algiers → Blida</span>
              </div>
              <p className="mt-2 text-sm">Prices vary by distance and are always visible before booking.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
