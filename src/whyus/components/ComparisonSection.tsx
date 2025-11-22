import { Check, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ComparisonSection = () => {
  const competitors = [
    { name: "ION-MONITOR", color: "bg-blue-600" },
    { name: "mSpy", color: "bg-orange-500" },
    { name: "Spyzie", color: "bg-red-500" },
    { name: "Cocospy", color: "bg-green-500" },
    { name: "Spyera", color: "bg-purple-500" },
  ];

  // Manual matrix: [ION-MONITOR, mSpy, Spyzie, Cocospy, Spyera]
  const comparisonData = [
    { feature: "Host Call Records", values: [true, true, false, false, true] },
    {
      feature: "Live Call Install",
      values: [true, false, false, false, false],
    },
    {
      feature: "Wi-Fi Call Recording",
      values: [true, false, true, false, false],
    },
    {
      feature: "Record Phone Surroundings",
      values: [true, true, false, true, true],
    },
    {
      feature: "Live Photos from Phone Camera",
      values: [true, false, false, true, false],
    },
    {
      feature: "Live View from Phone Camera",
      values: [true, false, false, false, false],
    },
    {
      feature: "Remote Mobile Software Control",
      values: [true, true, false, true, true],
    },
    { feature: "SIM Live Chat", values: [true, false, false, false, false] },
    {
      feature: "Number of Subjects Supported",
      values: [true, true, true, true, false],
    },
  ];

  return (
    <section className="pb-20 px-4 sm:px-6 lg:px-10 relative">
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-linear-to-r from-sky-600 via-cyan-600 to-indigo-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.30)]">
            COMPARE ION-MONITOR FEATURES VS THE REST
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-200/80 max-w-3xl mx-auto leading-relaxed">
            ION-MONITOR gives you more Real Investigation ower in every plan.
            Compare the features below and see why professionals prefer a tool
            that doesn’t leave evidence to luck.
          </p>
        </div>

        {/* Glassmorphism Comparison Card */}
        <div className="relative rounded-lg border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.75)] overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-900/60 text-slate-50">
                  <th className="text-left px-4 sm:px-6 py-4 sm:py-5 font-semibold text-xs sm:text-sm uppercase tracking-[0.12em] text-slate-300">
                    Features
                  </th>
                  {competitors.map((competitor, index) => (
                    <th
                      key={competitor.name}
                      className={`text-center px-4 sm:px-6 py-4 sm:py-5 font-semibold text-xs sm:text-sm uppercase tracking-[0.14em] 
                        ${
                          index === 0
                            ? "bg-linear-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_30px_rgba(56,189,248,0.6)]"
                            : "bg-slate-900/60 text-slate-200"
                        }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span>{competitor.name}</span>
                        {index === 0 && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-normal text-cyan-100">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-300 drop-shadow-[0_0_8px_rgba(250,204,21,0.9)]" />
                            Recommended
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {comparisonData.map((row, rowIndex) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-white/5 ${
                      rowIndex % 2 === 0
                        ? "bg-white/5 dark:bg-slate-900/40"
                        : "bg-white/2 dark:bg-slate-900/20"
                    } hover:bg-cyan-500/10 transition-colors duration-200`}
                  >
                    <td className="px-4 sm:px-6 py-4 sm:py-5 font-medium text-slate-100 text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    {row.values.map((value, colIndex) => {
                      const isIon = colIndex === 0;
                      return (
                        <td
                          key={colIndex}
                          className="px-4 sm:px-6 py-4 sm:py-5 text-center"
                        >
                          <div
                            className={`inline-flex items-center justify-center w-8 h-8 rounded-full border ${
                              value
                                ? isIon
                                  ? "bg-emerald-400/15 border-emerald-300/60 shadow-[0_0_18px_rgba(52,211,153,0.65)]"
                                  : "bg-emerald-500/10 border-emerald-300/40"
                                : "bg-rose-500/10 border-rose-400/40"
                            }`}
                          >
                            {value ? (
                              <Check
                                className={`w-4 h-4 ${
                                  isIon
                                    ? "text-emerald-300"
                                    : "text-emerald-400"
                                }`}
                              />
                            ) : (
                              <X className="w-4 h-4 text-rose-400" />
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Button
            className="w-full sm:w-auto h-12 bg-linear-to-r from-cyan-500 via-sky-500 to-blue-600 
                       hover:from-cyan-400 hover:via-sky-400 hover:to-blue-500
                       text-white font-semibold rounded-lg text-base sm:text-lg px-10 py-3
                       shadow-[0_18px_40px_rgba(37,99,235,0.75)] border border-cyan-300/60"
          >
            TRY NOW
          </Button>

          <Link to="/pricing" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto h-12 bg-white/5 hover:bg-white/10 
                         border border-cyan-400/70 text-cyan-200 hover:text-cyan-100
                         font-semibold rounded-lg text-base sm:text-lg px-10 py-3
                         backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.8)]"
            >
              BUY NOW
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
