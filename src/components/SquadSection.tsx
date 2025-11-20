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
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    onNext();
    setTimeout(() => setIsAnimating(false), 700);
  };

  const currentIndex = allSquads.findIndex((s) => s.id === current.id);
  const prevSquad =
    allSquads[(currentIndex - 1 + allSquads.length) % allSquads.length];
  const prevSquad2 =
    allSquads[(currentIndex - 2 + allSquads.length) % allSquads.length];
  const nextSquad = allSquads[(currentIndex + 1) % allSquads.length];
  const nextSquad2 = allSquads[(currentIndex + 2) % allSquads.length];

  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Background decoration circles */}
      <div className="hidden md:block absolute left-10 top-20 w-64 h-64 rounded-full opacity-20 blur-2xl bg-blue-500/20" />
      <div className="hidden md:block absolute right-10 top-20 w-64 h-64 rounded-full opacity-20 blur-2xl bg-purple-500/20" />
      <div className="hidden md:block absolute left-20 bottom-32 w-48 h-48 rounded-full opacity-15 blur-2xl bg-teal-500/20" />
      <div className="hidden md:block absolute right-20 bottom-32 w-48 h-48 rounded-full opacity-15 blur-2xl bg-pink-500/20" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-12 md:mb-20 tracking-wide">
          Meet Our Starclinch Squads
        </h2>

        <div className="relative">
          {/* Arrow Buttons */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all backdrop-blur-sm text-lg md:text-xl disabled:opacity-50 disabled:cursor-not-allowed border border-gray-700/50 shadow-lg"
            aria-label="Previous squad"
          >
            ←
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all backdrop-blur-sm text-lg md:text-xl disabled:opacity-50 disabled:cursor-not-allowed border border-gray-700/50 shadow-lg"
            aria-label="Next squad"
          >
            →
          </button>

          {/* Inverted U Layout Container */}
          <div className="relative flex flex-col items-center gap-6 lg:gap-8 border-t border-l border-r border-gray-700/30 rounded-t-3xl pt-8 px-4 md:px-8 lg:px-12">
            {/* Position 1 - Top Center - Main Square Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`current-${current.id}`}
                initial={{
                  opacity: 0,
                  x: direction === "right" ? 200 : -200,
                  y: direction === "right" ? 100 : 100,
                  scale: 0.3,
                }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  x: direction === "right" ? -200 : 200,
                  y: 100,
                  scale: 0.3,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex flex-col items-center gap-3 md:gap-4 mb-12 lg:mb-20"
              >
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
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
                  className="inline-flex items-center rounded-full bg-teal-900/50 px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm text-teal-300 border border-teal-700/50 backdrop-blur-sm"
                >
                  {current.members} Members
                </motion.span>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-light text-center tracking-wide"
                >
                  {current.name}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="text-center text-sm sm:text-base md:text-base text-gray-400 leading-relaxed max-w-md px-4"
                >
                  {current.description}
                </motion.p>

                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  href="#"
                  className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-sm md:text-base group"
                >
                  <span>{current.note}</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    ▶
                  </span>
                </motion.a>
              </motion.div>
            </AnimatePresence>

            {/* Positions 2 & 3 - Middle Row - 2 Circular Thumbnails */}
            <div className="hidden md:flex items-center justify-between w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl px-4">
              {/* Position 2 - Middle Left */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`prev2-${prevSquad2.id}`}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: direction === "right" ? -100 : 0,
                    y: direction === "right" ? 80 : -80,
                  }}
                  animate={{ opacity: 0.6, scale: 1, x: 0, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    x: direction === "right" ? 0 : 100,
                    y: direction === "right" ? -80 : 80,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden flex-shrink-0 -translate-y-6 lg:-translate-y-8"
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={`next2-${nextSquad2.id}`}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: direction === "right" ? 0 : 100,
                    y: direction === "right" ? -80 : 80,
                  }}
                  animate={{ opacity: 0.6, scale: 1, x: 0, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    x: direction === "right" ? -100 : 0,
                    y: direction === "right" ? 80 : -80,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden flex-shrink-0 -translate-y-6 lg:-translate-y-8"
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
            <div className="hidden md:flex items-center justify-between w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl px-4">
              {/* Position 4 - Bottom Left */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`prev-${prevSquad.id}`}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: direction === "right" ? -150 : -80,
                    y: direction === "right" ? 0 : -120,
                  }}
                  animate={{ opacity: 0.6, scale: 1, x: 0, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    x: direction === "right" ? 80 : 150,
                    y: direction === "right" ? -120 : 0,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                  className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden flex-shrink-0 -translate-y-10 lg:-translate-y-12"
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={`next-${nextSquad.id}`}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: direction === "right" ? 80 : 150,
                    y: direction === "right" ? -120 : 0,
                  }}
                  animate={{ opacity: 0.6, scale: 1, x: 0, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    x: direction === "right" ? -150 : -80,
                    y: direction === "right" ? 0 : -120,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                  className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden flex-shrink-0 -translate-y-10 lg:-translate-y-12"
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
