export const SHARED_IMAGES = [
  "/IstPart/Singer.jpg",
  "/IstPart/Comedians.webp",
  "/IstPart/Dancer.jpg",
];

export const CATEGORIES = [
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

export const PHOTO_ITEMS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  kind: "image" as const,
  src: SHARED_IMAGES[i % SHARED_IMAGES.length],
  alt: `Performer ${i + 1}`,
}));

export const VIDEO_ITEMS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  kind: "image" as const,
  src: SHARED_IMAGES[i % SHARED_IMAGES.length],
  alt: `Performance clip ${i + 1}`,
}));

export const CULTURE_ITEMS = [
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

export const SQUADS = [
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

export const RECENT_SHOWS = [
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
