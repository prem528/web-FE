import { Calendar, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const SOFT_EASE = [0.25, 1, 0.3, 1] as [number, number, number, number];

const HistorySection = () => {
  return (
    <section className="relative py-20 lg:px-6 overflow-hidden">
      {/* Background gradient + glow */}
      <div className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(to_bottom_right,rgba(148,163,184,0.25)_1px,transparent_1px)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Small tag */}
        <div className="mb-6 flex justify-center lg:justify-start">
          <span className="inline-flex items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-800/70 px-4 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
            Our Journey
          </span>
        </div>

        {/* Whole block slides up on scroll */}
        <motion.div
          className="grid lg:grid-cols-[1.15fr_minmax(0,1fr)] gap-14 lg:gap-20 items-center"
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: SOFT_EASE }}
          viewport={{ once: true, amount: 0.35 }}
        >
          {/* LEFT CONTENT CARD */}
          <div className="relative border border-slate-700 rounded-xl p-8 sm:p-10 bg-slate-900/30 backdrop-blur-xl">
            <div className="relative rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center">
                  <Calendar className="w-10 h-10 text-cyan-600" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50">
                    The Original Since 2012
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-[15px] text-slate-300 leading-relaxed">
                <p>
                  We started our journey under the name{" "}
                  <span className="font-semibold text-slate-100">Oneway</span>{" "}
                  back in 2012. Over time, Oneway became a trusted brand in this
                  industry, setting strong foundations for what we do today.
                </p>

                <p>
                  Later,{" "}
                  <span className="font-semibold text-slate-100">ONEPSR</span>{" "}
                  was recognized with an India award together with{" "}
                  <span className="font-semibold text-slate-100">
                    ION-MONITOR
                  </span>
                  , reflecting our focus on innovation and real-world
                  reliability.
                </p>

                <p>
                  At ION-MONITOR, we understand what makes mobile monitoring
                  truly dependable. We learned early that ordinary phone
                  monitoring apps stopped working long ago – and we&apos;ve been
                  improving our technology ever since.
                </p>

                <p>
                  Choose ION-MONITOR and you get the innovation, reliability,
                  and quality that come from{" "}
                  <span className="font-semibold text-slate-100">
                    10+ years of experience
                  </span>{" "}
                  and millions of users worldwide.
                </p>
              </div>

              {/* STATS */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-5 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div className="text-2xl font-bold text-slate-50 leading-tight">
                    10+ Years
                  </div>
                  <div className="text-xs text-cyan-100/80 mt-1 uppercase tracking-[0.16em]">
                    Industry Experience
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-5 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div className="text-2xl font-bold text-slate-50 leading-tight">
                    10k+ Users
                  </div>
                  <div className="text-xs text-emerald-100/80 mt-1 uppercase tracking-[0.16em]">
                    Trusted Worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative lg:flex justify-center lg:justify-end hidden">
            <div className="relative rounded-[32px]">
              <img
                src="https://img.freepik.com/free-vector/company-employees-use-web-search-find-ideas-doing-business-company_1150-43196.jpg?w=740"
                alt="Monitoring Preview"
                width={520}
                height={420}
                className="w-full rounded object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection;
