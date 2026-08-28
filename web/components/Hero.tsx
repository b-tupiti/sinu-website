"use client"; // <--- Add this line at the top
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Info } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=2000&q=85&auto=format&fit=crop',
    alt: 'graduates celebrating at commencement',
  },
];

const SLIDE_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="relative w-full h-[calc(100vh-11rem)] overflow-hidden">
      {/* Full-width slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <Image
              alt={slides[index].alt}
              src={slides[index].src}
              fill
              priority={index === 0}
              sizes="100vw"
              referrerPolicy="no-referrer"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* L-R gradient overlay, ending around 35% */}
        <div className="absolute inset-0 bg-linear-to-r from-tertiary-fixed-dim/90 to-transparent to-35%" />
      </div>

      {/* Slide indicators — top-left of the hero */}
      <div className="absolute top-8 z-20 max-w-screen-2xl mx-auto inset-x-0 px-12">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      </div>

      {/* Info icon — top-right of the hero */}
      <div className="absolute top-8 right-12 z-20 group">
        <button
          type="button"
          aria-label="Image description"
          className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm transition-colors"
        >
          <Info className="w-4 h-4" />
        </button>
        <div className="absolute top-full right-0 mt-2 w-64 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none transition-all duration-200">
          <div className="bg-black/85 text-white text-xs leading-relaxed px-3 py-2 rounded backdrop-blur-sm">
            {slides[index].alt}
          </div>
        </div>
      </div>

      {/* Content — vertically centered, in the same container as the navbar */}
      <div className="relative z-10 h-full max-w-screen-2xl mx-auto px-12 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          <h1 className="font-headline text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
            Empowering Your <br />
            Future at SINU
          </h1>
          <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed mb-8">
            Advancing the frontier of knowledge in the Solomon Islands and the Pacific. Join a community dedicated to academic excellence and cultural heritage.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-tertiary-fixed-dim text-primary px-7 py-3.5 rounded font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-lg"
          >
            Find a Course
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}
