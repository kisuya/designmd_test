const steps = [
  {
    n: "01",
    title: "취향을 알려주세요",
    body: "공간 사진과 좋아하는 분위기를 남기면 큐레이터가 후보를 추려드려요.",
  },
  {
    n: "02",
    title: "작품을 받아보세요",
    body: "안전 포장과 전문 설치까지. 원하는 날짜에 벽에 걸어드립니다.",
  },
  {
    n: "03",
    title: "마음껏 바꿔보세요",
    body: "월 단위로 자유롭게 교체하고, 마음에 들면 그대로 소장할 수 있어요.",
  },
] as const;

/** Warm-neutral premium band — hospitality warmth over a hapuna surface (design.md §1/§2). */
export function HowItWorks() {
  return (
    <section className="px-4 py-6 sm:px-6">
      <div
        className="mx-auto max-w-[1180px] overflow-hidden rounded-xl px-6 py-12 sm:px-12 sm:py-16"
        style={{ background: "var(--palette-hapuna)" }}
      >
        <div className="flex flex-col gap-3">
          <span className="text-[14px] font-semibold tracking-[0.04em] text-plus">
            HOW IT WORKS
          </span>
          <h2 className="max-w-[20ch] text-[32px] font-semibold leading-[1.125] tracking-[-0.01em] text-grey-1000 sm:text-[40px]">
            세 단계면 충분합니다
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="flex flex-col gap-3 rounded-lg bg-white/70 p-6 backdrop-blur-sm"
              style={{ border: "1px solid rgba(0,0,0,0.04)" }}
            >
              <span
                className="text-[28px] font-bold"
                style={{ color: "var(--palette-rausch)" }}
              >
                {step.n}
              </span>
              <h3 className="text-[18px] font-semibold text-grey-1000">
                {step.title}
              </h3>
              <p className="text-[15px] leading-[1.4] text-text-secondary">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
