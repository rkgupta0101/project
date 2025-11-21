"use client";

import { useState } from "react";
import { HeroCategory } from "@/components/HeroCategory";
import { MediaGallery } from "@/components/MediaGallery";
import { CultureSlider } from "@/components/CultureSlider";
import { SquadSection } from "@/components/SquadSection";
import { RecentShows } from "@/components/RecentShows";
import { TalentedFolksCTA } from "@/components/TalentedFolksCTA";
import TalentedTeamHero from "@/components/TalentedTeamHero";
import {
  SHARED_IMAGES,
  CATEGORIES,
  PHOTO_ITEMS,
  VIDEO_ITEMS,
  CULTURE_ITEMS,
  SQUADS,
  RECENT_SHOWS,
} from "@/lib/constants";

export default function Page() {
  const [mediaTab, setMediaTab] = useState<"Photos" | "Videos">("Photos");
  const [squadIndex, setSquadIndex] = useState(0);
  const [showIndex, setShowIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const currentSquad = SQUADS[squadIndex];
  const currentShow = RECENT_SHOWS[showIndex];
  const currentCategory = CATEGORIES[categoryIndex];

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
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10 space-y-10 sm:space-y-12 md:space-y-20 lg:space-y-32">
        <HeroCategory
          category={currentCategory}
          index={categoryIndex}
          total={CATEGORIES.length}
          onNext={handleNextCategory}
          isRotating={isRotating}
        />

        <MediaGallery
          activeTab={mediaTab}
          onTabChange={setMediaTab}
          photoItems={PHOTO_ITEMS}
          videoItems={VIDEO_ITEMS}
        />

        <CultureSlider items={CULTURE_ITEMS} />

        <SquadSection
          current={currentSquad}
          onPrev={handlePrevSquad}
          onNext={handleNextSquad}
          decorationImages={[
            SHARED_IMAGES[2],
            SHARED_IMAGES[2],
            SHARED_IMAGES[2],
            SHARED_IMAGES[1],
          ]}
          allSquads={SQUADS}
        />

        <RecentShows
          current={currentShow}
          onPrev={handlePrevShow}
          onNext={handleNextShow}
          imageSrc={currentShow.imageSrc}
        />

        <TalentedTeamHero />
      </div>
    </main>
  );
}
