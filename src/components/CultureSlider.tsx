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
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-16 px-4 md:px-8">
        {items.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const rotation = isLeft ? -8 : 8;

          return (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`flex-1 text-center md:${
                  isLeft ? "text-left" : "text-right"
                }`}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2">
                  {item.title}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
                  {item.subtitle}
                </p>
              </div>

              <div
                className="flex-1 group cursor-pointer w-full max-w-md md:max-w-none"
                style={{
                  transform:
                    typeof window !== "undefined" && window.innerWidth >= 768
                      ? `rotate(${rotation}deg)`
                      : "rotate(0deg)",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotate(0deg) scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotate(${rotation}deg) scale(1)`;
                }}
              >
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
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
