"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "../../../data/gallery";

type Props = {
  images: GalleryImage[];
};

const VISIBLE_COUNT = 1;

export default function ImageSlider({ images }: Props) {
  const [startIndex, setStartIndex] = useState(0);

  if (images.length === 0) return null;

  const maxIndex = images.length - VISIBLE_COUNT;

  const prev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const visibleImages = images.slice(
    startIndex,
    startIndex + VISIBLE_COUNT
  );

  return (
    <div className="relative max-w-5xl mx-auto py-6">
      {/* Images */}
      <div className="grid grid-cols-1 gap-4">
        {visibleImages.map((img, index) => (
          <div
            key={startIndex + index}
            className="relative aspect-[3/2] overflow-hidden rounded bg-gray-200"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1500px) 100vw, 33vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        disabled={startIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 
                   bg-white/80 hover:bg-white 
                   p-3 rounded-full shadow
                   disabled:opacity-40"
        aria-label="Previous images"
      >
        ◀
      </button>

      <button
        onClick={next}
        disabled={startIndex >= maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 
                   bg-white/80 hover:bg-white 
                   p-3 rounded-full shadow
                   disabled:opacity-40"
        aria-label="Next images"
      >
        ▶
      </button>
    </div>
  );
}
