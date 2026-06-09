/**
 * Sample artwork catalogue for the rental front page.
 * Each artwork carries a self-contained CSS "painting" signature so the page
 * renders identically offline — keeping the design.md verification reliable.
 */
export type ArtworkTier = "standard" | "plus" | "luxe";

export interface Artwork {
  readonly id: string;
  readonly title: string;
  readonly artist: string;
  readonly medium: string;
  readonly location: string;
  readonly rating: number;
  readonly reviews: number;
  readonly monthlyPrice: number;
  readonly tier: ArtworkTier;
  readonly liked: boolean;
  /** Layered CSS gradients that compose the abstract painting tile. */
  readonly tile: {
    readonly base: string;
    readonly layers: string;
  };
}

export const artworks: readonly Artwork[] = [
  {
    id: "aurora-tide",
    title: "오로라 타이드",
    artist: "이도현",
    medium: "캔버스에 유화",
    location: "서울 성수",
    rating: 4.97,
    reviews: 128,
    monthlyPrice: 48000,
    tier: "plus",
    liked: true,
    tile: {
      base: "linear-gradient(150deg, #ff385c 0%, #e31c5f 48%, #460479 100%)",
      layers:
        "radial-gradient(120% 90% at 18% 22%, rgba(255,255,255,0.55), transparent 60%), radial-gradient(80% 70% at 82% 78%, rgba(70,4,121,0.65), transparent 65%)",
    },
  },
  {
    id: "warm-clay",
    title: "웜 클레이",
    artist: "Soyoung Park",
    medium: "수채 · 한지",
    location: "부산 영도",
    rating: 4.89,
    reviews: 74,
    monthlyPrice: 32000,
    tier: "standard",
    liked: false,
    tile: {
      base: "linear-gradient(160deg, #f5f1ea 0%, #e07912 70%, #c13515 100%)",
      layers:
        "radial-gradient(90% 80% at 30% 30%, rgba(255,255,255,0.7), transparent 55%), radial-gradient(70% 60% at 78% 80%, rgba(193,53,21,0.5), transparent 60%)",
    },
  },
  {
    id: "quiet-spruce",
    title: "콰이엇 스프루스",
    artist: "한지우",
    medium: "아크릴 · 패널",
    location: "제주 한림",
    rating: 4.92,
    reviews: 95,
    monthlyPrice: 38000,
    tier: "standard",
    liked: false,
    tile: {
      base: "linear-gradient(145deg, #008a05 0%, #12a139 45%, #222222 100%)",
      layers:
        "radial-gradient(100% 80% at 22% 18%, rgba(247,246,242,0.6), transparent 58%), radial-gradient(70% 70% at 80% 75%, rgba(0,138,5,0.55), transparent 62%)",
    },
  },
  {
    id: "midnight-luxe",
    title: "미드나잇 럭스",
    artist: "Noah Bennett",
    medium: "혼합매체 · 골드리프",
    location: "서울 한남",
    rating: 5.0,
    reviews: 41,
    monthlyPrice: 92000,
    tier: "luxe",
    liked: true,
    tile: {
      base: "linear-gradient(135deg, #460479 0%, #222222 60%, #000000 100%)",
      layers:
        "radial-gradient(80% 70% at 28% 26%, rgba(146,23,77,0.75), transparent 60%), radial-gradient(60% 60% at 78% 80%, rgba(224,121,18,0.45), transparent 60%)",
    },
  },
  {
    id: "soft-capiz",
    title: "소프트 카피즈",
    artist: "정하늘",
    medium: "파스텔 · 종이",
    location: "대구 수성",
    rating: 4.85,
    reviews: 63,
    monthlyPrice: 29000,
    tier: "standard",
    liked: false,
    tile: {
      base: "linear-gradient(160deg, #ffffff 0%, #f7f6f2 40%, #318cf7 130%)",
      layers:
        "radial-gradient(95% 80% at 26% 24%, rgba(255,255,255,0.85), transparent 55%), radial-gradient(75% 70% at 82% 82%, rgba(49,140,247,0.45), transparent 62%)",
    },
  },
  {
    id: "rausch-bloom",
    title: "라우쉬 블룸",
    artist: "Mara Lindqvist",
    medium: "캔버스에 유화",
    location: "서울 연남",
    rating: 4.94,
    reviews: 112,
    monthlyPrice: 54000,
    tier: "plus",
    liked: false,
    tile: {
      base: "linear-gradient(140deg, #e61e4d 0%, #e31c5f 40%, #d70466 100%)",
      layers:
        "radial-gradient(100% 80% at 24% 22%, rgba(255,255,255,0.6), transparent 58%), radial-gradient(70% 70% at 80% 82%, rgba(146,23,77,0.55), transparent 60%)",
    },
  },
  {
    id: "hapuna-dawn",
    title: "하푸나 던",
    artist: "서지안",
    medium: "수채 · 캔버스",
    location: "강릉 안목",
    rating: 4.88,
    reviews: 57,
    monthlyPrice: 35000,
    tier: "standard",
    liked: false,
    tile: {
      base: "linear-gradient(155deg, #f5f1ea 0%, #ff385c 90%, #e00b41 140%)",
      layers:
        "radial-gradient(95% 80% at 30% 28%, rgba(255,255,255,0.78), transparent 55%), radial-gradient(70% 65% at 78% 80%, rgba(255,56,92,0.4), transparent 62%)",
    },
  },
  {
    id: "luxe-graphite",
    title: "럭스 그래파이트",
    artist: "Theo Marchand",
    medium: "목탄 · 캔버스",
    location: "서울 청담",
    rating: 4.99,
    reviews: 38,
    monthlyPrice: 78000,
    tier: "luxe",
    liked: false,
    tile: {
      base: "linear-gradient(135deg, #515151 0%, #222222 55%, #000000 100%)",
      layers:
        "radial-gradient(85% 75% at 26% 24%, rgba(247,247,247,0.5), transparent 58%), radial-gradient(60% 60% at 80% 80%, rgba(70,4,121,0.4), transparent 60%)",
    },
  },
];

export const categories: readonly { id: string; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "oil", label: "유화" },
  { id: "watercolor", label: "수채화" },
  { id: "abstract", label: "추상" },
  { id: "minimal", label: "미니멀" },
  { id: "print", label: "한정 프린트" },
  { id: "photography", label: "사진" },
  { id: "sculpture", label: "오브제" },
  { id: "luxe", label: "럭스 컬렉션" },
];
