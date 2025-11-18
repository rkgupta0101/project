import Image from "next/image";

type Show = {
  id: number;
  title: string;
  artist: string;
  description: string;
  date: string;
};

type RecentShowsProps = {
  current: Show;
  onPrev: () => void;
  onNext: () => void;
  imageSrc: string;
};

export function RecentShows({
  current,
  onPrev,
  onNext,
  imageSrc,
}: RecentShowsProps) {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full hidden md:block">
        <div className="absolute -left-[20%] top-12 w-[140%] -rotate-[15deg] overflow-hidden">
          <div className="ribbon-track whitespace-nowrap">
            <span className="ribbon-content inline-block text-white/30 text-xs tracking-[0.4em] font-light">
              HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
              HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 w-full h-full hidden md:block">
        <div className="absolute -right-[20%] bottom-12 w-[140%] rotate-[15deg] overflow-hidden">
          <div className="ribbon-track-reverse whitespace-nowrap">
            <span className="ribbon-content inline-block text-white/30 text-xs tracking-[0.4em] font-light">
              HEADLINES OF TODAY ★ HEADLINES OF TODAY ★ HEADLINES OF TODAY ★
              HEADLINES OF TODAY ★ HEADLINES OF TODAY ★
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ribbonScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes ribbonScrollReverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .ribbon-track { animation: ribbonScroll 25s linear infinite; }
        .ribbon-track-reverse { animation: ribbonScrollReverse 25s linear infinite; }
        .ribbon-content { padding: 0 50px; }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-20 px-2">
          Recent shows made star-studded via StarClinch
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <button
            onClick={onPrev}
            className="hidden md:flex flex-shrink-0 h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700 transition-colors text-xl md:text-2xl border border-gray-700/40"
          >
            ←
          </button>

          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={imageSrc}
              alt={current.artist}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 space-y-3 md:space-y-6 text-center md:text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
              <span className="text-white">{current.artist}</span>{" "}
              <span className="text-gray-400 font-light">for</span>
            </p>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-400 font-light">
              an event hosted by XYZ
              <br />
              performed <span className="text-white font-normal">at</span>
              <br />
              Pune .
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-gray-400 text-sm md:text-base pt-2 md:pt-4">
              <span className="text-lg md:text-xl">📅</span>
              <span>{current.date}</span>
            </div>
          </div>

          <button
            onClick={onNext}
            className="hidden md:flex flex-shrink-0 h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700 transition-colors text-xl md:text-2xl border border-gray-700/40"
          >
            →
          </button>
        </div>

        <div className="flex md:hidden justify-center gap-6 mt-6">
          <button
            onClick={onPrev}
            className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700 transition-colors text-xl border border-gray-700/40"
          >
            ←
          </button>
          <button
            onClick={onNext}
            className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700 transition-colors text-xl border border-gray-700/40"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
