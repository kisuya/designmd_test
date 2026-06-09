"use client";

import { useState } from "react";
import type { Artwork } from "@/lib/artworks";
import { HeartIcon, StarIcon } from "@/components/Icon";
import { PaintingTile } from "@/components/PaintingTile";

const tierLabel: Record<Artwork["tier"], string | null> = {
  standard: null,
  plus: "PLUS",
  luxe: "LUXE",
};

const tierColor: Record<Artwork["tier"], string> = {
  standard: "transparent",
  plus: "var(--palette-plus)",
  luxe: "var(--palette-luxe)",
};

const priceFormatter = new Intl.NumberFormat("ko-KR");

export function ArtworkCard({ artwork }: { readonly artwork: Artwork }) {
  const [liked, setLiked] = useState(artwork.liked);
  const badge = tierLabel[artwork.tier];

  return (
    <article className="group flex flex-col">
      {/* Media */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
        <div className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-[1.03]">
          <PaintingTile tile={artwork.tile} />
        </div>

        {/* Tier badge — frosted chip (design.md §4) */}
        {badge && (
          <span
            className="absolute left-3 top-3 rounded-pill px-3 py-1 text-[12px] font-semibold tracking-[0.04em] text-white"
            style={{
              background: tierColor[artwork.tier],
              boxShadow: "var(--elevation-tertiary)",
            }}
          >
            {badge}
          </span>
        )}

        {/* Save action — icon-led with subtle surface contrast */}
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-pressed={liked}
          aria-label={liked ? "찜 해제" : "찜하기"}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-pill transition-transform duration-150 hover:scale-110 active:scale-95"
        >
          <HeartIcon filled={liked} width={24} height={24} />
        </button>
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-1 pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[16px] font-semibold leading-[1.18] text-grey-1000">
            {artwork.title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-[14px] text-grey-1000">
            <StarIcon width={14} height={14} className="text-grey-1000" />
            {artwork.rating.toFixed(2)}
          </span>
        </div>
        <p className="text-[14px] text-text-secondary">
          {artwork.artist} · {artwork.medium}
        </p>
        <p className="text-[14px] text-text-secondary">{artwork.location}</p>
        <p className="pt-1 text-[15px] text-grey-1000">
          <span className="font-semibold">
            ₩{priceFormatter.format(artwork.monthlyPrice)}
          </span>
          <span className="text-text-secondary"> / 월</span>
        </p>
      </div>
    </article>
  );
}
