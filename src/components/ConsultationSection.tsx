import { ConsultationForm } from "@/components/ConsultationForm";

/** 상담 섹션 — 따뜻한 뉴트럴 배경 위에 좌측 카피 + 우측 폼 (design.md §1/§5) */
export function ConsultationSection() {
  return (
    <section id="consultation" className="px-4 py-6 sm:px-6">
      <div
        className="mx-auto max-w-[1180px] overflow-hidden rounded-xl px-6 py-12 sm:px-12 sm:py-16"
        style={{ background: "var(--palette-capiz)" }}
      >
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-[14px] font-semibold tracking-[0.04em] text-plus">
              CONSULTATION
            </span>
            <h2 className="max-w-[16ch] text-[32px] font-semibold leading-[1.125] tracking-[-0.01em] text-grey-1000 sm:text-[40px]">
              어떤 작품이 어울릴지 함께 찾아드려요
            </h2>
            <p className="max-w-[40ch] text-[16px] leading-[1.4] text-text-secondary">
              공간과 취향을 알려주시면 큐레이터가 맞춤 작품을 제안해
              드립니다. 부담 없이 남겨주세요.
            </p>
            <ul className="mt-2 flex flex-col gap-3">
              {[
                "전문 큐레이터 1:1 무료 상담",
                "공간 사진 기반 작품 추천",
                "설치·교체·반납까지 안내",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[15px] text-grey-900"
                >
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-pill text-[12px] text-white"
                    style={{ background: "var(--palette-rausch)" }}
                    aria-hidden
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
