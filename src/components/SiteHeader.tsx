import { GlobeIcon, MenuIcon, SearchIcon, UserIcon } from "@/components/Icon";

const searchFields = [
  { label: "지역", value: "어디에 걸어볼까요" },
  { label: "기간", value: "대여 기간" },
  { label: "공간", value: "거실 · 사무실 · 카페" },
] as const;

/**
 * Top chrome: a floating, elevated shell rather than a flat bar (design.md §4/§6).
 * The search shell is a frosted, almost-solid pill with strong elevation.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <div
        className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 rounded-pill border border-black/5 px-4 py-3 sm:px-6"
        style={{
          background: "var(--material-extra-thick)",
          backdropFilter: "blur(16px) saturate(1.6)",
          WebkitBackdropFilter: "blur(16px) saturate(1.6)",
          boxShadow: "var(--elevation-high)",
        }}
      >
        {/* Brand */}
        <a
          href="#"
          className="focus-ring flex shrink-0 items-center gap-2 rounded-pill text-rausch"
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-xl text-white"
            style={{ backgroundImage: "var(--gradient-rausch)" }}
            aria-hidden
          >
            <PaletteGlyph />
          </span>
          <span className="text-[20px] font-bold tracking-[-0.01em] text-hof">
            canvas
          </span>
        </a>

        {/* Search shell — desktop */}
        <div
          className="focus-ring hidden cursor-pointer items-stretch rounded-pill border border-grey-300 bg-white md:flex"
          style={{ boxShadow: "var(--elevation-secondary)" }}
          tabIndex={0}
          role="search"
        >
          {searchFields.map((field, i) => (
            <div key={field.label} className="flex items-center">
              <div className="px-6 py-2">
                <div className="text-[12px] font-semibold text-hof">
                  {field.label}
                </div>
                <div className="text-[13px] text-text-secondary">
                  {field.value}
                </div>
              </div>
              {i < searchFields.length - 1 && (
                <span className="h-7 w-px bg-grey-300" aria-hidden />
              )}
            </div>
          ))}
          <button
            type="button"
            aria-label="작품 검색"
            className="m-2 grid h-12 w-12 place-items-center rounded-pill text-white transition-transform duration-100 active:scale-95"
            style={{ background: "var(--palette-rausch)" }}
          >
            <SearchIcon width={20} height={20} />
          </button>
        </div>

        {/* Right cluster */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="hidden rounded-pill px-4 py-3 text-[14px] font-semibold text-hof transition-colors hover:bg-faint lg:block"
          >
            작가 등록
          </button>
          <button
            type="button"
            aria-label="언어 설정"
            className="hidden h-11 w-11 place-items-center rounded-pill text-hof transition-colors hover:bg-faint sm:grid"
          >
            <GlobeIcon width={18} height={18} />
          </button>
          <button
            type="button"
            aria-label="메뉴 열기"
            className="flex items-center gap-2 rounded-pill border border-grey-400 py-2 pl-3 pr-2 text-hof transition-shadow hover:[box-shadow:var(--elevation-tertiary)]"
          >
            <MenuIcon width={18} height={18} />
            <span className="grid h-7 w-7 place-items-center rounded-pill bg-grey-1000 text-white">
              <UserIcon width={16} height={16} />
            </span>
          </button>
        </div>
      </div>

      {/* Search shell — mobile */}
      <div className="mx-auto mt-3 max-w-[1180px] md:hidden">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-pill border border-grey-300 bg-white px-5 py-3 text-left"
          style={{ boxShadow: "var(--elevation-secondary)" }}
        >
          <SearchIcon width={20} height={20} className="text-hof" />
          <span className="flex flex-col">
            <span className="text-[14px] font-semibold text-hof">
              작품 검색
            </span>
            <span className="text-[12px] text-text-secondary">
              지역 · 기간 · 공간
            </span>
          </span>
        </button>
      </div>
    </header>
  );
}

function PaletteGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3c5 0 9 3.6 9 8 0 2.5-2 4-4.2 4H15c-1 0-1.7.9-1.4 1.8.3.9-.2 2.2-1.6 2.2-4.8 0-9-3.6-9-8s4-8 9-8z"
        fill="currentColor"
        opacity="0.95"
      />
      <circle cx="8" cy="10" r="1.3" fill="#fff" />
      <circle cx="12" cy="8" r="1.3" fill="#fff" />
      <circle cx="16" cy="10" r="1.3" fill="#fff" />
    </svg>
  );
}
