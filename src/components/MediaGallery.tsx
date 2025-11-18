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
    <section className="relative pt-8 md:pt-16 pb-12 md:pb-20">
      <div className="relative flex flex-col items-center gap-6 md:gap-12">
        <div className="inline-flex rounded-full bg-[#1a1a1a]/80 p-1 md:p-1.5 backdrop-blur-md border border-gray-800/50">
          {MEDIA_TABS.map((tab) => {
            const active = tab === activeTab;
            return (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-6 sm:px-8 md:px-10 py-2 md:py-3 text-base md:text-lg font-medium rounded-full transition-all ${
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

        <div className="relative w-full max-w-7xl px-2 sm:px-4">
          <div className="absolute left-0 right-0 bottom-0 h-[120%] border-[2px] md:border-[3px] border-gray-500/70 rounded-t-[100%] pointer-events-none" />

          {activeTab === "Photos" ? (
            <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 md:gap-7 pt-6 md:pt-12 pb-4 md:pb-8 px-4 sm:px-8 md:px-16">
              {items.slice(0, 8).map((item, index) => {
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
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 pt-6 md:pt-12 pb-4 md:pb-8 px-4 sm:px-12 md:px-20">
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
