import Image from "next/image";

type Squad = {
  id: number;
  name: string;
  members: number;
  description: string;
  note: string;
  imageSrc: string;
};

type SquadSectionProps = {
  current: Squad;
  onPrev: () => void;
  onNext: () => void;
  decorationImages: string[];
};

export function SquadSection({
  current,
  onPrev,
  onNext,
  decorationImages,
}: SquadSectionProps) {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      <div className="hidden md:block absolute left-10 top-20 w-64 h-64 rounded-full opacity-30">
        <Image
          src={decorationImages[0]}
          alt="decoration"
          fill
          className="object-cover rounded-full blur-sm"
        />
      </div>
      <div className="hidden md:block absolute right-10 top-20 w-64 h-64 rounded-full opacity-30">
        <Image
          src={decorationImages[1]}
          alt="decoration"
          fill
          className="object-cover rounded-full blur-sm"
        />
      </div>
      <div className="hidden md:block absolute left-20 bottom-32 w-48 h-48 rounded-full opacity-20">
        <Image
          src={decorationImages[2]}
          alt="decoration"
          fill
          className="object-cover rounded-full blur-sm"
        />
      </div>
      <div className="hidden md:block absolute right-20 bottom-32 w-48 h-48 rounded-full opacity-20">
        <Image
          src={decorationImages[3]}
          alt="decoration"
          fill
          className="object-cover rounded-full blur-sm"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-10 md:mb-20">
          Meet Our Starclinch Squads
        </h2>

        <div className="relative flex items-center justify-center">
          <button
            onClick={onPrev}
            className="absolute left-0 z-10 flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors text-lg md:text-xl"
          >
            ←
          </button>

          <button
            onClick={onNext}
            className="absolute right-0 z-10 flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors text-lg md:text-xl"
          >
            →
          </button>

          <div className="flex flex-col items-center gap-4 md:gap-8 max-w-2xl px-12 sm:px-16 md:px-20">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500">
              <Image
                key={current.id}
                src={current.imageSrc}
                alt={current.name}
                fill
                className="object-cover"
              />
            </div>

            <span className="inline-flex items-center rounded-full bg-teal-900/40 px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm text-teal-300 border border-teal-700/50">
              {current.members} Members
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center">
              {current.name}
            </h3>

            <p className="text-center text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed px-2">
              {current.description}
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-sm md:text-base"
            >
              {current.note}
              <span>▶</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
