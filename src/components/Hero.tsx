import { ArrowIcon, StarIcon } from "@/components/Icon";
import { PaintingTile } from "@/components/PaintingTile";

const heroTiles = [
  {
    base: "linear-gradient(150deg, #ff385c 0%, #e31c5f 50%, #460479 100%)",
    layers:
      "radial-gradient(120% 90% at 20% 20%, rgba(255,255,255,0.5), transparent 60%), radial-gradient(80% 70% at 85% 80%, rgba(70,4,121,0.6), transparent 60%)",
  },
  {
    base: "linear-gradient(160deg, #f5f1ea 0%, #e07912 75%, #c13515 120%)",
    layers:
      "radial-gradient(90% 80% at 30% 28%, rgba(255,255,255,0.72), transparent 55%)",
  },
  {
    base: "linear-gradient(145deg, #008a05 0%, #12a139 45%, #222222 110%)",
    layers:
      "radial-gradient(100% 80% at 24% 18%, rgba(247,246,242,0.55), transparent 58%)",
  },
] as const;

/** Editorial hero: photography-led on the left, a layered gallery on the right. */
export function Hero() {
  return (
    <section className="px-4 pt-10 sm:px-6 sm:pt-14">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Copy */}
        <div className="flex flex-col gap-6">
          <span
            className="inline-flex w-fit items-center gap-2 rounded-pill px-4 py-2 text-[13px] font-semibold text-white"
            style={{ backgroundImage: "var(--gradient-rausch)" }}
          >
            <StarIcon width={14} height={14} />
            매달 새로워지는 큐레이션
          </span>

          <h1 className="text-[44px] font-semibold leading-[1.05] tracking-[-0.01em] text-grey-1000 sm:text-[60px] lg:text-[64px]">
            Turn one wall
            <br />
            into a gallery
          </h1>

          <p className="max-w-[44ch] text-[18px] leading-[1.4] text-text-secondary">
            원작 회화부터 한정 프린트까지, 마음에 드는 작품을 부담 없이 월
            단위로 대여하세요. 큐레이터가 공간과 취향에 맞는 작품을 골라
            드립니다.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-md px-6 text-[16px] font-medium text-white transition-[transform,background] duration-150 hover:bg-product-rausch active:scale-[0.98]"
              style={{
                background: "var(--palette-rausch)",
                minHeight: "48px",
                boxShadow: "var(--elevation-primary)",
              }}
            >
              작품 둘러보기
              <ArrowIcon
                width={18}
                height={18}
                className="transition-transform duration-150 group-hover:translate-x-0.5"
              />
            </button>
            <button
              type="button"
              className="rounded-md border border-grey-400 bg-white px-6 text-[16px] font-medium text-hof transition-colors hover:border-grey-1000 hover:bg-faint"
              style={{ minHeight: "48px" }}
            >
              큐레이션 받기
            </button>
          </div>

          <dl className="flex gap-8 pt-4">
            {[
              ["1,200+", "등록 작품"],
              ["320+", "참여 작가"],
              ["4.9", "평균 만족도"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col">
                <dt className="text-[24px] font-semibold text-grey-1000">
                  {value}
                </dt>
                <dd className="text-[13px] text-text-secondary">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Layered gallery */}
        <div className="relative h-[360px] sm:h-[440px] lg:h-[500px]">
          <figure
            className="absolute left-0 top-6 h-[78%] w-[64%] overflow-hidden rounded-xl"
            style={{ boxShadow: "var(--elevation-high)" }}
          >
            <PaintingTile tile={heroTiles[0]} />
          </figure>
          <figure
            className="absolute right-0 top-0 h-[52%] w-[42%] overflow-hidden rounded-xl"
            style={{ boxShadow: "var(--elevation-primary)" }}
          >
            <PaintingTile tile={heroTiles[1]} />
          </figure>
          <figure
            className="absolute bottom-0 right-4 h-[44%] w-[48%] overflow-hidden rounded-xl"
            style={{ boxShadow: "var(--elevation-primary)" }}
          >
            <PaintingTile tile={heroTiles[2]} />
          </figure>

          {/* Floating price chip */}
          <div
            className="absolute bottom-8 left-2 flex items-center gap-3 rounded-pill bg-white px-4 py-3 sm:left-6"
            style={{ boxShadow: "var(--elevation-high)" }}
          >
            <span
              className="grid h-9 w-9 place-items-center rounded-pill text-white"
              style={{ background: "var(--palette-spruce)" }}
              aria-hidden
            >
              ₩
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[13px] text-text-secondary">
                월 대여가
              </span>
              <span className="text-[15px] font-semibold text-grey-1000">
                29,000원부터
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
