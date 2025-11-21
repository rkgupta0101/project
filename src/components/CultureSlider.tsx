import Image from "next/image";

type CultureItem = {
  id: number;
  title: string;
  subtitle: string;
  imageSrc: string;
};

type CultureSliderProps = {
  items: CultureItem[];
};

export function CultureSlider({ items }: CultureSliderProps) {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16 px-4 sm:px-6 md:px-8">
        {items.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const rotation = isLeft ? -8 : 8;

          return (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`flex-1 text-center md:${
                  isLeft ? "text-left" : "text-right"
                } px-2`}
              >
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-400">
                  {item.subtitle}
                </p>
              </div>

              <div
                className="flex-1 group cursor-pointer w-full max-w-sm sm:max-w-md md:max-w-none"
                style={{
                  transform:
                    typeof window !== "undefined" && window.innerWidth >= 768
                      ? `rotate(${rotation}deg)`
                      : "rotate(0deg)",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  if (
                    typeof window !== "undefined" &&
                    window.innerWidth >= 768
                  ) {
                    e.currentTarget.style.transform =
                      "rotate(0deg) scale(1.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (
                    typeof window !== "undefined" &&
                    window.innerWidth >= 768
                  ) {
                    e.currentTarget.style.transform = `rotate(${rotation}deg) scale(1)`;
                  }
                }}
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover blur-sm group-hover:blur-none transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
