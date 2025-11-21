"use client";

import Image from "next/image";
import { useState } from "react";

type Category = {
  id: string;
  label: string;
  subtitle: string;
  cta: string;
  imageSrc: string;
};

type HeroCategoryProps = {
  category: Category;
  index: number;
  total: number;
  onNext: () => void;
  isRotating: boolean;
};

export function HeroCategory({
  category,
  index,
  total,
  onNext,
  isRotating,
}: HeroCategoryProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleExploreClick = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
      onNext();
    }, 1000);
  };

  return (
    <section className="relative pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 px-4">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 sm:-left-16 md:-left-20 lg:-left-32 -top-5 sm:-top-8 md:-top-10 lg:-top-20 h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(249,98,125,0.4),transparent_60%)] blur-2xl md:blur-3xl" />
        <div className="absolute -right-10 sm:-right-16 md:-right-20 lg:-right-32 bottom-0 h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 rounded-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,90,0.4),transparent_60%)] blur-2xl md:blur-3xl" />
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-0">
        <div className="relative w-full md:w-auto flex items-center justify-center md:justify-start md:flex-1 md:pl-8 lg:pl-16">
          <div className="relative h-[14rem] w-[14rem] xs:h-[16rem] xs:w-[16rem] sm:h-[20rem] sm:w-[20rem] md:h-[24rem] md:w-[24rem] lg:h-[30rem] lg:w-[30rem] xl:h-[36rem] xl:w-[36rem]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F9627D] via-[#E8447C] to-[#FF9A5A] p-[8px]">
              <div className="w-full h-full rounded-full bg-[#1a1420]" />
            </div>
            <div className="absolute inset-[8px] rounded-full overflow-hidden">
              <Image
                src={category.imageSrc}
                alt={category.label}
                fill
                className="object-cover opacity-30"
                priority
              />
            </div>
            {showOverlay && (
              <div className="absolute inset-[8px] rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F9627D] via-[#E8447C] to-[#FF9A5A] animate-sunrise-overlay" />
              </div>
            )}
          </div>

          <span
            className={`pointer-events-none absolute left-1/2 -translate-x-1/2 md:left-2 lg:left-0 md:translate-x-0 top-1/2 -translate-y-1/2 text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[4rem] xl:text-[5rem] font-light leading-none tracking-tight text-white ${
              isRotating
                ? "animate-rotate-clock-needle origin-left"
                : "origin-left"
            }`}
            style={{ transformOrigin: "left center" }}
          >
            {category.label}
          </span>
        </div>

        <div className="w-full md:w-auto md:flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3 sm:gap-4 md:gap-5 lg:gap-6 md:pl-6 lg:pl-12 px-4">
          <div className="space-y-1 text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.5rem] leading-[1.1] font-light">
            <p className="text-[#9ca3af]">Choose</p>
            <p className="text-[#9ca3af]">
              from <span className="text-white font-normal">100+</span>
            </p>
            <p className="text-white font-normal">Categories</p>
          </div>
          <button
            onClick={handleExploreClick}
            className="inline-flex items-center gap-2 text-sm sm:text-base md:text-base lg:text-lg font-normal bg-gradient-to-r from-[#F9627D] to-[#FF9A5A] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            <span>Explore all categories</span>
            <span className="text-sm sm:text-base text-transparent bg-gradient-to-r from-[#F9627D] to-[#FF9A5A] bg-clip-text">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
