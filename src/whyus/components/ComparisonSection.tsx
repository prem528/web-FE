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

  // Manual matrix: [ION-MONITAR, mSpy, Spyzie, Cocospy, Spyera]
  const comparisonData = [
    { feature: "Host call Records", values: [true, true, false, false, true] },
    {
      feature: "Live call Install",
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
      feature: "Live Photos and Phone Camera",
      values: [true, false, false, true, false],
    },
    {
      feature: "Live View and Phone Camera",
      values: [true, false, false, false, false],
    },
    {
      feature: "Remote Mobile Software",
      values: [true, true, false, true, true],
    },
    { feature: "SIM Live Chat", values: [true, false, false, false, false] },
    { feature: "Number of Subjects", values: [true, true, true, true, false] },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-20  ">
      <div className="max-w-7xl mx-auto px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl text-slate-500 mb-4">
            COMPARE ION-MONITAR FEATURES VS THE REST
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
            While IONMONITAR may seem a little more expensive than the
            competition, you get more features which ensures more evidence. Look
            at the feature list below and discover that ION-MONITAR is far the
            more demanding detective who leaves nothing to chance.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-x-auto mb-12">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-slate-600 text-white">
                <th className="text-left p-4 sm:p-6 font-bold text-sm sm:text-base">
                  Features
                </th>
                {competitors.map((competitor, index) => (
                  <th
                    key={index}
                    className={`text-center p-4 sm:p-6 font-bold text-sm sm:text-base ${
                      index === 0
                        ? "bg-linear-to-r from-cyan-500 to-blue-500"
                        : ""
                    }`}
                  >
                    {competitor.name}
                    {index === 0 && (
                      <Star className="w-5 h-5 inline ml-2 text-yellow-400" />
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`border-b border-slate-100 ${
                    rowIndex % 2 === 0 ? "bg-slate-50" : "bg-white"
                  } hover:bg-blue-50 transition-colors duration-200`}
                >
                  <td className="p-4 sm:p-6 font-medium text-slate-700 text-sm sm:text-base">
                    {row.feature}
                  </td>
                  {row.values.map((value, colIndex) => (
                    <td key={colIndex} className="p-4 sm:p-6 text-center">
                      <div
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          value ? "bg-green-100" : "bg-red-100"
                        }`}
                      >
                        {value ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <X className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Call to Action Buttons */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <Button className="w-full sm:w-auto bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-md text-xl sm:text-2xl px-10 py-6 min-w-[200px] cursor-pointer">
            TRY NOW
          </Button>
          <Link to="/pricing">
            <Button className="w-full sm:w-auto bg-transparent border border-white text-white hover:text-blue-400 hover:bg-transparent font-semibold rounded-md text-xl sm:text-2xl px-10 py-6 min-w-[200px] cursor-pointer">
              BUY NOW
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
