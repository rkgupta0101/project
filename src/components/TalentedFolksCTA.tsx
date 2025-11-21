export function TalentedFolksCTA() {
  const tags = [
    "Focused",
    "Collaborative",
    "United",
    "Vibrant",
    "Dynamic",
    "Motivated",
  ];

  return (
    <section className="relative py-10 sm:py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[250px] h-[250px] xs:w-[300px] xs:h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-radial from-purple-900/50 via-purple-900/20 to-transparent blur-2xl sm:blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute right-0 top-0 w-[250px] h-[250px] xs:w-[300px] xs:h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-radial from-purple-800/50 via-purple-900/20 to-transparent blur-2xl sm:blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="hidden md:block w-[85%] max-w-[1000px] lg:max-w-[1300px] h-[400px] sm:h-[480px] md:h-[520px] lg:h-[580px] rounded-[100px] sm:rounded-[140px] md:rounded-[160px] lg:rounded-[180px] border border-gray-700/40" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-center">
          <div className="relative mb-1 sm:mb-2">
            <p className="text-pink-400 text-sm xs:text-base sm:text-lg md:text-xl italic font-light">
              we are the team of
            </p>
            <svg
              width="60"
              height="40"
              viewBox="0 0 80 50"
              className="hidden sm:block absolute -right-12 sm:-right-14 md:-right-16 -top-1 sm:-top-2"
              fill="none"
            >
              <path
                d="M 10 45 Q 30 15, 65 25"
                stroke="#ec4899"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 60 20 L 65 25 L 63 30"
                stroke="#ec4899"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative w-full flex justify-center items-center mb-3 sm:mb-4">
            <div
              className="absolute left-[1%] xs:left-[2%] sm:left-[5%] md:left-[8%] -top-1 xs:-top-2 sm:-top-3 md:-top-4"
              style={{ transform: "rotate(-8deg)" }}
            >
              <span className="inline-block px-2 py-1 xs:px-2.5 xs:py-1.5 sm:px-4 sm:py-1.5 md:px-6 md:py-2 lg:px-7 lg:py-3 rounded-full border border-gray-600/70 md:border-2 bg-transparent text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-300">
                Fun
              </span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light tracking-tight px-2 sm:px-4">
              20+Talented Folks
            </h2>

            <div
              className="absolute right-[1%] xs:right-[2%] sm:right-[5%] md:right-[8%] top-1 xs:top-2 sm:top-3 md:top-4"
              style={{ transform: "rotate(6deg)" }}
            >
              <span className="inline-block px-2 py-1 xs:px-2.5 xs:py-1.5 sm:px-4 sm:py-1.5 md:px-6 md:py-2 lg:px-7 lg:py-3 rounded-full border border-gray-600/70 md:border-2 bg-transparent text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-300">
                Inclusive
              </span>
            </div>
          </div>

          <p className="max-w-3xl text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mt-3 sm:mt-4 md:mt-6 lg:mt-8 px-4 sm:px-6">
            From passion-driven dedication to impactful contribution,
            <br className="hidden sm:block" />
            we do it all here. We are growing and will be excited to hear
            <br className="hidden sm:block" />
            from you !
          </p>

          <button className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 inline-flex items-center gap-2 md:gap-3 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 px-6 py-2.5 xs:px-7 xs:py-3 sm:px-8 sm:py-3 md:px-10 md:py-3.5 lg:px-12 lg:py-4 text-sm xs:text-base sm:text-base md:text-lg font-medium hover:scale-105 transition-transform shadow-lg">
            Join our team →
          </button>

          <div className="mt-8 sm:mt-10 md:mt-16 lg:mt-20 flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 opacity-40 px-2">
            {tags.map((tag, idx) => (
              <span
                key={tag}
                className="rounded-full border border-gray-600 md:border-2 bg-transparent px-3 py-1 xs:px-3.5 xs:py-1.5 sm:px-4 sm:py-1.5 md:px-6 md:py-2 lg:px-7 lg:py-2.5 text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-400"
                style={{
                  transform:
                    typeof window !== "undefined" && window.innerWidth >= 768
                      ? `rotate(${[-8, 4, -5, 6, -4, 7][idx]}deg)`
                      : "rotate(0deg)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
