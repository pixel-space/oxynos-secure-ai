import logoAsset from "@/assets/oxynos-logo.svg.asset.json";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full px-3 pt-5 sm:px-4 sm:pt-6">
      <div className="mx-auto w-full max-w-[1600px]">
        <nav className="glass-navbar flex h-[58px] items-center justify-between rounded-[12px] px-4 sm:h-[62px] sm:px-8">
          <a href="#" className="flex shrink-0 items-center space-x-2.5">
            <img
              src={logoAsset.url}
              alt="Oxynos logo"
              className="h-[61.25px] w-[61.25px] object-contain sm:h-[70px] sm:w-[70px]"
            />
            <span className="text-[23.2px] font-normal text-[#000000]">Oxynos</span>
          </a>
          <div className="flex items-center space-x-5 sm:space-x-8 md:space-x-10">
            <a
              href="#how-it-works"
              className="whitespace-nowrap text-[13.5px] font-medium text-[#4E4E4E] transition-colors hover:text-white sm:text-[15.5px]"
            >
              Product
            </a>
            <a
              href="#arsenal"
              className="whitespace-nowrap text-[13.5px] font-medium text-[#4E4E4E] transition-colors hover:text-white sm:text-[15.5px]"
            >
              Docs
            </a>
            <a
              href="#early-access"
              className="whitespace-nowrap text-[13.5px] font-medium text-[#4E4E4E] transition-colors hover:text-white sm:text-[15.5px]"
            >
              Enterprise
            </a>
            <a
              href="#early-access"
              className="cursor-pointer whitespace-nowrap rounded-[10px] bg-[#1C1C1F] px-3.5 py-2 text-[12.5px] font-medium text-white shadow-md transition-colors hover:bg-[#28282C] sm:px-5 sm:py-2.5 sm:text-[14px]"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
