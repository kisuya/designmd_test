"use client";

import { useState } from "react";
import { categories } from "@/lib/artworks";

/**
 * Rounded, touchable category chips with quiet hover fills (design.md §4).
 * Selection relies on text strength + underline, not loud color fills.
 */
export function CategoryRail() {
  const [active, setActive] = useState<string>("all");

  return (
    <nav
      aria-label="작품 카테고리"
      className="sticky top-[88px] z-40 border-b border-grey-200 bg-white/85 backdrop-blur-md"
    >
      <ul className="mx-auto flex max-w-[1180px] gap-2 overflow-x-auto px-4 py-4 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => {
          const isActive = cat.id === active;
          return (
            <li key={cat.id}>
              <button
                type="button"
                onClick={() => setActive(cat.id)}
                aria-pressed={isActive}
                className={`whitespace-nowrap rounded-pill border px-4 py-2 text-[14px] transition-colors duration-150 ${
                  isActive
                    ? "border-grey-1000 bg-grey-1000 font-semibold text-white"
                    : "border-grey-300 bg-white font-medium text-grey-800 hover:border-grey-1000 hover:bg-faint"
                }`}
              >
                {cat.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
