type CTAItem = {
    img: string;
    label: string;
  };
  
  export default function HorizontalCTA() {
    const items: CTAItem[] = [
      {
        img: "/24x7.jpg",
        label: "24/7 Availability",
      },
      {
        img: "/office.png",
        label: "Physical Office",
      },
      {
        img: "/private.jpg",
        label: "Committed to Confidentiality",
      },
      {
        img: "/sup.png",
        label: "24/7 Phone Support",
      },
    ];
  
    return (
      <section className="py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div 
                key={index}
                className="
                  flex flex-col items-center text-center
                  border border-gray-200
                  bg-slate-100
                  rounded p-5 sm:p-6
                  hover:-translate-y-4  
                  transition-all duration-300
                "
              >
                {/* Image */}
                <div className="mb-3 sm:mb-4 w-50 h-50  overflow-hidden rounded">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                </div>
  
                {/* Label */}
                <span className="text-black text-sm sm:text-base font-semibold leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  