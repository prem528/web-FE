

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white bg-[url('/square.svg')] bg-cover ">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-12">

        {/* Left text section – smooth slide up on first visit */}
        <div
          className="max-w-4xl"
        >
          {/* Heading */}
          <h1
            className="text-3xl lg:text-5xl font-semibold leading-tight mb-6 mt-8 text-slate-200 text-left"
          >
            Confident Parenting Starts with Smart Monitoring
          </h1>

          {/* Paragraph */}
          <p
         
            className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto md:mx-0 text-left"
          >
            Monitor calls, chats, apps, and location in real time. Stay connected,
            stay informed, and keep your child safe in the digital world – all from
            one powerful dashboard.
          </p>
        </div>

        {/* Right image – no animation, stays stable */}
        <div className="relative py-6 sm:py-10 w-full flex justify-center md:justify-end">
          <img
            src="/222.png"
            alt="Chat preview"
            className="w-full max-w-md sm:max-w-lg lg:max-w-2xl drop-shadow-2xl"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
