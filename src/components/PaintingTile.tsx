import type { Artwork } from "@/lib/artworks";

interface PaintingTileProps {
  readonly tile: Artwork["tile"];
  readonly className?: string;
}

/**
 * Renders an artwork as a self-contained CSS painting (no external image).
 * Editorial imagery is core to design.md (§5 "let imagery lead"); generating it
 * keeps the rental cards photographic-feeling while staying fully offline.
 */
export function PaintingTile({ tile, className = "" }: PaintingTileProps) {
  return (
    <div
      className={`relative h-full w-full ${className}`}
      style={{ backgroundImage: tile.base }}
      role="img"
      aria-label="작품 이미지"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundImage: tile.layers }}
      />
      {/* Fine grain + brushed sheen for painterly depth */}
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0) 3px, rgba(0,0,0,0.06) 6px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(140% 120% at 50% 0%, transparent 55%, rgba(0,0,0,0.18) 100%)",
        }}
      />
    </div>
  );
}
