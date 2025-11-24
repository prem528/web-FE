import { Check } from "lucide-react";
import { motion } from "framer-motion";

const SOFT_EASE = [0.25, 1, 0.3, 1] as [number, number, number, number];

const HeroSection = () => {
  const features = [
    "24/7 Live Chat Support",
    "24/7 Phone Call Support",
    "Physical Office",
    "High Touch Communication",
    "Committed to Quality",
  ];

  return (
    <section className="text-white py-20 px-6 relative overflow-hidden bg-[url('/topbg11.avif')] bg-cover">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-10">
        {/* Left content – smooth fade/slide up */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: SOFT_EASE }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div>
            <h1 className="text-5xl text-gray-100 mb-6 leading-tight">
              WHY CHOOSE US?
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              There are lots of monitoring solutions out there and they all look
              similar, so why ask yourself:
            </p>
            <div className="bg-slate-700/50 p-6 rounded-lg border-l-4 border-amber-500">
              <p className="text-xl italic">
                "If all these products are the same than,{" "}
                <span className="text-amber-400 font-semibold">
                  why should I choose the ion-MONITOR
                </span>
                ?"
              </p>
              <p className="text-sm text-slate-400 mt-2">- user</p>
            </div>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-lg"
              >
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right image */}
        <div
          className="relative z-10 flex justify-center lg:justify-end"
        >
          <img
            src="/userprofile.png"
            alt="Monitoring Preview"
            width={550}
            height={150}
            className="rounded-t-[24px]"
          />
          {/* Bottom gradient fade */}
          <div
            className="pointer-events-none absolute inset-x-0 -bottom-1 h-20
           bg-linear-to-b from-transparent via-[#000000]/99 to-[#0a0c12] backdrop"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
