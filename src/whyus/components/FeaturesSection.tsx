
const FeaturesSection = () => {
 
  return (
    <section
      className="relative py-10 px-6 overflow-hidden"
      style={{
        backgroundImage: `url('topbg10.avif')`,
        backgroundBlendMode: "soft-light",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "",
      }}
    >
      <div className="relative max-w-7xl mx-auto py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side card*/}
          <div className="relative">
            <div className="relative overflow-hidden rounded border border-slate-200">
              <img
                src="/customer.jpg"
                alt="ION-MONITOR Preview"
                className="w-full h-150 object-cover"
              />
            </div>
          </div>

          {/* Right side card */}
          <div className="space-y-6 ml-12 border border-slate-600 p-8 rounded-2xl py-6 pb-18">
            {/* Label */}
            <div className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 shadow-sm">
              Human-first support
            </div>

            {/* Heading */}
            <div className="space-y-10">
              <h2 className="text-5xl tracking-tight text-slate-200 leading-tight">
                Things we do <span className="text-blue-600">better</span> than
                ordinary apps.
              </h2>
              <p className="max-w-xl text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
                ION-MONITOR isn’t just another dashboard. It’s a{" "}
                <span className="font-medium text-slate-100">
                  complete monitoring experience
                </span>{" "}
                backed by real people who respond, listen and take action when
                you need help. ION-MONITOR does far more than what ordinary
                monitoring apps deliver. Most apps stop at basic tracking,
                limited features, and zero real support once you make the
                purchase. In contrast, we focus on reliability, human-first
                assistance, and real-world performance. Our system is built to
                give you accurate data, faster syncing, and deeper
                insights—without the glitches, delays, or false reports common
                in regular apps. With 24/7 expert support, a real physical
                office, and industry-leading technology, we ensure that you
                always stay informed, connected, and fully in control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
