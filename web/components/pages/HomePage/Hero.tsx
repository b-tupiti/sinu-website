"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { HeroItem } from "./types";

const AUTO_ADVANCE_MS = 7000;
const BRAND_GRADIENT =
  "linear-gradient(135deg, var(--navy-900) 0%, var(--teal-600) 100%)";

export default function Hero({
  items,
  isDraft,
}: {
  items: HeroItem[];
  isDraft: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Live: filter out items the editor unchecked. Preview: keep them
  // all so editors can iterate on staged slides; a badge on the
  // rendered card marks the hidden ones. `display` may be null on
  // older items saved before the field existed — treat as visible.
  const slides = isDraft
    ? items
    : items.filter((i) => i.display !== false);

  // All hooks must run every render (Rules of Hooks), so declare
  // advance/useEffect up here before the empty-state early return.
  // Both are no-ops when slides.length is 0 or 1.
  const advance = useCallback(
    (delta: number) => {
      if (slides.length === 0) return;
      setIndex((i) => (i + delta + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    if (slides.length <= 1 || paused) return;
    const t = setInterval(() => advance(1), AUTO_ADVANCE_MS);
    return () => clearInterval(t);
  }, [advance, slides.length, paused]);

  // No hero items → keep the section height but fill it with a
  // brand gradient so the space still reads as deliberate SINU
  // branding instead of a flat void.
  if (slides.length === 0) {
    return (
      <div
        style={{
          position: "relative",
          flex: 1,
          background: BRAND_GRADIENT,
        }}
      />
    );
  }

  const safeIndex = Math.min(index, slides.length - 1);
  const active = slides[safeIndex];
  const isSlider = slides.length > 1;

  return (
    <div
      style={{ position: "relative", flex: 1, display: "flex", alignItems: "stretch" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <HeroBackground key={slide.id} slide={slide} active={i === safeIndex} />
      ))}

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(90deg, rgba(18,42,79,.7) 0%, rgba(18,42,79,.5) 50%, rgba(18,42,79,.7) 100%)",
          pointerEvents: "none",
        }}
      />

      <HeroContent slide={active} key={active.id} />

      {isDraft && active.display === false && <HiddenBadge />}

      {isSlider && (
        <>
          <SlideButton direction="prev" onClick={() => advance(-1)} />
          <SlideButton direction="next" onClick={() => advance(1)} />
          <SlideDots count={slides.length} index={safeIndex} onSelect={setIndex} />
        </>
      )}
    </div>
  );
}

function HeroBackground({ slide, active }: { slide: HeroItem; active: boolean }) {
  // Two failure trackers — video prefers over image, but if the video
  // errors we still try the image before giving up to the gradient.
  const [videoFailed, setVideoFailed] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const style: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    opacity: active ? 1 : 0,
    transition: "opacity 700ms ease",
  };

  // Video path — wrapper holds the brand gradient so anything the
  // video doesn't cover (loading, transparent, errored) still reads
  // as deliberate branding. On onError we drop through to image /
  // gradient rather than leaving a broken <video> element on screen.
  if (slide.video?.url && !videoFailed) {
    return (
      <div style={{ ...style, background: BRAND_GRADIENT }}>
        <video
          src={slide.video.url}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    );
  }

  // Image path — same wrapper-gradient pattern. Failed <Image> hides
  // itself so the gradient underneath is what remains. Source URL
  // comes from Wagtail's rendition (see fragment.ts) — with
  // unoptimized: true in next.config.ts, Next passes it straight
  // through without a re-encode step.
  if (slide.image?.rendition?.url && !imageFailed) {
    return (
      <div style={{ ...style, background: BRAND_GRADIENT }}>
        <Image
          src={slide.image.rendition.url}
          alt={slide.image.title}
          fill
          priority={active}
          sizes="100vw"
          onError={() => setImageFailed(true)}
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  }

  // No media (or all media failed) → same brand gradient the
  // empty-hero state uses.
  return <div style={{ ...style, background: BRAND_GRADIENT }} />;
}

function HeroContent({ slide }: { slide: HeroItem }) {
  return (
    <div
      className="hero-content"
      style={{
        position: "relative",
        zIndex: 2,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "var(--sp-16) 24px 150px",
        width: "100%",
        maxWidth: 780,
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: "clamp(42px, 4.6vw, 64px)",
          lineHeight: 1.06,
          letterSpacing: "-0.02em",
          margin: "0 0 24px",
        }}
      >
        {slide.mainText}
      </h1>
      {slide.subText && (
        <p
          className="hero-lead"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: 1.5,
            color: "rgba(255,255,255,.8)",
            margin: "0 0 26px",
          }}
        >
          {slide.subText}
        </p>
      )}
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 8,
        }}
      >
        <HeroLink
          href={slide.primaryButtonPage?.url ?? "#"}
          variant="primary"
          text={slide.primaryButtonText}
        />
        {slide.secondaryButtonText && slide.secondaryButtonPage?.url && (
          <HeroLink
            href={slide.secondaryButtonPage.url}
            variant="secondary"
            text={slide.secondaryButtonText}
          />
        )}
      </div>
    </div>
  );
}

function HeroLink({
  href,
  text,
  variant,
}: {
  href: string;
  text: string;
  variant: "primary" | "secondary";
}) {
  const base: React.CSSProperties = {
    border: variant === "primary" ? "none" : "1px solid rgba(255,255,255,.5)",
    cursor: "pointer",
    background: variant === "primary" ? "#fff" : "transparent",
    color: variant === "primary" ? "var(--navy-800)" : "#fff",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: 16,
    padding: "15px 32px",
    borderRadius: "var(--r-pill)",
    whiteSpace: "nowrap",
    textDecoration: "none",
  };
  return (
    <Link href={href} className="hero-cta" style={base}>
      {text}
    </Link>
  );
}

function HiddenBadge() {
  return (
    <div
      style={{
        position: "absolute",
        top: 16,
        right: 16,
        zIndex: 6,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 12px",
        borderRadius: "var(--r-pill)",
        background: "rgba(217, 96, 48, 0.95)",
        color: "#fff",
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: ".04em",
        textTransform: "uppercase",
        boxShadow: "0 2px 6px rgba(0,0,0,.25)",
      }}
      aria-label="This slide is hidden on live"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
      Hidden — not on live
    </div>
  );
}

function SlideButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? "Previous slide" : "Next slide"}
      style={{
        position: "absolute",
        top: "50%",
        [isPrev ? "left" : "right"]: 16,
        transform: "translateY(-50%)",
        zIndex: 5,
        width: 44,
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background: "rgba(255,255,255,.15)",
        color: "#fff",
        border: "1px solid rgba(255,255,255,.25)",
        cursor: "pointer",
        backdropFilter: "blur(4px)",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {isPrev ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
      </svg>
    </button>
  );
}

function SlideDots({
  count,
  index,
  onSelect,
}: {
  count: number;
  index: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Hero slides"
      style={{
        position: "absolute",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 5,
        display: "flex",
        gap: 8,
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === index}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onSelect(i)}
          style={{
            width: i === index ? 26 : 8,
            height: 8,
            borderRadius: 999,
            border: "none",
            background: i === index ? "#fff" : "rgba(255,255,255,.4)",
            cursor: "pointer",
            transition: "width 200ms ease, background 200ms ease",
          }}
        />
      ))}
    </div>
  );
}
