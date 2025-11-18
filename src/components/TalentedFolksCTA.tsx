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
    <section className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-radial from-purple-900/50 via-purple-900/20 to-transparent blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute right-0 top-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-radial from-purple-800/50 via-purple-900/20 to-transparent blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="hidden md:block w-[85%] max-w-[1300px] h-[580px] rounded-[180px] border border-gray-700/40" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          <div className="relative mb-2">
            <p className="text-pink-400 text-base sm:text-lg md:text-xl italic font-light">
              we are the team of
            </p>
            <svg
              width="80"
              height="50"
              viewBox="0 0 80 50"
              className="hidden sm:block absolute -right-16 -top-2"
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

          <div className="relative w-full flex justify-center items-center mb-4">
            <div
              className="absolute left-[2%] sm:left-[8%] -top-2 sm:-top-4"
              style={{ transform: "rotate(-8deg)" }}
            >
              <span className="inline-block px-3 py-1.5 sm:px-5 sm:py-2 md:px-7 md:py-3 rounded-full border border-gray-600/70 md:border-2 bg-transparent text-xs sm:text-sm md:text-base text-gray-300">
                Fun
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light tracking-tight px-2">
              20+Talented Folks
            </h2>

            <div
              className="absolute right-[2%] sm:right-[8%] top-2 sm:top-4"
              style={{ transform: "rotate(6deg)" }}
            >
              <span className="inline-block px-3 py-1.5 sm:px-5 sm:py-2 md:px-7 md:py-3 rounded-full border border-gray-600/70 md:border-2 bg-transparent text-xs sm:text-sm md:text-base text-gray-300">
                Inclusive
              </span>
            </div>
          </div>

          <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mt-4 md:mt-8 px-4">
            From passion-driven dedication to impactful contribution,
            <br className="hidden sm:block" />
            we do it all here. We are growing and will be excited to hear
            <br className="hidden sm:block" />
            from you !
          </p>

          <button className="mt-6 md:mt-10 inline-flex items-center gap-2 md:gap-3 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 px-8 py-3 md:px-12 md:py-4 text-base md:text-lg font-medium hover:scale-105 transition-transform shadow-lg">
            Join our team →
          </button>

          <div className="mt-10 md:mt-20 flex flex-wrap justify-center gap-4 md:gap-8 opacity-40">
            {tags.map((tag, idx) => (
              <span
                key={tag}
                className="rounded-full border border-gray-600 md:border-2 bg-transparent px-4 py-1.5 md:px-7 md:py-2.5 text-xs sm:text-sm md:text-base text-gray-400"
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
