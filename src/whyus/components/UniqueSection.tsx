import { Monitor, Users, Zap } from "lucide-react";

const UniqueSection = () => {
  const uniqueFeatures = [
    {
      image:
        "https://cdn-icons-png.freepik.com/256/13080/13080625.png?semt=ais_hybrid",
      title: "Monitor on Computer or Mobile",
      description:
        "You can open your IONMONITAR control panel on computer or mobile phone for remote monitoring.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5719/5719461.png",
      title: "Call Recording",
      description:
        "Most monitor apps claim that they provide call recordings on phone calls, however ION-MONITAR is the only application which delivers the same with them. It never works appropriately with them.",
    },
    {
      image: "https://www.svgrepo.com/show/192522/customer-service-support.svg",
      title: "Get Support over Email, Chat, and Calls",
      description:
        "Unlike others who don’t provide any type of support once you make the purchase, ION-MONITAR android app provides the same so that you can take quick, live, and immediate support.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2512/2512650.png",
      title: "100% Data Security",
      description:
        "We charge you money for the services we're delivering. We wouldn't sell your data ever and keep it highly protected all the time.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[url('/topbg11.avif')] bg-cover">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-slate-600 mb-6">WHAT MAKE US UNIQUE?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            5 minute Installation - It typically takes under three minutes to
            install the app on your smartphone. The process to install the app
            is very simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {uniqueFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-slate-50 to-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-600 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-12 py-28">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-3xl border border-slate-700   backdrop-blur-xl p-7 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]">
            {/* subtle glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/15 blur-2xl" />

            <div className="relative space-y-4">
              <div className="inline-flex h-21 w-21 items-center justify-center rounded-xl bg-linear-to-tr from-blue-600 to-sky-400 text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Monitor className="w-16 h-16" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-1">
                  Advanced Monitoring
                </h3>
                <div className="h-0.5 w-10 rounded-full bg-linear-to-r from-blue-500 to-sky-400" />
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Real-time tracking with comprehensive analytics and detailed
                reporting to keep you fully informed at a glance.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden rounded-3xl border border-slate-700 backdrop-blur-xl p-7 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]">
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-500/15 blur-2xl" />

            <div className="relative space-y-4">
              <div className="inline-flex h-21 w-21 items-center justify-center rounded-xl bg-linear-to-tr from-emerald-600 to-green-400 text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Users className="w-16 h-16" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-300 mb-1">
                  Expert Support Team
                </h3>
                <div className="h-0.5 w-10 rounded-full bg-linear-to-r from-emerald-500 to-lime-400" />
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                24/7 dedicated support from specialists who understand
                monitoring, installation, and real-world troubleshooting.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded-3xl border border-slate-700 backdrop-blur-xl p-7 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]">
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-500/18 blur-2xl" />

            <div className="relative space-y-4">
              <div className="inline-flex h-21 w-21 items-center justify-center rounded bg-linear-to-tr from-purple-600 to-pink-500 text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Zap className="w-16 h-16" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-300 mb-1">
                  Lightning Fast
                </h3>
                <div className="h-0.5 w-10 rounded-full bg-linear-to-r from-purple-500 to-pink-400" />
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Quick installation, instant sync, and fast dashboards so you can
                start monitoring in just a few minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
