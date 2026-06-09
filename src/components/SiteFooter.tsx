import { GlobeIcon } from "@/components/Icon";

const columns = [
  {
    title: "서비스",
    links: ["작품 둘러보기", "큐레이션 신청", "기업/오피스", "선물하기"],
  },
  {
    title: "작가",
    links: ["작가 등록", "정산 안내", "전시 협업", "작가 스토리"],
  },
  {
    title: "지원",
    links: ["자주 묻는 질문", "배송·설치 안내", "반납 정책", "고객센터"],
  },
] as const;

export function SiteFooter() {
  return (
    <footer
      className="mt-6 px-4 pb-10 pt-12 sm:px-6"
      style={{ background: "var(--palette-faint)" }}
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 pb-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span
                className="grid h-8 w-8 place-items-center rounded-lg text-white"
                style={{ backgroundImage: "var(--gradient-rausch)" }}
                aria-hidden
              >
                ✦
              </span>
              <span className="text-[18px] font-bold text-hof">canvas</span>
            </div>
            <p className="max-w-[34ch] text-[14px] leading-[1.4] text-text-secondary">
              그림을 소유하지 않고도 매달 새로운 영감을. 공간을 위한 작품
              구독 서비스.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[14px] font-semibold text-hof">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-text-secondary transition-colors hover:text-grey-1000"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-grey-300 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-text-secondary">
            © 2026 canvas — design.md 검증용 데모
          </p>
          <button
            type="button"
            className="flex w-fit items-center gap-2 text-[13px] font-semibold text-hof transition-colors hover:text-rausch"
          >
            <GlobeIcon width={16} height={16} />
            한국어 (KR) · ₩ KRW
          </button>
        </div>
      </div>
    </footer>
  );
}
