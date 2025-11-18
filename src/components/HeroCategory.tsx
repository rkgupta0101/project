import Image from "next/image";

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
  return (
    <section className="relative pt-12 pb-12 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 md:-left-32 -top-10 md:-top-20 h-40 w-40 md:h-72 md:w-72 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(249,98,125,0.4),transparent_60%)] blur-3xl" />
        <div className="absolute -right-20 md:-right-32 bottom-0 h-40 w-40 md:h-72 md:w-72 rounded-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,90,0.4),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-0">
        <div className="relative w-full md:w-auto flex items-center justify-center md:justify-start md:flex-1 md:pl-16">
          <div className="relative h-[18rem] w-[18rem] sm:h-[22rem] sm:w-[22rem] md:h-[28rem] md:w-[28rem] lg:h-[34rem] lg:w-[34rem] xl:h-[38rem] xl:w-[38rem]">
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
          </div>

          <span
            className={`pointer-events-none absolute left-1/2 -translate-x-1/2 md:left-4 lg:left-0 md:translate-x-0 top-1/2 -translate-y-1/2 text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[5rem] xl:text-[5.5rem] font-light leading-none tracking-tight text-white ${
              isRotating ? "animate-rotate-category origin-left" : "origin-left"
            }`}
          >
            {category.label}
          </span>
        </div>

        <div className="w-full md:w-auto md:flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6 md:pl-8 lg:pl-12">
          <div className="space-y-1 text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] leading-[1.1] font-light">
            <p className="text-[#9ca3af]">Choose</p>
            <p className="text-[#9ca3af]">
              from <span className="text-white font-normal">100+</span>
            </p>
            <p className="text-white font-normal">Categories</p>
          </div>
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 text-sm sm:text-[0.95rem] md:text-base font-normal bg-gradient-to-r from-[#F9627D] to-[#FF9A5A] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
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
