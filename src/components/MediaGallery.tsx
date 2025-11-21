import Image from "next/image";

type MediaItem = {
  id: number;
  kind: "image" | "video";
  src: string;
  alt: string;
};

type MediaGalleryProps = {
  activeTab: "Photos" | "Videos";
  onTabChange: (tab: "Photos" | "Videos") => void;
  photoItems: MediaItem[];
  videoItems: MediaItem[];
};

const MEDIA_TABS = ["Photos", "Videos"] as const;

export function MediaGallery({
  activeTab,
  onTabChange,
  photoItems,
  videoItems,
}: MediaGalleryProps) {
  const items = activeTab === "Photos" ? photoItems : videoItems;

  return (
    <section className="relative pt-6 sm:pt-8 md:pt-12 lg:pt-16 pb-8 sm:pb-10 md:pb-16 lg:pb-20">
      <div className="relative flex flex-col items-center">
        <div className="relative w-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[700px]">
          <div className="absolute top-0 h-full w-screen border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] sm:border-t-[2px] sm:border-l-[2px] sm:border-r-[2px] md:border-t-[2.5px] md:border-l-[2.5px] md:border-r-[2.5px] lg:border-t-[3px] lg:border-l-[3px] lg:border-r-[3px] border-gray-500/70 rounded-t-[50%] pointer-events-none left-1/2 -translate-x-1/2" />

          <div className="absolute top-4 sm:top-6 md:top-10 lg:top-12 left-1/2 -translate-x-1/2 inline-flex rounded-full bg-[#1a1a1a]/80 p-0.5 sm:p-1 md:p-1.5 backdrop-blur-md border border-gray-800/50 z-10">
            {MEDIA_TABS.map((tab) => {
              const active = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => onTabChange(tab)}
                  className={`px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-1.5 xs:py-2 sm:py-2.5 md:py-3 text-sm xs:text-base sm:text-base md:text-lg font-medium rounded-full transition-all ${
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

          {activeTab === "Photos" ? (
            <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-7 pt-16 xs:pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-3 sm:pb-4 md:pb-6 lg:pb-8 px-3 xs:px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
              {items.slice(0, 8).map((item, index) => {
                const isCircular = index === 0 || index === 2;

                return (
                  <div
                    key={item.id}
                    className={`relative aspect-[3/4] overflow-hidden bg-gray-800 ${
                      isCircular
                        ? "rounded-full border-[1.5px] sm:border-[2px] border-gray-600"
                        : "rounded-xl sm:rounded-2xl border-[1.5px] sm:border-[2px] border-gray-700"
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
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 pt-16 xs:pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-3 sm:pb-4 md:pb-6 lg:pb-8 px-4 sm:px-8 md:px-16 lg:px-20 max-w-7xl mx-auto">
              {items.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-[3/5] overflow-hidden bg-gray-800 border-[1.5px] sm:border-[2px] border-gray-700 rounded-xl sm:rounded-2xl"
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
