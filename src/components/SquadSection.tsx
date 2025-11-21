"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  allSquads: Squad[];
};

export function SquadSection({
  current,
  onPrev,
  onNext,
  decorationImages,
  allSquads,
}: SquadSectionProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    onPrev();
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    onNext();
    setTimeout(() => setIsAnimating(false), 600);
  };

  const currentIndex = allSquads.findIndex((s) => s.id === current.id);
  const prevSquad =
    allSquads[(currentIndex - 1 + allSquads.length) % allSquads.length];
  const prevSquad2 =
    allSquads[(currentIndex - 2 + allSquads.length) % allSquads.length];
  const nextSquad = allSquads[(currentIndex + 1) % allSquads.length];
  const nextSquad2 = allSquads[(currentIndex + 2) % allSquads.length];

  return (
    <section className="relative py-8 sm:py-10 md:py-16 lg:py-24 xl:py-32 overflow-hidden px-3 sm:px-4 md:px-6">
      {/* Background decoration circles */}
      <div className="hidden lg:block absolute left-10 top-20 w-48 h-48 lg:w-64 lg:h-64 rounded-full opacity-20 blur-2xl bg-blue-500/20" />
      <div className="hidden lg:block absolute right-10 top-20 w-48 h-48 lg:w-64 lg:h-64 rounded-full opacity-20 blur-2xl bg-purple-500/20" />
      <div className="hidden lg:block absolute left-20 bottom-32 w-36 h-36 lg:w-48 lg:h-48 rounded-full opacity-15 blur-2xl bg-teal-500/20" />
      <div className="hidden lg:block absolute right-20 bottom-32 w-36 h-36 lg:w-48 lg:h-48 rounded-full opacity-15 blur-2xl bg-pink-500/20" />

      <div className="relative max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
        <h2 className="text-center text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 tracking-wide px-2 sm:px-4">
          Meet Our Starclinch Squads
        </h2>

        <div className="relative">
          {/* Arrow Buttons */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-0 xs:left-1 sm:left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 flex h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all backdrop-blur-sm text-base xs:text-lg sm:text-lg md:text-xl disabled:opacity-50 disabled:cursor-not-allowed border border-gray-700/50 shadow-lg"
            aria-label="Previous squad"
          >
            ←
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-0 xs:right-1 sm:right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 flex h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all backdrop-blur-sm text-base xs:text-lg sm:text-lg md:text-xl disabled:opacity-50 disabled:cursor-not-allowed border border-gray-700/50 shadow-lg"
            aria-label="Next squad"
          >
            →
          </button>

          {/* Inverted U Layout Container */}
          <div className="relative flex flex-col items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 border-t border-l border-r border-gray-700/30 rounded-t-2xl sm:rounded-t-3xl pt-6 sm:pt-8 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
            {/* Position 1 - Top Center - Main Square Card */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`current-${current.id}`}
                initial={{
                  opacity: 1,
                  x: direction === "right" ? 300 : -300,
                  y: direction === "right" ? 150 : 150,
                  scale: 0.6,
                }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                exit={{
                  opacity: 1,
                  x: direction === "right" ? -300 : 300,
                  y: 150,
                  scale: 0.6,
                }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="flex flex-col items-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20"
              >
                <div className="relative w-44 h-44 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                  <Image
                    src={current.imageSrc}
                    alt={current.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="inline-flex items-center rounded-full bg-teal-900/50 px-3 xs:px-3.5 sm:px-4 md:px-5 lg:px-6 py-1 xs:py-1.5 sm:py-1.5 md:py-2 text-[10px] xs:text-xs sm:text-xs md:text-sm text-teal-300 border border-teal-700/50 backdrop-blur-sm"
                >
                  {current.members} Members
                </motion.span>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-center tracking-wide px-2"
                >
                  {current.name}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="text-center text-xs xs:text-sm sm:text-sm md:text-base text-gray-400 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md px-3 sm:px-4"
                >
                  {current.description}
                </motion.p>

                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  href="#"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-teal-400 hover:text-teal-300 transition-colors text-xs xs:text-sm sm:text-sm md:text-base group"
                >
                  <span>{current.note}</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    ▶
                  </span>
                </motion.a>
              </motion.div>
            </AnimatePresence>

            {/* Positions 2 & 3 - Middle Row - 2 Circular Thumbnails */}
            <div className="hidden md:flex items-center justify-between w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-3 sm:px-4">
              {/* Position 2 - Middle Left */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`prev2-${prevSquad2.id}`}
                  initial={{
                    opacity: 1,
                    scale: 1,
                    x: direction === "right" ? -200 : 200,
                    y: direction === "right" ? 100 : -100,
                  }}
                  animate={{ opacity: 0.6, scale: 1, x: 0, y: 0 }}
                  exit={{
                    opacity: 1,
                    scale: 1,
                    x: direction === "right" ? 200 : -200,
                    y: direction === "right" ? -100 : 100,
                  }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="relative w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full overflow-hidden flex-shrink-0 -translate-y-4 md:-translate-y-5 lg:-translate-y-6 xl:-translate-y-8"
                  style={{ filter: "blur(2px) brightness(0.7)" }}
                >
                  <Image
                    src={prevSquad2.imageSrc}
                    alt={prevSquad2.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Position 3 - Middle Right */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`next2-${nextSquad2.id}`}
                  initial={{
                    opacity: 1,
                    scale: 1,
                    x: direction === "right" ? 200 : -200,
                    y: direction === "right" ? -100 : 100,
                  }}
                  animate={{ opacity: 0.6, scale: 1, x: 0, y: 0 }}
                  exit={{
                    opacity: 1,
                    scale: 1,
                    x: direction === "right" ? -200 : 200,
                    y: direction === "right" ? 100 : -100,
                  }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="relative w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full overflow-hidden flex-shrink-0 -translate-y-4 md:-translate-y-5 lg:-translate-y-6 xl:-translate-y-8"
                  style={{ filter: "blur(2px) brightness(0.7)" }}
                >
                  <Image
                    src={nextSquad2.imageSrc}
                    alt={nextSquad2.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Positions 4 & 5 - Bottom Row - 2 Circular Thumbnails */}
            <div className="hidden md:flex items-center justify-between w-full max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl px-3 sm:px-4">
              {/* Position 4 - Bottom Left */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`prev-${prevSquad.id}`}
                  initial={{
                    opacity: 1,
                    scale: 1,
                    x: direction === "right" ? -250 : 0,
                    y: direction === "right" ? 0 : -150,
                  }}
                  animate={{ opacity: 0.6, scale: 1, x: 0, y: 0 }}
                  exit={{
                    opacity: 1,
                    scale: 1,
                    x: direction === "right" ? 0 : 250,
                    y: direction === "right" ? -150 : 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="relative w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full overflow-hidden flex-shrink-0 -translate-y-6 md:-translate-y-8 lg:-translate-y-10 xl:-translate-y-12"
                  style={{ filter: "blur(2px) brightness(0.7)" }}
                >
                  <Image
                    src={prevSquad.imageSrc}
                    alt={prevSquad.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Position 5 - Bottom Right */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`next-${nextSquad.id}`}
                  initial={{
                    opacity: 1,
                    scale: 1,
                    x: direction === "right" ? 0 : 250,
                    y: direction === "right" ? -150 : 0,
                  }}
                  animate={{ opacity: 0.6, scale: 1, x: 0, y: 0 }}
                  exit={{
                    opacity: 1,
                    scale: 1,
                    x: direction === "right" ? -250 : 0,
                    y: direction === "right" ? 0 : -150,
                  }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="relative w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full overflow-hidden flex-shrink-0 -translate-y-6 md:-translate-y-8 lg:-translate-y-10 xl:-translate-y-12"
                  style={{ filter: "blur(2px) brightness(0.7)" }}
                >
                  <Image
                    src={nextSquad.imageSrc}
                    alt={nextSquad.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
