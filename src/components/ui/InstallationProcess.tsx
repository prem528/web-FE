import { useEffect, useState, useMemo } from "react";
import Loaders from "./Loaders";
 
export type installationProcess = {
  id: number;
  name: string;
  youtube_url: string;
  heading: string;
  li: string;
};

export default function InstallationProcess({ data }: { data: installationProcess[] }) {

  const [lodding, setLodding] = useState<boolean>(true);
  const [items, setItems] = useState<installationProcess[]>([]);
  const [selectedName, setSelectedName] = useState<string | null>(null);


  useEffect(() => {
    setItems(data)
    setSelectedName(data[0].name);
    setLodding(false);
  }, [data])

  // pick single selected item (safer than filter()[0])
  const selectedItem = useMemo(
    () => items.find((d) => d.name === selectedName) || null,
    [items, selectedName]
  );

  if (lodding) {
    return (
      <Loaders />
    )
  }


  function updateselectedName(data: string) {
    setLodding(true)
    setSelectedName(data)
    setLodding(false)
  }

  return (
    <main className="mx-auto w-[90%] h-auto max-w-6xl  py-5">
      {/* Header */}
      <header className="mb-6 sm:mb-8 text-center px-4 sm:px-6 lg:px-8 py-10 mt-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          INSTALLATION
          <span className="font-extrabold text-blue-500 ml-2">PROCESS</span>
        </h1>
        <p className="mx-auto mt-3 max-w-3xl rounded-md border border-red-200/30 bg-red-50/60 px-3 py-2 text-xs sm:text-sm text-red-700 dark:border-red-500/30 dark:bg-red-900/30 dark:text-red-200">
          <span className="font-semibold">Important:</span> Disable{" "}
          <strong>Play Protect Settings</strong> before starting the app
          installation.
        </p>
      </header>

      {/* Names Row (chips) — horizontal scroll on small screens */}
      <div className="-mx-4 sm:mx-0 overflow-x-auto pb-2">
        <div className="mx-4 sm:mx-0 flex gap-2 flex-nowrap sm:flex-wrap whitespace-nowrap">
          {items.map((data) => {
            const isActive = data.name === selectedName;
            return (
              <button
                key={data.id}
                onClick={() => updateselectedName(data.name)}
                className={[
                  "flex-none px-4 py-1 rounded-full text-sm font-medium border shadow-sm transition",
                  isActive
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200",
                ].join(" ")}
              >
                {data.name}
              </button>
            );
          })}
        </div>
      </div>



      {!lodding && items.length === 0 && (
        <div className="mt-10 text-center text-slate-600">
          No installation items found.
        </div>
      )}

      {!lodding && items.length > 0 && selectedItem && (
        <div className="mt-6 sm:mt-8">
          {/* Video Section */}
          <section className="mb-6 w-auto sm:mb-10 flex justify-center items-center">
            <div className="relative w-full  aspect-video">
              <iframe
                className="absolute inset-0 size-full rounded-lg"
                src={selectedItem.youtube_url}
                title={`How To Install ${selectedItem.name}`}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </section>

          <div className="flex flex-col  ">

            <h3 className="text-2xl md:text-4xl font-semibold mb-3 text-black lg:ml-8">
              {selectedItem.heading} Devices
            </h3>
            <div
              className="
                  w-full
                 installationProcess
                 text-white
                 font-sans
                 ml-8
                "
              dangerouslySetInnerHTML={{ __html: selectedItem.li }}
            />
          </div>
        </div>
      )}
    </main>
  );
}




