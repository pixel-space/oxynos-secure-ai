import heroBg from "@/assets/oxynos-hero-bg.png.asset.json";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black text-white selection:bg-neutral-800">
      <img
        src={heroBg.url}
        alt="Torn paper revealing the Oxynos wordmark"
        decoding="async"
        loading="eager"
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-center"
      />

      <div className="relative z-10 flex min-h-screen flex-col justify-end">
        <div className="flex flex-1 flex-col items-center justify-end px-4 pb-16 pt-40 text-center sm:pb-24 sm:pt-52 md:pb-28 lg:pb-32">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
              className="w-full select-none text-[20px] font-normal leading-[1.3] tracking-tight sm:text-[30px] md:text-[38px] lg:text-[44px]">
              <span className="text-subheadline mb-2 block sm:mb-2.5">
                The All-in-One Infrastructure Layer,
              </span>
              <span className="text-subheadline flex flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-3.5">
                <span className="font-normal">Which Gives You An Unfair</span>
                <span className="text-advantage-bold relative inline-block px-1 font-bold">
                  Advantage.
                  <svg
                    className="swoop-shadow pointer-events-none absolute -bottom-3 left-0 h-4 w-full sm:-bottom-3.5 sm:h-5"
                    viewBox="0 0 220 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M 6 12 C 70 25, 150 25, 214 10"
                      stroke="rgba(255, 255, 255, 0.95)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 12 15 C 75 27, 145 27, 208 13"
                      stroke="rgba(255, 255, 255, 0.75)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <div className="mt-8 flex items-center justify-center gap-3 sm:mt-12 sm:gap-5">
              <a
                href="#early-access"
                className="cursor-pointer rounded-[12px] border border-neutral-200/80 bg-white px-5 py-2.5 text-[13px] font-semibold text-black shadow-[0_2px_10px_rgba(0,0,0,0.2)] transition-all hover:bg-neutral-100 sm:rounded-[14px] sm:px-8 sm:py-3.5 sm:text-[15px]"
              >
                Get Started
              </a>
              <a
                href="#how-it-works"
                className="cursor-pointer rounded-[12px] border border-white/20 bg-white/10 px-5 py-2.5 text-[13px] font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:rounded-[14px] sm:px-8 sm:py-3.5 sm:text-[15px]"
              >
                Explore Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
