import { artworks } from "@/lib/artworks";
import { ArtworkCard } from "@/components/ArtworkCard";

/** Modular card grid with generous gaps to prevent crowding (design.md §5). */
export function ArtworkGrid() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-[32px] font-semibold leading-[1.125] tracking-[-0.01em] text-grey-1000">
              이번 달 큐레이션
            </h2>
            <p className="mt-2 text-[16px] text-text-secondary">
              지금 가장 사랑받는 작품을 만나보세요
            </p>
          </div>
          <button
            type="button"
            className="rounded-pill border border-grey-400 bg-white px-5 py-3 text-[14px] font-semibold text-hof transition-colors hover:border-grey-1000 hover:bg-faint"
          >
            전체 보기
          </button>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
    </section>
  );
}
