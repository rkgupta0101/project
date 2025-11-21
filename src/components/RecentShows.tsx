import Image from "next/image";
import { useState, useEffect } from "react";

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
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [imageSrc, current.id]);

  const handlePrev = () => {
    setDirection("prev");
    onPrev();
  };

  const handleNext = () => {
    setDirection("next");
    onNext();
  };

  return (
    <section className="relative py-10 sm:py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full hidden md:block">
        <div className="absolute -left-[20%] top-8 md:top-12 w-[140%] -rotate-[15deg] overflow-hidden">
          <div className="ribbon-track whitespace-nowrap">
            <span className="ribbon-content inline-block text-white/30 text-lg md:text-xl lg:text-2xl tracking-[0.3em] md:tracking-[0.4em] font-light">
              HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
              HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 w-full h-full hidden md:block">
        <div className="absolute -right-[20%] bottom-8 md:bottom-12 w-[140%] -rotate-[15deg] overflow-hidden">
          <div className="ribbon-track-reverse whitespace-nowrap">
            <span className="ribbon-content inline-block text-white/30 text-base md:text-lg lg:text-xl tracking-[0.3em] md:tracking-[0.4em] font-light">
              HEADLINES OF TODAY ★ HEADLINES OF TODAY ★ HEADLINES OF TODAY ★
              HEADLINES OF TODAY ★ HEADLINES OF TODAY ★
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ribbonScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes ribbonScrollReverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @keyframes slideInFromRight { 
          from { 
            opacity: 0; 
            transform: translateX(100%); 
          } 
          to { 
            opacity: 1; 
            transform: translateX(0); 
          } 
        }
        @keyframes slideInFromLeft { 
          from { 
            opacity: 0; 
            transform: translateX(-100%); 
          } 
          to { 
            opacity: 1; 
            transform: translateX(0); 
          } 
        }
        @keyframes slideTextRight { 
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          } 
          to { 
            opacity: 1; 
            transform: translateX(0); 
          } 
        }
        @keyframes slideTextLeft { 
          from { 
            opacity: 0; 
            transform: translateX(-50px); 
          } 
          to { 
            opacity: 1; 
            transform: translateX(0); 
          } 
        }
        .ribbon-track { animation: ribbonScroll 25s linear infinite; }
        .ribbon-track-reverse { animation: ribbonScrollReverse 25s linear infinite; }
        .ribbon-content { padding: 0 50px; }
        .slide-next { animation: slideInFromRight 0.6s ease-out; }
        .slide-prev { animation: slideInFromLeft 0.6s ease-out; }
        .slide-text-next { animation: slideTextRight 0.6s ease-out; }
        .slide-text-prev { animation: slideTextLeft 0.6s ease-out; }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <h2 className="text-center text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 px-2 sm:px-4">
          Recent shows made star-
          <span className="block mt-1 sm:mt-2 md:mt-3 lg:mt-4 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light">
            studded via StarClinch
          </span>
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <button
            onClick={handlePrev}
            className="hidden md:flex flex-shrink-0 h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700 transition-colors text-lg md:text-xl lg:text-2xl border border-gray-700/40"
          >
            ←
          </button>

          <div
            className={`relative w-[200px] h-[200px] xs:w-[220px] xs:h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[420px] lg:h-[420px] xl:w-[500px] xl:h-[500px] overflow-hidden flex-shrink-0 ${
              isAnimating
                ? direction === "next"
                  ? "slide-next"
                  : "slide-prev"
                : ""
            }`}
            style={{ borderRadius: "50% 50% 0 0" }}
          >
            <Image
              src={imageSrc}
              alt={current.artist}
              fill
              className="object-cover"
            />
          </div>

          <div
            className={`flex-1 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 text-center md:text-left px-2 sm:px-4 md:px-0 ${
              isAnimating
                ? direction === "next"
                  ? "slide-text-next"
                  : "slide-text-prev"
                : ""
            }`}
          >
            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight">
              <span className="text-white">{current.artist}</span>{" "}
              <span className="text-gray-400 font-light">for</span>
            </p>
            <div className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed text-gray-400 font-light">
              an event hosted by XYZ
              <br />
              performed <span className="text-white font-normal">at</span>
              <br />
              Pune .
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-gray-400 text-xs xs:text-sm sm:text-sm md:text-base pt-2 sm:pt-3 md:pt-4">
              <span className="text-base xs:text-lg sm:text-lg md:text-xl">
                📅
              </span>
              <span>{current.date}</span>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="hidden md:flex flex-shrink-0 h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700 transition-colors text-lg md:text-xl lg:text-2xl border border-gray-700/40"
          >
            →
          </button>
        </div>

        <div className="flex md:hidden justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
          <button
            onClick={handlePrev}
            className="h-10 w-10 xs:h-11 xs:w-11 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700 transition-colors text-lg xs:text-xl sm:text-xl border border-gray-700/40"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="h-10 w-10 xs:h-11 xs:w-11 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700 transition-colors text-lg xs:text-xl sm:text-xl border border-gray-700/40"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
