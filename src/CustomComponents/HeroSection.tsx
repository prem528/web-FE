

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white bg-[url('/square.svg')] bg-cover">
      {/* <div className="bg-[url('/top-r.webp')]bg-cover"> */}



      {/* Floating stars / particles effect */}
      <div className="absolute inset-0"></div>
      

      <div className="relative max-w-7xl mx-auto px-6 lg:px-0 py-24 md:py-36 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left text section */}
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-slate-500">
          Confident Parenting Starts with Smart Monitoring
  
           </h1>
          <p className="text-lg text-slate-300 mb-8">
            Chat, chill, and connect — create your own community or hang out with
            friends. Build your own space to talk, play, and share your world.
          </p>         
        </div>

        {/* Right image */}
        <div className="relative py-10">
          <img
            src="/1.png"
            alt="Chat preview"
            className="w-[900px] drop-shadow-2xl max-w-2xl"
          />
       
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
