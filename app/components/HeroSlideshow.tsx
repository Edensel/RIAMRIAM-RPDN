"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  eyebrow?: string;
  title: string[];
  subtitle: string;
  description?: string;
  bgImage: string;
  variant: "brand" | "dialogue";
}

const brandLine = "RIAMRIAM  Peace and Development Network";

const slides: Slide[] = [
  {
    id: 1,
    title: ["RIAMRIAM"],
    subtitle: "Peace and Development Network",
    bgImage: "/riamriam-logo.png",
    variant: "brand"
  },
  {
    id: 2,
    eyebrow: "Cross-Border Peacebuilding",
    title: ["Continuous Dialogue.", "Cultural Diplomacy for Peace."],
    subtitle: "Cultural Diplomacy for Peace.",
    description:
      "Restoring trust, establishing water agreements, and empowering communities along the Turkana, Karamoja, Toposa, and Nyangatom borders of East Africa.",
    bgImage: "/riamriam-logo.png",
    variant: "dialogue"
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative isolate h-[calc(100svh-9rem)] min-h-[620px] overflow-hidden bg-forest text-paper">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,rgba(16,42,46,0.98)_0%,rgba(16,42,46,0.9)_48%,rgba(7,82,103,0.84)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div
        className="flex h-full transition-transform duration-[1100ms] ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative h-full w-full shrink-0 overflow-hidden"
            aria-hidden={index !== currentSlide}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.13]">
              <Image
                src={slide.bgImage}
                alt=""
                fill
                className="object-contain object-center p-8 sm:p-16"
                priority
              />
            </div>

            <div className="relative z-10 flex h-full items-center justify-center px-5 pb-24 pt-12 sm:px-8">
              {slide.variant === "brand" ? (
                <div className="w-full overflow-hidden text-center">
                  <div className="brand-marquee flex w-max items-center gap-12 whitespace-nowrap">
                    {[0, 1].map((copy) => (
                      <div key={copy} className="flex items-baseline gap-8 px-6">
                        <span className="text-[clamp(4rem,12vw,10rem)] font-black leading-none tracking-normal text-paper">
                          RIAMRIAM
                        </span>
                        <span className="text-[clamp(1.25rem,3.4vw,3rem)] font-black leading-none tracking-normal text-gold">
                          Peace and Development Network
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mx-auto mt-8 max-w-2xl px-5 text-sm font-bold uppercase tracking-[0.24em] text-paper/75">
                    {brandLine}
                  </p>
                </div>
              ) : (
                <div className="mx-auto max-w-6xl text-center">
                  {slide.eyebrow && (
                    <p className="mb-6 text-xs font-black uppercase tracking-[0.22em] text-gold sm:text-sm">
                      {slide.eyebrow}
                    </p>
                  )}
                  <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[1.08] tracking-normal text-paper">
                    {slide.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h1>
                  {slide.description && (
                    <p className="mx-auto mt-8 max-w-4xl text-base font-bold leading-7 text-paper/88 sm:text-xl">
                      {slide.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlay(false);
            }}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-gold w-8"
                : "bg-white/40 w-3 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex justify-between px-6">
        <button
          onClick={handlePrev}
          className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
          aria-label="Previous slide"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
          aria-label="Next slide"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Tagline Section at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 grid border-t border-paper/20 bg-ink/30 text-center text-sm font-black uppercase text-paper sm:grid-cols-3">
        <span className="border-b border-paper/15 px-5 py-5 sm:border-b-0 sm:border-r">Continuous Dialogue</span>
        <span className="border-b border-paper/15 px-5 py-5 sm:border-b-0 sm:border-r">Cultural Diplomacy</span>
        <span className="px-5 py-5">Peace and Cooperation</span>
      </div>
    </div>
  );
}
