

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white bg-[url('/square.svg')] bg-cover">

      {/* Floating stars / particles effect */}
      <div className="absolute inset-0"></div>
      

      <div className="relative max-w-7xl mx-auto px-6 lg:px-0 py-24 md:py-36 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left text section */}
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          Confident Parenting Starts with Smart Monitoring
  
           </h1>
          <p className="text-lg text-slate-300 mb-8">
            Chat, chill, and connect — create your own community or hang out with
            friends. Build your own space to talk, play, and share your world.
          </p>         
        </div>

        {/* Right image / illustration */}
        <div className="relative">
          <img
            src="/signupbg011.png"
            alt="Chat preview"
            className="w-[480px] md:w-[560px] drop-shadow-2xl rounded-xl"
          />
       
        </div>
      </div>
    </section>
  );
}
