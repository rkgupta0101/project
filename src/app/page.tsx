"use client";

import Image from "next/image";
import { useState } from "react";

// Use the images from public/IstPart as requested
const SHARED_IMAGES = [
  "/IstPart/Singer.jpg",
  "/IstPart/Comedians.webp",
  "/IstPart/Dancer.jpg",
];

const CATEGORIES = [
  {
    id: "singers",
    label: "Singers",
    subtitle: "Choose from 100+ Categories",
    cta: "Explore all categories",
    imageSrc: SHARED_IMAGES[0],
  },
  {
    id: "comedians",
    label: "Comedians",
    subtitle: "Choose from 100+ Categories",
    cta: "Explore all categories",
    imageSrc: SHARED_IMAGES[1],
  },
  {
    id: "dancers",
    label: "Dancers",
    subtitle: "Choose from 100+ Categories",
    cta: "Explore all categories",
    imageSrc: SHARED_IMAGES[2],
  },
];

const MEDIA_TABS = ["Photos", "Videos"] as const;

type MediaKind = "image" | "video";

type MediaItem = {
  id: number;
  kind: MediaKind;
  src: string;
  alt: string;
};

// Using placeholder images from picsum.photos for now
// Replace these with your actual image paths when available
const PHOTO_ITEMS: MediaItem[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  kind: "image" as const,
  // cycle through the three shared images
  src: SHARED_IMAGES[i % SHARED_IMAGES.length],
  alt: `Performer ${i + 1}`,
}));

// Using placeholder video thumbnails from picsum.photos
// Replace these with your actual video paths when available
// Show the same three images for the Videos tab as well (renders as images)
const VIDEO_ITEMS: MediaItem[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  kind: "image" as const,
  src: SHARED_IMAGES[i % SHARED_IMAGES.length],
  alt: `Performance clip ${i + 1}`,
}));

const CULTURE_SLIDES = [
  {
    id: 1,
    title: "Late Night Maggie",
    subtitle: "Party for the boost",
  },
  {
    id: 2,
    title: "Brainstorm & Chill",
    subtitle: "Ideas over coffee",
  },
  {
    id: 3,
    title: "Friday Fun Hour",
    subtitle: "Unwind with the squad",
  },
];

const SQUADS = [
  {
    id: 1,
    name: "Tech Titans",
    members: 5,
    description:
      "The artists behind the visuals. These design superheroes bring ideas to life, painting our projects with creativity and imagination",
    note: "Our design team is growing. Apply Now",
    imageSrc: SHARED_IMAGES[2],
  },
  {
    id: 2,
    name: "Growth Gurus",
    members: 4,
    description:
      "The squad that keeps the engine running, discovering new opportunities and powering our next milestones.",
    note: "We are hiring across growth roles.",
    imageSrc: SHARED_IMAGES[0],
  },
  {
    id: 3,
    name: "Design Dynamos",
    members: 6,
    description:
      "Creative minds crafting stunning visuals and seamless experiences that bring our vision to life.",
    note: "Join our creative team today.",
    imageSrc: SHARED_IMAGES[1],
  },
];

const RECENT_SHOWS = [
  {
    id: 1,
    title: "Recent shows made star-studded via StarClinch",
    artist: "Featured Artist",
    description: "for an event hosted by XYZ performed at Pune.",
    date: "14 March 2023",
  },
  {
    id: 2,
    title: "Memorable nights, unforgettable performances",
    artist: "Another Artist",
    description: "lit up the stage for a corporate gala in Mumbai.",
    date: "02 April 2023",
  },
];

export default function Page() {
  const [mediaTab, setMediaTab] =
    useState<(typeof MEDIA_TABS)[number]>("Photos");
  const [cultureIndex, setCultureIndex] = useState(0);
  const [squadIndex, setSquadIndex] = useState(0);
  const [showIndex, setShowIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const currentCulture = CULTURE_SLIDES[cultureIndex];
  const currentSquad = SQUADS[squadIndex];
  const currentShow = RECENT_SHOWS[showIndex];
  const currentCategory = CATEGORIES[categoryIndex];

  const handlePrevCulture = () =>
    setCultureIndex(
      (prev: number) =>
        (prev - 1 + CULTURE_SLIDES.length) % CULTURE_SLIDES.length
    );
  const handleNextCulture = () =>
    setCultureIndex((prev: number) => (prev + 1) % CULTURE_SLIDES.length);

  const handlePrevSquad = () =>
    setSquadIndex((prev: number) => (prev - 1 + SQUADS.length) % SQUADS.length);
  const handleNextSquad = () =>
    setSquadIndex((prev: number) => (prev + 1) % SQUADS.length);

  const handlePrevShow = () =>
    setShowIndex(
      (prev: number) => (prev - 1 + RECENT_SHOWS.length) % RECENT_SHOWS.length
    );
  const handleNextShow = () =>
    setShowIndex((prev: number) => (prev + 1) % RECENT_SHOWS.length);

  const handleNextCategory = () => {
    setIsRotating(true);
    setTimeout(() => {
      setCategoryIndex((prev: number) => (prev + 1) % CATEGORIES.length);
      setIsRotating(false);
    }, 600);
  };

  return (
    <main className="bg-page-bg text-white min-h-screen overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-32">
        <HeroCategory
          category={currentCategory}
          index={categoryIndex}
          total={CATEGORIES.length}
          onNext={handleNextCategory}
          isRotating={isRotating}
        />

        <MediaGallery activeTab={mediaTab} onTabChange={setMediaTab} />

        <CultureSlider
          current={currentCulture}
          index={cultureIndex}
          total={CULTURE_SLIDES.length}
          onPrev={handlePrevCulture}
          onNext={handleNextCulture}
        />

        <SquadSection
          current={currentSquad}
          onPrev={handlePrevSquad}
          onNext={handleNextSquad}
        />

        <RecentShows
          current={currentShow}
          onPrev={handlePrevShow}
          onNext={handleNextShow}
        />

        <TalentedFolksCTA />
      </div>
    </main>
  );
}

function HeroCategory({
  category,
  index,
  total,
  onNext,
  isRotating,
}: {
  category: (typeof CATEGORIES)[number];
  index: number;
  total: number;
  onNext: () => void;
  isRotating: boolean;
}) {
  return (
    <section className="relative pt-24 pb-24 md:pt-28 md:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(249,98,125,0.4),transparent_60%)] blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,90,0.4),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
        <div className="relative w-full md:w-auto flex items-center justify-start md:justify-start md:flex-1 md:pl-16">
          <div className="relative h-[28rem] w-[28rem] md:h-[34rem] md:w-[34rem] lg:h-[38rem] lg:w-[38rem]">
            {/* Gradient border arch (inverted U) */}
            <div className="absolute inset-0 rounded-t-full bg-gradient-to-br from-[#F9627D] via-[#E8447C] to-[#FF9A5A] p-[8px]">
              <div className="w-full h-full rounded-t-full bg-[#1a1420]" />
            </div>
            {/* Image inside arch with dark overlay */}
            <div className="absolute inset-[8px] rounded-t-full overflow-hidden">
              <Image
                src={category.imageSrc}
                alt={category.label}
                fill
                className="object-cover opacity-30"
                priority
              />
            </div>

            {/* Rotating arrow on arch */}
            <div className="absolute -right-6 bottom-16 md:-right-8 md:bottom-20 text-[#FF9A5A] text-3xl md:text-4xl">
              ↻
            </div>
          </div>

          <span
            className={`pointer-events-none absolute left-4 md:left-0 top-1/2 -translate-y-1/2 text-[3rem] md:text-[5rem] lg:text-[5.5rem] font-light leading-none tracking-tight text-white ${
              isRotating ? "animate-rotate-category origin-left" : "origin-left"
            }`}
          >
            {category.label}
          </span>
        </div>

        <div className="w-full md:w-auto md:flex-1 flex flex-col items-start text-left gap-6 md:pl-8 lg:pl-12">
          <div className="space-y-1 text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-light">
            <p className="text-[#9ca3af]">Choose</p>
            <p className="text-[#9ca3af]">
              from <span className="text-white font-normal">100+</span>
            </p>
            <p className="text-white font-normal">Categories</p>
          </div>
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 text-[0.95rem] md:text-base font-normal bg-gradient-to-r from-[#F9627D] to-[#FF9A5A] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            <span>Explore all categories</span>
            <span className="text-base text-transparent bg-gradient-to-r from-[#F9627D] to-[#FF9A5A] bg-clip-text">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function MediaGallery({
  activeTab,
  onTabChange,
}: {
  activeTab: (typeof MEDIA_TABS)[number];
  onTabChange: (t: (typeof MEDIA_TABS)[number]) => void;
}) {
  const items = activeTab === "Photos" ? PHOTO_ITEMS : VIDEO_ITEMS;

  return (
    <section className="relative pt-16 pb-20">
      <div className="relative flex flex-col items-center gap-12">
        {/* Tabs */}
        <div className="inline-flex rounded-full bg-[#1a1a1a]/80 p-1.5 backdrop-blur-md border border-gray-800/50">
          {MEDIA_TABS.map((tab) => {
            const active = tab === activeTab;
            return (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-10 py-3 text-lg font-medium rounded-full transition-all ${
                  active
                    ? "bg-white text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Gallery container with dome arch */}
        <div className="relative w-full max-w-7xl px-4">
          {/* Large dome border outline - visible half circle starting from bottom corners */}
          <div className="absolute left-0 right-0 bottom-0 h-[120%] border-[3px] border-gray-500/70 rounded-t-[100%] pointer-events-none" />

          {/* Gallery grid */}
          {activeTab === "Photos" ? (
            <div className="relative grid grid-cols-4 gap-7 pt-12 pb-8 px-16">
              {items.slice(0, 8).map((item, index) => {
                // Only first and third items in TOP row are circular (positions 0 and 2)
                const isCircular = index === 0 || index === 2;

                return (
                  <div
                    key={item.id}
                    className={`relative aspect-[3/4] overflow-hidden bg-gray-800 ${
                      isCircular
                        ? "rounded-full border-[2px] border-gray-600"
                        : "rounded-2xl border-[2px] border-gray-700"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="relative grid grid-cols-3 gap-12 pt-12 pb-8 px-20">
              {items.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-[3/5] overflow-hidden bg-gray-800 border-[2px] border-gray-700 rounded-2xl"
                >
                  {item.kind === "video" ? (
                    <video
                      src={item.src}
                      className="h-full w-full object-cover"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
function CultureSlider({
  current,
  index,
  total,
  onPrev,
  onNext,
}: {
  current: (typeof CULTURE_SLIDES)[number];
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const items = [
    {
      id: 1,
      title: "Late Night Maggie",
      subtitle: "Party for the boost",
      imageSrc: SHARED_IMAGES[1],
    },
    {
      id: 2,
      title: "Late Night Maggie",
      subtitle: "Party for the boost",
      imageSrc: SHARED_IMAGES[1],
    },
    {
      id: 3,
      title: "Late Night Maggie",
      subtitle: "Party for the boost",
      imageSrc: SHARED_IMAGES[1],
    },
    {
      id: 4,
      title: "Late Night Maggie",
      subtitle: "Party for the boost",
      imageSrc: SHARED_IMAGES[1],
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16 px-8">
        {items.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const rotation = isLeft ? -8 : 8;

          return (
            <div
              key={item.id}
              className={`flex items-center gap-12 ${
                isLeft ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Text Section */}
              <div className={`flex-1 ${isLeft ? "text-left" : "text-right"}`}>
                <h3 className="text-4xl md:text-5xl font-light mb-2">
                  {item.title}
                </h3>
                <p className="text-xl md:text-2xl text-gray-400">
                  {item.subtitle}
                </p>
              </div>

              {/* Image Card */}
              <div
                className="flex-1 group cursor-pointer"
                style={{
                  transform: `rotate(${rotation}deg)`,
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

function CultureCard({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div className={"relative w-56 h-56 md:w-64 md:h-64 " + (className ?? "")}>
      <div className="absolute inset-0 rounded-[2rem] bg-slate-900 shadow-soft-glow overflow-hidden">
        <Image
          src={SHARED_IMAGES[1]}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      </div>
      <div className="absolute left-4 bottom-4 text-left space-y-1">
        <p className="text-sm md:text-base font-medium">{title}</p>
        <p className="text-xs md:text-sm text-page-muted">{subtitle}</p>
      </div>
    </div>
  );
}

function SquadSection({
  current,
  onPrev,
  onNext,
}: {
  current: (typeof SQUADS)[number];
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background circles decoration */}
      <div className="absolute left-10 top-20 w-64 h-64 rounded-full opacity-30">
        <Image
          src={SHARED_IMAGES[2]}
          alt="decoration"
          fill
          className="object-cover rounded-full blur-sm"
        />
      </div>
      <div className="absolute right-10 top-20 w-64 h-64 rounded-full opacity-30">
        <Image
          src={SHARED_IMAGES[2]}
          alt="decoration"
          fill
          className="object-cover rounded-full blur-sm"
        />
      </div>
      <div className="absolute left-20 bottom-32 w-48 h-48 rounded-full opacity-20">
        <Image
          src={SHARED_IMAGES[2]}
          alt="decoration"
          fill
          className="object-cover rounded-full blur-sm"
        />
      </div>
      <div className="absolute right-20 bottom-32 w-48 h-48 rounded-full opacity-20">
        <Image
          src={SHARED_IMAGES[1]}
          alt="decoration"
          fill
          className="object-cover rounded-full blur-sm"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-8">
        <h2 className="text-center text-4xl md:text-5xl font-normal mb-20">
          Meet Our Starclinch Squads
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={onPrev}
            className="absolute left-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors text-xl"
          >
            ←
          </button>

          {/* Right Arrow */}
          <button
            onClick={onNext}
            className="absolute right-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors text-xl"
          >
            →
          </button>

          {/* Center Content */}
          <div className="flex flex-col items-center gap-8 max-w-2xl px-20">
            {/* Main Image with transition */}
            <div className="relative w-80 h-80 rounded-3xl overflow-hidden transition-all duration-500">
              <Image
                key={current.id}
                src={current.imageSrc}
                alt={current.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Members Badge */}
            <span className="inline-flex items-center rounded-full bg-teal-900/40 px-6 py-2 text-sm text-teal-300 border border-teal-700/50">
              {current.members} Members
            </span>

            {/* Title */}
            <h3 className="text-4xl md:text-5xl font-normal text-center">
              {current.name}
            </h3>

            {/* Description */}
            <p className="text-center text-lg text-gray-400 leading-relaxed">
              {current.description}
            </p>

            {/* CTA Link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-base"
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

function RecentShows({
  current,
  onPrev,
  onNext,
}: {
  current: (typeof RECENT_SHOWS)[number];
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated diagonal ribbon - top left */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full">
        <div className="absolute -left-[20%] top-12 w-[140%] -rotate-[15deg] overflow-hidden">
          <div className="ribbon-track whitespace-nowrap">
            <span className="ribbon-content inline-block text-white/30 text-xs tracking-[0.4em] font-light">
              HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
              HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
            </span>
          </div>
        </div>
      </div>

      {/* Animated diagonal ribbon - bottom right */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-full h-full">
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

      <div className="relative max-w-7xl mx-auto px-8">
        <h2 className="text-center text-4xl md:text-5xl font-light mb-20">
          Recent shows made star-studded via StarClinch
        </h2>

        <div className="relative flex items-center justify-between gap-12">
          {/* Left arrow */}
          <button
            onClick={onPrev}
            className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700 transition-colors text-2xl border border-gray-700/40"
          >
            ←
          </button>

          {/* Circular image - large */}
          <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={SHARED_IMAGES[0]}
              alt={current.artist}
              fill
              className="object-cover"
            />
          </div>

          {/* Text content on right */}
          <div className="flex-1 space-y-6">
            <p className="text-4xl md:text-5xl font-normal leading-tight">
              <span className="text-white">{current.artist}</span>{" "}
              <span className="text-gray-400 font-light">for</span>
            </p>
            <div className="text-3xl md:text-4xl leading-relaxed text-gray-400 font-light">
              an event hosted by XYZ
              <br />
              performed <span className="text-white font-normal">at</span>
              <br />
              Pune .
            </div>

            <div className="flex items-center gap-3 text-gray-400 text-base pt-4">
              <span className="text-xl">📅</span>
              <span>{current.date}</span>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={onNext}
            className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700 transition-colors text-2xl border border-gray-700/40"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

function TalentedFolksCTA() {
  const tags = [
    "Focused",
    "Collaborative",
    "United",
    "Vibrant",
    "Dynamic",
    "Motivated",
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Large gradient blobs in corners */}
      <div className="absolute left-0 bottom-0 w-[800px] h-[800px] rounded-full bg-gradient-radial from-purple-900/50 via-purple-900/20 to-transparent blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-gradient-radial from-purple-800/50 via-purple-900/20 to-transparent blur-3xl translate-x-1/2 -translate-y-1/2" />

      {/* Large rounded border outline */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[85%] max-w-[1300px] h-[580px] rounded-[180px] border border-gray-700/40" />
      </div>

      <div className="relative max-w-5xl mx-auto px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Handwritten text with arrow */}
          <div className="relative mb-2">
            <p className="text-pink-400 text-xl italic font-light">
              we are the team of
            </p>
            <svg
              width="80"
              height="50"
              viewBox="0 0 80 50"
              className="absolute -right-16 -top-2"
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

          {/* Main heading with badges */}
          <div className="relative w-full flex justify-center items-center mb-4">
            {/* Fun badge - left side with tilted border */}
            <div
              className="absolute left-[8%] -top-4"
              style={{ transform: "rotate(-8deg)" }}
            >
              <span className="inline-block px-7 py-3 rounded-full border-2 border-gray-600/70 bg-transparent text-base text-gray-300">
                Fun
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-7xl md:text-8xl font-light tracking-tight">
              20+Talented Folks
            </h2>

            {/* Inclusive badge - right side with tilted border */}
            <div
              className="absolute right-[8%] top-4"
              style={{ transform: "rotate(6deg)" }}
            >
              <span className="inline-block px-7 py-3 rounded-full border-2 border-gray-600/70 bg-transparent text-base text-gray-300">
                Inclusive
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-3xl text-xl text-gray-300 leading-relaxed mt-8">
            From passion-driven dedication to impactful contribution,
            <br />
            we do it all here. We are growing and will be excited to hear
            <br />
            from you !
          </p>

          {/* CTA Button */}
          <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 px-12 py-4 text-lg font-medium hover:scale-105 transition-transform shadow-lg">
            Join our team →
          </button>

          {/* Bottom tags with rotation */}
          <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-40">
            {tags.map((tag, idx) => (
              <span
                key={tag}
                className="rounded-full border-2 border-gray-600 bg-transparent px-7 py-2.5 text-base text-gray-400"
                style={{
                  transform: `rotate(${[-8, 4, -5, 6, -4, 7][idx]}deg)`,
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
